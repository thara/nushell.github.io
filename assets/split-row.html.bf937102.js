import{_ as s,o as a,c as n,e}from"./app.3a8901ae.js";const t={},p=e(`<p>splits contents over multiple rows via the separator.</p><p>Syntax: <code>split row &lt;separator&gt;</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;separator&gt;</code> the character that denotes what separates rows</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>We can build a table from a file that looks like this</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> table.txt
<span class="token number">4</span>, <span class="token number">0</span>, <span class="token number">2</span>, <span class="token number">0</span>, <span class="token number">7</span>, <span class="token number">8</span>
</code></pre></div><p>using the <code>split row</code> command.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">open</span> table.txt <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;, &quot;</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">4</span>
 <span class="token number">1</span> \u2502 <span class="token number">0</span>
 <span class="token number">2</span> \u2502 <span class="token number">2</span>
 <span class="token number">3</span> \u2502 <span class="token number">0</span>
 <span class="token number">4</span> \u2502 <span class="token number">7</span>
 <span class="token number">5</span> \u2502 <span class="token number">8</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div>`,9),o=[p];function r(c,l){return a(),n("div",null,o)}var u=s(t,[["render",r],["__file","split-row.html.vue"]]);export{u as default};
