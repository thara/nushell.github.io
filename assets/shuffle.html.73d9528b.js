import{_ as s,o as n,c as a,e}from"./app.e4b14566.js";const p={},t=e(`<p>Shuffles the rows in a random order.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Passing the same input to shuffle multiple times gives different results -</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span> a b c d <span class="token punctuation">]</span> <span class="token operator">|</span> shuffle
\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 a
 <span class="token number">1</span> \u2502 c
 <span class="token number">2</span> \u2502 d
 <span class="token number">3</span> \u2502 b
\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span> a b c d <span class="token punctuation">]</span> <span class="token operator">|</span> shuffle
\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 c
 <span class="token number">1</span> \u2502 b
 <span class="token number">2</span> \u2502 d
 <span class="token number">3</span> \u2502 a
\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span> a b c d <span class="token punctuation">]</span> <span class="token operator">|</span> shuffle
\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 c
 <span class="token number">1</span> \u2502 b
 <span class="token number">2</span> \u2502 a
 <span class="token number">3</span> \u2502 d
\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div>`,6),c=[t];function o(l,r){return n(),a("div",null,c)}var i=s(p,[["render",o],["__file","shuffle.html.vue"]]);export{i as default};
