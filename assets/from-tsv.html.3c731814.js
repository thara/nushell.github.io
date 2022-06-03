import{_ as e,o as s,c as n,e as a}from"./app.31037174.js";const t={},o=a(`<p>Parse text as <code>.tsv</code> and create table.</p><p>Syntax: <code>from tsv {flags}</code></p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><pre><code>--headerless
  don&#39;t treat the first row as column names
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Let&#39;s say we have the following file which is formatted like a <code>tsv</code> file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> elements.txt
Symbol        Element
H        Hydrogen
He        Helium
Li        Lithium
Be        Beryllium
</code></pre></div><p>If we pass the output of the <code>open</code> command to <code>from tsv</code> we get a correct formatted table:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> elements.txt <span class="token operator">|</span> from tsv
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 Symbol \u2502 Element</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 H      \u2502 Hydrogen
 <span class="token number">1</span> \u2502 He     \u2502 Helium
 <span class="token number">2</span> \u2502 Li     \u2502 Lithium
 <span class="token number">3</span> \u2502 Be     \u2502 Beryllium
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Using the <code>--headerless</code> flag has the following output:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> elements.txt <span class="token operator">|</span> from tsv --headerless
\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment">#  \u2502 Column1 \u2502 Column2</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 Symbol  \u2502 Element
  <span class="token number">1</span> \u2502 H       \u2502 Hydrogen
  <span class="token number">2</span> \u2502 He      \u2502 Helium
  <span class="token number">3</span> \u2502 Li      \u2502 Lithium
  <span class="token number">4</span> \u2502 Be      \u2502 Beryllium
\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,11),l=[o];function c(p,r){return s(),n("div",null,l)}var m=e(t,[["render",c],["__file","from-tsv.html.vue"]]);export{m as default};
