import{_ as a,o as s,c as e,e as n}from"./app.94815f9c.js";const o={},t=n(`<p>This command allows you to define shortcuts for other common commands. By default, they only apply to the current session. To persist them, add them to your config.</p><p>Syntax: <code>alias &lt;name&gt; = &lt;body&gt;</code></p><p>The command expects two parameters:</p><ul><li>The name of the alias</li><li>The body of the alias</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a custom <code>myecho</code> command as an alias:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> myecho <span class="token operator">=</span> <span class="token builtin class-name">echo</span>
<span class="token operator">&gt;</span> myecho <span class="token string">&quot;hello world&quot;</span>
hello world
</code></pre></div><p>The suggested help command works!</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> myecho -h

Usage:
  <span class="token operator">&gt;</span> myecho <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>

flags:
  -h, --help: Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,9),l=[t];function c(p,r){return s(),e("div",null,l)}var i=a(o,[["render",c],["__file","alias.html.vue"]]);export{i as default};
