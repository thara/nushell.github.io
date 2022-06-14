import{_ as n,r as o,o as s,c as l,a,b as d,w as c,e as r,d as e}from"./app.aeb1065a.js";const i={},h=r(`<h1 id="custom-commands" tabindex="-1"><a class="header-anchor" href="#custom-commands" aria-hidden="true">#</a> Custom commands</h1><p>Nu&#39;s ability to compose long pipelines allow you a lot of control over your data and system, but it comes at the price of a lot of typing. Ideally, you&#39;d be able to save your well-crafted pipelines to use again and again.</p><p>This is where custom commands come in.</p><p>An example definition of a custom command:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>In this definition, we define the <code>greet</code> command, which takes a single parameter <code>name</code>. Following this parameter is the block that represents what will happen with the custom command runs. When called, the custom command will set the value passed for <code>name</code> as the <code>$name</code> variable, which will be available to the block.</p><p>To run the above, we can call it like we would call built-in commands:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet &quot;world&quot;
</code></pre></div><p>As we do, we also get output just as we would with built-in commands:</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 hello
 1 \u2502 world
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="command-names" tabindex="-1"><a class="header-anchor" href="#command-names" aria-hidden="true">#</a> Command names</h2><p>In Nushell, a command name a string of characters or a quoted string. Here are some examples of valid command names: <code>greet</code>, <code>get-size</code>, <code>mycommand123</code>, <code>&quot;mycommand&quot;</code>, <code>\u{1F60A}</code>, and <code>123</code>.</p><p><em>Note: It&#39;s common practice in Nushell to separate the words of the command with <code>-</code> for better readability.</em> For example <code>get-size</code> instead of <code>getsize</code> or <code>get_size</code>.</p><h2 id="sub-commands" tabindex="-1"><a class="header-anchor" href="#sub-commands" aria-hidden="true">#</a> Sub-commands</h2><p>You can also define subcommands to commands using a space. For example, if we wanted to add a new subcommand to <code>str</code>, we can create it by naming our subcommand to start with &quot;str &quot;. For example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def &quot;str mycommand&quot; [] {
  echo hello
}
</code></pre></div><p>Now we can call our custom command as if it were a built-in subcommand of <code>str</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; str mycommand
</code></pre></div><h2 id="parameter-types" tabindex="-1"><a class="header-anchor" href="#parameter-types" aria-hidden="true">#</a> Parameter types</h2><p>When defining custom commands, you can name and optionally set the type for each parameter. For example, you can write the above as:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name: string] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>The types of parameters are optional. Nushell supports leaving them off, and treating the parameter as <code>any</code> if so. If you annotated a type on a parameter, Nushell will check this type when you call the function.</p><p>For example, let&#39;s say you wanted to take in an <code>int</code> instead:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name: int] {
  echo &quot;hello&quot; $name
}

greet world
</code></pre></div><p>If we try to run the above, Nushell will tell us that the types don&#39;t match:</p><div class="language-text ext-text"><pre class="language-text"><code>error: Type Error
  \u250C\u2500 shell:6:7
  \u2502
5 \u2502 greet world
  \u2502       ^^^^^ Expected int, found world
</code></pre></div><p>This can help you guide users of your definitions to call them with only the supported types.</p><p>The currently accepted types are (as of version 0.28.0):</p><div class="language-text ext-text"><pre class="language-text"><code>int, string, path, table, unit, number, pattern, range, block, any
</code></pre></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><p>In addition to passing positional parameters, you can also pass named parameters by defining flags for your custom commands.</p><p>For example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age: int
] {
  echo $name $age
}
</code></pre></div><p>In the <code>greet</code> definition above, we define the <code>name</code> positional parameter as well as an <code>age</code> flag. This allows the caller of <code>greet</code> to optionally pass the <code>age</code> parameter as well.</p><p>You can call the above using:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet world --age 10
</code></pre></div><p>Or:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet --age 10 world
</code></pre></div><p>Or even leave the flag off altogether:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet world
</code></pre></div><p>Flags can also be defined to have a shorthand version. This allows you to pass a simpler flag as well as a longhand, easier-to-read flag.</p><p>Let&#39;s extend the previous example to use a shorthand flag for the <code>age</code> value:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  echo $name $age
}
</code></pre></div><p><em>Note:</em> Flags are named by their longhand name, so the above example would need to use <code>$age</code> and not <code>$a</code>.</p><p>Now, we can call this updated definition using the shorthand flag:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><h2 id="documenting-your-command" tabindex="-1"><a class="header-anchor" href="#documenting-your-command" aria-hidden="true">#</a> Documenting your command</h2><p>In order to best help users of your custom commands, you can also document them with additional descriptions for the commands and the parameters.</p><p>Taking our previous example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  echo $name $age
}
</code></pre></div><p>Once defined, we can run <code>help greet</code> to get the help information for the command:</p><div class="language-text ext-text"><pre class="language-text"><code>Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt;

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;
</code></pre></div><p>You can see the parameter and flag that we defined, as well as the <code>-h</code> help flag that all commands get.</p><p>To improve this help, we can add descriptions to our definition that will show up in the help:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code># A greeting command that can greet the caller
def greet [
  name: string      # The name of the person to greet
  --age (-a): int   # The age of the person
] {
  echo $name $age
}
</code></pre></div><p>The comments that we put on the definition and its parameters then appear as descriptions inside the <code>help</code> of the command.</p><p>Now, if we run <code>help greet</code>, we&#39;re given a more helpful help text:</p><div class="language-text ext-text"><pre class="language-text"><code>A greeting command that can greet the caller

Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt; The name of the person to greet

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;: The age of the person
</code></pre></div><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>Custom commands stream their output just like built-in commands. For example, let&#39;s say we wanted to refactor this pipeline:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>&gt; ls | get name
</code></pre></div><p>Let&#39;s move <code>ls</code> into a command that we&#39;ve written:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def my-ls [] { ls }
</code></pre></div><p>We can use the output from this command just as we would <code>ls</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; my-ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 myscript.nu
 1 \u2502 myscript2.nu
 2 \u2502 welcome_to_nushell.md
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>This lets us easily build custom commands and process their output. Note, we don&#39;t use return statements like other languages. Instead, we build pipelines that output streams of data that can be connected to other pipelines.</p><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>Custom commands can also take input, just like other commands. This input is passed from the pipeline to the block that the custom command uses.</p><p>Let&#39;s make our own echo command that also outputs a line after each value that it gets from the input:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def my-echo [] {
  each {
    echo $it &quot;--&quot;
  }
}
</code></pre></div><p>Now, if we call the above command later in a pipeline, we can see what it does with the input:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo foo bar | my-echo
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500
 0 \u2502 foo
 1 \u2502 --
 2 \u2502 bar
 3 \u2502 --
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="persisting" tabindex="-1"><a class="header-anchor" href="#persisting" aria-hidden="true">#</a> Persisting</h2>`,73),p=e("For information about how to persist custom commands so that they're visible when you start up Nushell, see the "),u=e("configuration chapter"),m=e(" and add your custom commands to the "),g=a("code",null,"startup",-1),f=e(" section.");function x(w,v){const t=o("RouterLink");return s(),l("div",null,[h,a("p",null,[p,d(t,{to:"/old_book/configuration.html#startup-commands"},{default:c(()=>[u]),_:1}),m,g,f])])}var b=n(i,[["render",x],["__file","custom_commands.html.vue"]]);export{b as default};
