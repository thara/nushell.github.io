import{_ as n,o as a,c as s,e}from"./app.4b6143d5.js";const o={},p=e(`<p>Append a row to the table.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Given the following text file <code>cities.txt</code> containing cities:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Canberra
London
Nairobi
Washington
</code></pre></div><p>And getting back a Nu table:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> cities.txt <span class="token operator">|</span> lines
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Canberra
 <span class="token number">1</span> \u2502 London
 <span class="token number">2</span> \u2502 Nairobi
 <span class="token number">3</span> \u2502 Washington
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Add the city named <code>Beijing</code> like so:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> cities.txt <span class="token operator">|</span> lines <span class="token operator">|</span> append Beijing
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Canberra
 <span class="token number">1</span> \u2502 London
 <span class="token number">2</span> \u2502 Nairobi
 <span class="token number">3</span> \u2502 Washington
 <span class="token number">4</span> \u2502 Beijing
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>It&#39;s not possible to add multiple rows at once, so you&#39;ll need to use <code>append</code> multiple times:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> cities.txt <span class="token operator">|</span> lines <span class="token operator">|</span> append Beijing <span class="token operator">|</span> append <span class="token string">&quot;Buenos Aires&quot;</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Canberra
 <span class="token number">1</span> \u2502 London
 <span class="token number">2</span> \u2502 Nairobi
 <span class="token number">3</span> \u2502 Washington
 <span class="token number">4</span> \u2502 Beijing
 <span class="token number">5</span> \u2502 Buenos Aires
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>So far we have been working with a table without a column, which leaves us with plain rows. Let&#39;s <code>wrap</code> the plain rows into a column called <code>city</code> and save it as a json file called <code>cities.json</code>:</p><p>Before we save, let&#39;s check how it looks after wrapping:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">open</span> cities.txt <span class="token operator">|</span> lines <span class="token operator">|</span> wrap city
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 city</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Canberra
 <span class="token number">1</span> \u2502 London
 <span class="token number">2</span> \u2502 Nairobi
 <span class="token number">3</span> \u2502 Washington
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>And save:</p><p><code>&gt; open cities.txt | lines | wrap city | save cities.json</code></p><p>Since we will be working with rows that have a column, appending like before won&#39;t quite give us back what we want:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> cities.json <span class="token operator">|</span> append Guayaquil
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 city</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Canberra
 <span class="token number">1</span> \u2502 London
 <span class="token number">2</span> \u2502 Nairobi
 <span class="token number">3</span> \u2502 Washington
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">4</span> \u2502 Guayaquil
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We append a row literal directly:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> cities.json <span class="token operator">|</span> append <span class="token punctuation">[</span><span class="token punctuation">[</span>city<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Guayaquil<span class="token punctuation">]</span><span class="token punctuation">]</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 city</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Canberra
 <span class="token number">1</span> \u2502 London
 <span class="token number">2</span> \u2502 Nairobi
 <span class="token number">3</span> \u2502 Washington
 <span class="token number">4</span> \u2502 Guayaquil
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,19),t=[p];function c(i,l){return a(),s("div",null,t)}var u=n(o,[["render",c],["__file","append.html.vue"]]);export{u as default};
