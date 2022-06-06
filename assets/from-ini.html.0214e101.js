import{_ as e,o as n,c as a,e as s}from"./app.4b6143d5.js";const t={},o=s(`<p>Converts ini data into table. Use this when nushell cannot determine the input file extension.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Let&#39;s say we have the following <code>.txt</code> file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> sample.txt
<span class="token punctuation">[</span>SectionOne<span class="token punctuation">]</span>

key <span class="token operator">=</span> value
integer <span class="token operator">=</span> <span class="token number">1234</span>
string1 <span class="token operator">=</span> <span class="token string">&#39;Case 1&#39;</span>
</code></pre></div><p>This file is actually a ini file, but the file extension isn&#39;t <code>.ini</code>. That&#39;s okay, we can use the <code>from ini</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> sample.txt <span class="token operator">|</span> from ini <span class="token operator">|</span> get SectionOne
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 key   \u2502 integer \u2502 string1
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 value \u2502 <span class="token number">1234</span>    \u2502 <span class="token string">&#39;Case 1&#39;</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,6),p=[o];function c(i,l){return n(),a("div",null,p)}var d=e(t,[["render",c],["__file","from-ini.html.vue"]]);export{d as default};
