import{_ as s,r,o as l,c,a as n,b as a,w as i,e as t,d as e}from"./app.68c16707.js";const d={},h=t(`<h1 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h1><p>A common task in a shell is to control the environment that external applications will use. This is often done automatically, as the environment is packaged up and given to the external application as it launches. Sometimes, though, we want to have more precise control over what environment variables an application sees.</p><p>You can see the current environment variables that will be sent to applications by echoing the value for <code>$nu.env</code></p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $nu.env
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 COLORTERM                \u2502 truecolor
 DBUS_SESSION_BUS_ADDRESS \u2502 unix:path=/run/user/1000/bus
 DESKTOP_SESSION          \u2502 gnome
 DISPLAY                  \u2502 :1
</code></pre></div><h2 id="single-use-environment-variables" tabindex="-1"><a class="header-anchor" href="#single-use-environment-variables" aria-hidden="true">#</a> Single-use environment variables</h2>`,5),v=e("The environment is created from the settings in the Nu configuration and from the environment that Nu is run inside of. You can updated the environment permanently using the techniques listed in "),u=e("configuration"),p=e(" chapter."),m=t(`<p>You can also temporarily update an environment variable when you run a command or pipeline of commands.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; with-env [FOO BAR] { echo $nu.env.FOO }
BAR
</code></pre></div><p>The <code>with-env</code> command will temporarily set the environment variable to the value given (here: the variable &quot;FOO&quot; is given the value &quot;BAR&quot;). Once this is done, the block will run with this new environment variable set.</p><p>A common shorthand, inspired by Bash and others, is also available. You can write the above example as:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; FOO=BAR echo $nu.env.FOO
BAR
</code></pre></div><h2 id="scoped-environment-variables" tabindex="-1"><a class="header-anchor" href="#scoped-environment-variables" aria-hidden="true">#</a> Scoped environment variables</h2><p>You can also set environment variables that will be available in the current scope (the block you&#39;re in and any block inside of it).</p><p>To do so, you can use the <code>let-env</code> command.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = BAR
</code></pre></div><p>let-env is similar to the <strong>export</strong> command in bash.</p><p>If you have more than one environment variable you&#39;d like to set, you can create a table of name/value pairs and load multiple variables at the same time.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; load-env [[name, value]; [&quot;BOB&quot;, &quot;FOO&quot;] [&quot;JAY&quot;, &quot;BAR&quot;]]
</code></pre></div><h2 id="permanent-environment-variables" tabindex="-1"><a class="header-anchor" href="#permanent-environment-variables" aria-hidden="true">#</a> Permanent environment variables</h2>`,13),g=e("You can also set environment variables that are set at startup and are available for the duration of Nushell running. These can be set in the "),O=n("code",null,"env",-1),b=e(" section of the "),x=e("config"),f=e("."),_=t(`<h2 id="removing-environment-variables" tabindex="-1"><a class="header-anchor" href="#removing-environment-variables" aria-hidden="true">#</a> Removing environment variables</h2><p>You can remove an environment variable only if it was set in the current scope:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = BAR
...
&gt; unlet-env FOO
</code></pre></div><p>If you want to remove an environment variable stemming from a parent scope, you can do so by shadowing its value with <code>$nothing</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = BAR
&gt; do {
    let-env FOO = $nothing
    # $nu.env.FOO does not exist
  }
&gt; $nu.env.FOO
BAR
</code></pre></div><p>The same approach works with <code>load-env</code>. If you use <code>load-env</code>, you can simultaneously set some variables to a proper string value, while setting others to <code>$nothing</code>, and thus remove them.</p><p>You can also use this approach in your <code>config.toml</code> to remove an environment variable from all future Nu sessions, but this is only possible by using <code>let-env</code> or <code>load-env</code> as part of the <code>startup</code> section. All values in the <code>env</code> section are literal strings:</p><div class="language-text ext-text"><pre class="language-text"><code># in config.toml
startup = [
    &quot;let-env FOO = $nothing&quot;
]

[env]
BAZ=&quot;$nothing&quot;
</code></pre></div><p>In the above example, any Nu session would start with no defined <code>FOO</code> environment variable, while <code>BAZ</code> would have a string value of <code>&quot;$nothing&quot;</code>.</p><p>You can use the same approach with the long form of <code>with-env</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; with-env [FOO $nothing] { echo $nu.env.FOO }
error: Unknown column  # FOO is not seen in the block scope
</code></pre></div><p>Beware that the short form does not work with this feature, it treats the value as a string:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; FOO=$nothing echo $nu.env.FOO
$nothing
</code></pre></div><p>Finally, be aware that environment variables set to <code>$nothing</code> can also be fully removed with <code>unlet-env</code> from the scope in which they are set. If a parent scope has an environment variable with the same name, this value will then be visible in the current scope.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = BAR
&gt; do {
    # FOO == BAR

    let-env FOO = $nothing
    # FOO does not exist

    unlet-env FOO
    # FOO == BAR (FOO from above this scope is seen again)

    unlet-env FOO
    # error: Not an environment variable
    # the command finds FOO in the parent scope and can not remove it
  }
</code></pre></div>`,15);function w(F,y){const o=r("RouterLink");return l(),c("div",null,[h,n("p",null,[v,a(o,{to:"/old_book/configuration.html"},{default:i(()=>[u]),_:1}),p]),m,n("p",null,[g,O,b,a(o,{to:"/old_book/configuration.html"},{default:i(()=>[x]),_:1}),f]),_])}var A=s(d,[["render",w],["__file","environment.html.vue"]]);export{A as default};
