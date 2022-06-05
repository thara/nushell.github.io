import{_ as s,o as n,c as a,e}from"./app.3a8901ae.js";const t={},o=e(`<p>Converts csv data into table. Use this when nushell cannot determine the input file extension.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Let&#39;s say we have the following file:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> pets.txt
animal, name, age
cat, Tom, <span class="token number">7</span>
dog, Alfred, <span class="token number">10</span>
chameleon, Linda, <span class="token number">1</span>
</code></pre></div><p><code>pets.txt</code> is actually a .csv file but it has the .txt extension, <code>open</code> is not able to convert it into a table:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.txt
animal, name, age
cat, Tom, <span class="token number">7</span>
dog, Alfred, <span class="token number">10</span>
chameleon, Linda, <span class="token number">1</span>
</code></pre></div><p>To get a table from <code>pets.txt</code> we need to use the <code>from csv</code> command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.txt <span class="token operator">|</span> from csv
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 animal    \u2502  name   \u2502  age</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token function">cat</span>       \u2502  Tom    \u2502  <span class="token number">7</span>
 <span class="token number">1</span> \u2502 dog       \u2502  Alfred \u2502  <span class="token number">10</span>
 <span class="token number">2</span> \u2502 chameleon \u2502  Linda  \u2502  <span class="token number">1</span>
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>To ignore the csv headers use <code>--headerless</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 Column1   \u2502 Column2 \u2502 Column3</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 dog       \u2502  Alfred \u2502  <span class="token number">10</span>
 <span class="token number">1</span> \u2502 chameleon \u2502  Linda  \u2502  <span class="token number">1</span>
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>To split on a character other than &#39;,&#39; use <code>--separator</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.txt
animal<span class="token punctuation">;</span> name<span class="token punctuation">;</span> age
<span class="token function">cat</span><span class="token punctuation">;</span> Tom<span class="token punctuation">;</span> <span class="token number">7</span>
dog<span class="token punctuation">;</span> Alfred<span class="token punctuation">;</span> <span class="token number">10</span>
chameleon<span class="token punctuation">;</span> Linda<span class="token punctuation">;</span> <span class="token number">1</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.txt <span class="token operator">|</span> from csv --separator <span class="token string">&#39;;&#39;</span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 animal    \u2502  name   \u2502  age</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token function">cat</span>       \u2502  Tom    \u2502  <span class="token number">7</span>
 <span class="token number">1</span> \u2502 dog       \u2502  Alfred \u2502  <span class="token number">10</span>
 <span class="token number">2</span> \u2502 chameleon \u2502  Linda  \u2502  <span class="token number">1</span>
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>To use this command to open a csv with separators other than a comma, use the <code>--raw</code> switch of <code>open</code> to open the csv, otherwise the csv will enter <code>from csv</code> as a table split on commas rather than raw text.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> pets.txt pets.csv
<span class="token operator">&gt;</span> <span class="token function">open</span> pets.csv <span class="token operator">|</span> from csv --separator <span class="token string">&#39;;&#39;</span>
error: Expected a string from pipeline
- shell:1:16
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> pets.csv <span class="token operator">|</span> from csv --separator <span class="token string">&#39;;&#39;</span>
  <span class="token operator">|</span>                 ^^^^^^^^ requires string input
- shell:1:0
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> pets.csv <span class="token operator">|</span> from csv --separator <span class="token string">&#39;;&#39;</span>
  <span class="token operator">|</span>  value originates from here

<span class="token operator">&gt;</span> <span class="token function">open</span> pets.csv --raw <span class="token operator">|</span> from csv --separator <span class="token string">&#39;;&#39;</span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 animal    \u2502  name   \u2502  age</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token function">cat</span>       \u2502  Tom    \u2502  <span class="token number">7</span>
 <span class="token number">1</span> \u2502 dog       \u2502  Alfred \u2502  <span class="token number">10</span>
 <span class="token number">2</span> \u2502 chameleon \u2502  Linda  \u2502  <span class="token number">1</span>
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>The string &#39;\\t&#39; can be used to separate on tabs. Note that this is the same as using the from tsv command.</p><p>Newlines &#39;\\n&#39; are not acceptable separators.</p><p>Note that separators are currently provided as strings and need to be wrapped in quotes.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.csv --raw <span class="token operator">|</span> from csv --separator <span class="token punctuation">;</span>
- shell:1:43
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> pets.csv --raw <span class="token operator">|</span> from csv --separator <span class="token punctuation">;</span>
  <span class="token operator">|</span>                                            ^
</code></pre></div><p>It is also considered an error to use a separator greater than one char:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> pets.txt <span class="token operator">|</span> from csv --separator <span class="token string">&#39;123&#39;</span>
error: Expected a single separator char from --separator
- shell:1:37
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> pets.txt <span class="token operator">|</span> from csv --separator <span class="token string">&#39;123&#39;</span>
  <span class="token operator">|</span>                                      ^^^^^ requires a single character string input
</code></pre></div>`,21),p=[o];function c(r,l){return n(),a("div",null,p)}var u=s(t,[["render",c],["__file","from-csv.html.vue"]]);export{u as default};
