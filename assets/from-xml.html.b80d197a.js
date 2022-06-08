import{_ as n,o as a,c as s,e as t}from"./app.d1a8c647.js";const o={},e=t(`<p>Parse text as <code>.xml</code> and create table. Use this when nushell cannot determine the input file extension.</p><p>Syntax: <code>from xml</code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Let&#39;s say we&#39;ve got a file in <code>xml</code> format but the file extension is different so Nu can&#39;t auto-format it:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> world.txt
<span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> <span class="token assign-left variable">encoding</span><span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span>?<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>world<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>continent<span class="token operator">&gt;</span>Africa<span class="token operator">&lt;</span>/continent<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>continent<span class="token operator">&gt;</span>Antarctica<span class="token operator">&lt;</span>/continent<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>continent<span class="token operator">&gt;</span>Asia<span class="token operator">&lt;</span>/continent<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>continent<span class="token operator">&gt;</span>Australia<span class="token operator">&lt;</span>/continent<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>continent<span class="token operator">&gt;</span>Europe<span class="token operator">&lt;</span>/continent<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>continent<span class="token operator">&gt;</span>North America<span class="token operator">&lt;</span>/continent<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>continent<span class="token operator">&gt;</span>South America<span class="token operator">&lt;</span>/continent<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/world<span class="token operator">&gt;</span>
</code></pre></div><p>We can use <code>from xml</code> to read the input like a <code>xml</code> file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> world.txt <span class="token operator">|</span> from xml
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 world
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table <span class="token number">7</span> rows<span class="token punctuation">]</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,7),p=[e];function r(l,c){return a(),s("div",null,p)}var k=n(o,[["render",r],["__file","from-xml.html.vue"]]);export{k as default};
