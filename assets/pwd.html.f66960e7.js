import{_ as s,o as n,c as a,e}from"./app.ead8e557.js";const o={},p=e(`<p>Print the current working directory.</p><p><code>-h</code>, <code>--help</code> Display help message.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">pwd</span>
/home/me/nushell/docs/commands
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">pwd</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">|</span> reject Column1 <span class="token operator">|</span> pivot <span class="token operator">|</span> reject Column0
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 Column1</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 home
 <span class="token number">1</span> \u2502 me
 <span class="token number">2</span> \u2502 projects
 <span class="token number">3</span> \u2502 nushell
 <span class="token number">4</span> \u2502 docs
 <span class="token number">5</span> \u2502 commands
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,5),t=[p];function c(l,r){return n(),a("div",null,t)}var m=s(o,[["render",c],["__file","pwd.html.vue"]]);export{m as default};
