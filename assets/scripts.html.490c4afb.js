import{_ as e,o as t,c as a,e as s}from"./app.420e319b.js";const n={},i=s(`<h1 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> Scripts</h1><p>In Nushell, you can write and run scripts in the Nushell language. To run a script, you pass it as an argument to the <code>nu</code> commandline application.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; nu myscript.nu
</code></pre></div><p>This will run the script to completion.</p><p>Let&#39;s look at an example script file:</p><div class="language-text ext-text"><pre class="language-text"><code># myscript.nu
def greet [name] {
  echo &quot;hello&quot; $name
}

greet &quot;world&quot;
</code></pre></div><p>A script file defines the definitions for custom commands as well as the main script itself, which will run after the custom commands are defined.</p><p>In the above, first <code>greet</code> is defined by the Nushell interpreter. This allows us to later call this definition. We could have written the above as:</p><div class="language-text ext-text"><pre class="language-text"><code>greet &quot;world&quot;

def greet [name] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>There is no requirement that definitions have to come before the parts of the script that call the definitions, allowing you to put them where you feel comfortable.</p><h2 id="how-scripts-are-processed" tabindex="-1"><a class="header-anchor" href="#how-scripts-are-processed" aria-hidden="true">#</a> How scripts are processed</h2><p>In a script, definitions run first. This allows us to call the definitions using the calls in the script.</p><p>After the definitions run, we start at the top of the script file and run each group of commands one after another.</p><h2 id="script-lines" tabindex="-1"><a class="header-anchor" href="#script-lines" aria-hidden="true">#</a> Script lines</h2><p>To better understand how Nushell sees lines of code, let&#39;s take a look at an example script:</p><div class="language-text ext-text"><pre class="language-text"><code>a
b; c | d
</code></pre></div><p>When this script is run, Nushell will first run the <code>a</code> command to completion and view its results. Next, Nushell will run <code>b; c | d</code> following the rules in the &quot;Command groups&quot; section.</p><h2 id="parameterizing-scripts" tabindex="-1"><a class="header-anchor" href="#parameterizing-scripts" aria-hidden="true">#</a> Parameterizing Scripts</h2><p>Passing arguments to a script is not currently possible, but you can use environmental variables to parameterize a script</p><p>For example, suppose <code>myscript.nu</code> contains the following line:</p><div class="language-text ext-text"><pre class="language-text"><code>echo $nu.env.FOO
</code></pre></div><p>You can execute <code>myscript.nu</code> from <code>bash</code> or within <code>nushell</code> itself by passing <code>FOO</code> as an environmental variable:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; FOO=bar nu ./myscript.nu
bar
</code></pre></div>`,23),r=[i];function o(c,l){return t(),a("div",null,r)}var p=e(n,[["render",o],["__file","scripts.html.vue"]]);export{p as default};
