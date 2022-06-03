import{_ as a,o as s,c as n,e}from"./app.aa868a80.js";const o={},p=e(`<p>This command increments the value of variable by one.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 <span class="token number">2018</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> rustfmt.toml <span class="token operator">|</span> inc edition
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 <span class="token number">2019</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> get package.version
<span class="token number">0.15</span>.1
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> inc package.version --major <span class="token operator">|</span> get package.version
<span class="token number">1.0</span>.0
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> inc package.version --minor <span class="token operator">|</span> get package.version
<span class="token number">0.16</span>.0
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> inc package.version --patch <span class="token operator">|</span> get package.version
<span class="token number">0.15</span>.2
</code></pre></div>`,8),t=[p];function c(r,l){return s(),n("div",null,t)}var g=a(o,[["render",c],["__file","inc.html.vue"]]);export{g as default};
