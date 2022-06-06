import{_ as n,o as s,c as a,e}from"./app.4b6143d5.js";const t={},o=e(`<p>This command prepends the given row to the front of the table</p><p><strong>Note</strong>:</p><ul><li><code>prepend</code> does not change a file itself. If you want to save your changes, you need to run the <code>save</code> command</li><li>if you want to add something containing a whitespace character, you need to put it in quotation marks</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Let&#39;s complete this table with the missing continents:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> continents.txt <span class="token operator">|</span> lines
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Africa
 <span class="token number">1</span> \u2502 South America
 <span class="token number">2</span> \u2502 Australia
 <span class="token number">3</span> \u2502 Europe
 <span class="token number">4</span> \u2502 Antarctica
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>You can add a new row at the top by using <code>prepend</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> continents.txt <span class="token operator">|</span> lines <span class="token operator">|</span> prepend Asia
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Asia
 <span class="token number">1</span> \u2502 Africa
 <span class="token number">2</span> \u2502 South America
 <span class="token number">3</span> \u2502 Australia
 <span class="token number">4</span> \u2502 Europe
 <span class="token number">5</span> \u2502 Antarctica
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>It&#39;s not possible to add multiple rows at once, so you&#39;ll need to call <code>prepend</code> multiple times:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> continents.txt <span class="token operator">|</span> lines <span class="token operator">|</span> prepend Asia <span class="token operator">|</span> prepend <span class="token string">&quot;North America&quot;</span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 North America
 <span class="token number">1</span> \u2502 Asia
 <span class="token number">2</span> \u2502 Africa
 <span class="token number">3</span> \u2502 South America
 <span class="token number">4</span> \u2502 Australia
 <span class="token number">5</span> \u2502 Europe
 <span class="token number">6</span> \u2502 Antarctica
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,10),p=[o];function c(r,l){return s(),a("div",null,p)}var u=n(t,[["render",c],["__file","prepend.html.vue"]]);export{u as default};
