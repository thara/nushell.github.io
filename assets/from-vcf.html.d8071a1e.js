import{_ as a,o as s,c as n,e}from"./app.ead8e557.js";const t={},o=e(`<p>Parse text as <code>.vcf</code> and create table.</p><p>Syntax: <code>from vcf</code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Suppose contacts.txt is a text file that is formatted like a <code>.vcf</code> (vCard) file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> contacts.txt
BEGIN:VCARD
VERSION:3.0
FN:John Doe
N:Doe<span class="token punctuation">;</span>John<span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
EMAIL<span class="token punctuation">;</span><span class="token assign-left variable">TYPE</span><span class="token operator">=</span>INTERNET:john.doe99@gmail.com
<span class="token punctuation">..</span>.
</code></pre></div><p>Pass the output of the <code>open</code> command to <code>from vcf</code> to get a correctly formatted table:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> contacts.txt <span class="token operator">|</span> from vcf
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#   \u2502 properties</span>
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   <span class="token number">0</span> \u2502 <span class="token punctuation">[</span>table <span class="token number">8</span> rows<span class="token punctuation">]</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> contacts.txt <span class="token operator">|</span> from vcf <span class="token operator">|</span> get properties <span class="token operator">|</span> where <span class="token variable">$it</span>.name <span class="token operator">==</span> <span class="token string">&quot;FN&quot;</span> <span class="token operator">|</span> <span class="token keyword">select</span> value
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#   \u2502</span>
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   <span class="token number">0</span> \u2502 John Doe
</code></pre></div>`,8),p=[o];function c(r,l){return s(),n("div",null,p)}var d=a(t,[["render",c],["__file","from-vcf.html.vue"]]);export{d as default};
