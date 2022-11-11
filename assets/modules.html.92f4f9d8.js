import{_ as d,r as l,o as a,c as r,a as e,b as n,w as s,e as i,d as o}from"./app.6758efda.js";const h={},c=i(`<h1 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h1><p>Similar to many other programming languages, Nushell also has modules that let you import custom commands into a current scope. However, since Nushell is also a shell, modules allow you to import environment variables which can be used to conveniently activate/deactivate various environments.</p><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><p>A simple module can be defined like this:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; module greetings {
     export def hello [name: string] {
         $&quot;hello ($name)!&quot;
     }

     export def hi [where: string] {
         $&quot;hi ($where)!&quot;
     }
}
</code></pre></div><p>or in a file named the same as the module you want to create:</p><div class="language-text ext-text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div><p>We defined <code>hello</code> and <code>hi</code> custom commands inside a <code>greetings</code> module.</p><p>The <code>export</code> keyword makes it possible to later import the commands from the module.</p>`,9),u=o("Similar to "),m=e("code",null,"def",-1),p=o(", it is also possible to mark "),g=e("code",null,"def-env",-1),f=o(" with the "),_=e("code",null,"export",-1),x=o(" keyword (you can learn more about "),v=e("code",null,"def-env",-1),b=o(" in the "),w=o("Environment"),y=o(" chapter)."),q=e("h2",{id:"using-modules",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-modules","aria-hidden":"true"},"#"),o(" Using modules")],-1),k=o("By itself, the module does not do anything. To use what the module exports, we need to "),$=e("code",null,"use",-1),N=o(" it."),E=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> use greetings

> greetings hello "world"
hello world!

> greetings hi "there"
hi there!
`)])],-1),O=e("p",null,[o("The "),e("code",null,"hello"),o(" and "),e("code",null,"hi"),o(" commands are now available with the "),e("code",null,"greetings"),o(" prefix.")],-1),T=e("h2",{id:"importing-symbols",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#importing-symbols","aria-hidden":"true"},"#"),o(" Importing symbols")],-1),A=o("In general, anything after the "),H=e("code",null,"use",-1),M=o(" keyword forms an "),B=e("strong",null,"import pattern",-1),I=o(" which controls how the symbols are imported. The import pattern can be one of the following:"),V=i(`<p><code>use greetings</code></p><p>Imports all symbols with the module name as a prefix (we saw this in the previous example).</p><p><code>use greetings hello</code></p><p>The <code>hello</code> symbol will be imported directly without any prefix.</p><p><code>use greetings [ hello, hi ]</code></p><p>Imports multiple symbols directly without any prefix.</p><p><code>use greetings *</code></p><p>You can also use the module name and the <code>*</code> glob to import all names directly without any prefix.</p><h2 id="module-files" tabindex="-1"><a class="header-anchor" href="#module-files" aria-hidden="true">#</a> Module Files</h2><p>Nushell lets you implicitly treat a source file as a module. Let&#39;s start by saving the body of the module definition into a file:</p><div class="language-text ext-text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div>`,11),F=o("Now, you can call "),Y=e("code",null,"use",-1),L=o(" directly on the file:"),j=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; use greetings.nu

&gt; greetings hello &quot;world&quot;
hello world!

&gt; greetings hi &quot;there&quot;
hi there!
</code></pre></div><p>Nushell automatically infers the module&#39;s name from the stem of the file (&quot;greetings&quot; without the &quot;.nu&quot; extension). You can use any import patterns as described above with the file name instead of the module name.</p><h2 id="local-custom-commands" tabindex="-1"><a class="header-anchor" href="#local-custom-commands" aria-hidden="true">#</a> Local Custom Commands</h2><p>Any custom commands defined in a module without the <code>export</code> keyword will work only in the module&#39;s scope:</p><div class="language-text ext-text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    greetings-helper &quot;hello&quot; &quot;world&quot;
}

export def hi [where: string] {
    greetings-helper &quot;hi&quot; &quot;there&quot;
}

def greetings-helper [greeting: string, subject: string] {
    $&quot;($greeting) ($subject)!&quot;
}
</code></pre></div><p>Then, in Nushell we import all definitions from the &quot;greetings.nu&quot;:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; use greetings.nu *

&gt; hello &quot;world&quot;
hello world!

&gt; hi &quot;there&quot;
hi there!

&gt; greetings-helper &quot;foo&quot; &quot;bar&quot;  # fails because &#39;greetings-helper&#39; is not exported
</code></pre></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2>`,8),C=o("So far we used modules just to import custom commands. However, modules can also define an environment using "),R=e("code",null,"export-env",-1),S=o(":"),K=i(`<div class="language-text ext-text"><pre class="language-text"><code># greetings.nu

export-env {
    let-env MYNAME = &quot;Arthur, King of the Britons&quot;
}

export def hello [] {
    $&quot;hello ($env.MYNAME)&quot;
}
</code></pre></div><p><code>use</code> will run the code inside the <code>export-env</code> block and merge its environment into the current scope:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; use greetings.nu

&gt; $env.MYNAME
Arthur, King of the Britons

&gt; greetings hello
hello Arthur, King of the Britons!
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You might wonder why we can&#39;t just define <code>let-env</code> at the top of the module. The reason is that the <code>export-env {...}</code> block keeps its scope separate from the rest of the module which makes it more organized. You can put a complex code defining your environment without polluting the namespace of the module, for example:</p><div class="language-text ext-text"><pre class="language-text"><code>export-env {
    def tmp [] { &quot;tmp&quot; }
    def other [] { &quot;other&quot; }

    let len = (tmp | str length)

    load-env {
        OTHER_ENV: (other)
        TMP_LEN: $len
    }
}
</code></pre></div><p>Only <code>$env.TMP_LEN</code> and <code>$env.OTHER_ENV</code> are preserved after evaluating the <code>export-env</code> module.</p></div><h2 id="exporting-symbols" tabindex="-1"><a class="header-anchor" href="#exporting-symbols" aria-hidden="true">#</a> Exporting symbols</h2><p>Apart from <code>def</code> and <code>def-env</code>, you can also export <code>alias</code>es and <code>extern</code>s, giving you a way to only use these features when you need. Exporting externs also gives you the ability to hide custom completion commands in a module, so they don&#39;t have to be part of the global namespace.</p><p>Here&#39;s the full list of ways you can export:</p><ul><li><code>export def</code> - export a custom command</li><li><code>export def-env</code> - export a custom environment command</li><li><code>export alias</code> - export an alias</li><li><code>export extern</code> - export a known external definition</li></ul><h2 id="hiding" tabindex="-1"><a class="header-anchor" href="#hiding" aria-hidden="true">#</a> Hiding</h2>`,9),P=o('Any custom command or alias, imported from a module or not, can be "hidden", restoring the previous definition. We do this with the '),W=e("code",null,"hide",-1),z=o(" command:"),U=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> def foo [] { "foo" }

> foo
foo

> hide foo

> foo  # error! command not found!
`)])],-1),D=o("The "),G=e("code",null,"hide",-1),J=o(" command also accepts import patterns, just like "),Q=e("code",null,"use",-1),X=o(". The import pattern is interpreted slightly differently, though. It can be one of the following:"),Z=i('<p><code>hide foo</code> or <code>hide greetings</code></p><ul><li>If the name is a custom command or an environment variable, hides it directly. Otherwise:</li><li>If the name is a module name, hides all of its exports prefixed with the module name</li></ul><p><code>hide greetings hello</code></p><ul><li>Hides only the prefixed command / environment variable</li></ul><p><code>hide greetings [hello, hi]</code></p><ul><li>Hides only the prefixed commands / environment variables</li></ul><p><code>hide greetings *</code></p><ul><li>Hides all of the module&#39;s exports, without the prefix</li></ul><h2 id="hiding-environment-variables" tabindex="-1"><a class="header-anchor" href="#hiding-environment-variables" aria-hidden="true">#</a> Hiding Environment Variables</h2>',9),ee=o("Environment variables can be hidden with "),oe=e("code",null,"hide-env",-1),te=o(":"),ne=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = "FOO"

> $env.FOO
FOO

> hide-env FOO

> $env.FOO  # error! environment variable not found!
`)])],-1);function se(ie,de){const t=l("RouterLink");return a(),r("div",null,[c,e("p",null,[u,n(t,{to:"/book/commands/def.html"},{default:s(()=>[m]),_:1}),p,n(t,{to:"/book/commands/def-env.html"},{default:s(()=>[g]),_:1}),f,_,x,n(t,{to:"/book/commands/def-env.html"},{default:s(()=>[v]),_:1}),b,n(t,{to:"/book/environment.html"},{default:s(()=>[w]),_:1}),y]),q,e("p",null,[k,n(t,{to:"/book/commands/use.html"},{default:s(()=>[$]),_:1}),N]),E,O,T,e("p",null,[A,n(t,{to:"/book/commands/use.html"},{default:s(()=>[H]),_:1}),M,B,I]),V,e("p",null,[F,n(t,{to:"/book/commands/use.html"},{default:s(()=>[Y]),_:1}),L]),j,e("p",null,[C,n(t,{to:"/book/commands/export-env.html"},{default:s(()=>[R]),_:1}),S]),K,e("p",null,[P,n(t,{to:"/book/commands/hide.html"},{default:s(()=>[W]),_:1}),z]),U,e("p",null,[D,n(t,{to:"/book/commands/hide.html"},{default:s(()=>[G]),_:1}),J,n(t,{to:"/book/commands/use.html"},{default:s(()=>[Q]),_:1}),X]),Z,e("p",null,[ee,n(t,{to:"/book/commands/hide-env.html"},{default:s(()=>[oe]),_:1}),te]),ne])}const ae=d(h,[["render",se],["__file","modules.html.vue"]]);export{ae as default};
