import{_ as s,o as n,c as a,e}from"./app.31037174.js";const p={},t=e(`<p>math eval is a command that takes a math expression from the pipeline and evaluates that into a number. It also optionally takes the math expression as an argument.</p><p>This command supports the following operations -</p><p>operations:</p><ul><li>Binary operators: +, -, *, /, % (remainder), ^ (power)</li><li>Unary operators: +, -, ! (factorial)</li></ul><p>functions:</p><ul><li>sqrt, abs</li><li>exp, ln, log10</li><li>sin, cos, tan, asin, acos, atan, atan2</li><li>sinh, cosh, tanh, asinh, acosh, atanh</li><li>floor, ceil, round</li><li>signum</li><li>max(x, ...), min(x, ...): maximum and minimum of 1 or more numbers</li></ul><p>constants:</p><ul><li>pi</li><li>e</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;1+2+3&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">6</span>.0u
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;1-2+3&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">2.0</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;-(-23)&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">23.0</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;5^2&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">25.0</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;5^3&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">125.0</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;min(5,4,3,2,1,0,-100,45)&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
-100.0
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;max(5,4,3,2,1,0,-100,45)&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">45.0</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> sqrt<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">1.414213562373095</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> pi <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">3.141592653589793</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> e <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">2.718281828459045</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;sin(pi / 2)&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">1.0</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;floor(5999/1000)&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">5.0</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.json
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 size</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502  <span class="token number">816</span>
 <span class="token number">1</span> \u2502 <span class="token number">1627</span>
 <span class="token number">2</span> \u2502 <span class="token number">1436</span>
 <span class="token number">3</span> \u2502 <span class="token number">1573</span>
 <span class="token number">4</span> \u2502  <span class="token number">935</span>
 <span class="token number">5</span> \u2502   <span class="token number">52</span>
 <span class="token number">6</span> \u2502  <span class="token number">999</span>
 <span class="token number">7</span> \u2502 <span class="token number">1639</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.json <span class="token operator">|</span> <span class="token function">format</span> <span class="token string">&quot;({size} + 500) * 4&quot;</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token punctuation">(</span><span class="token number">816</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
 <span class="token number">1</span> \u2502 <span class="token punctuation">(</span><span class="token number">1627</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
 <span class="token number">2</span> \u2502 <span class="token punctuation">(</span><span class="token number">1436</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
 <span class="token number">3</span> \u2502 <span class="token punctuation">(</span><span class="token number">1573</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
 <span class="token number">4</span> \u2502 <span class="token punctuation">(</span><span class="token number">935</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
 <span class="token number">5</span> \u2502 <span class="token punctuation">(</span><span class="token number">52</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
 <span class="token number">6</span> \u2502 <span class="token punctuation">(</span><span class="token number">999</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
 <span class="token number">7</span> \u2502 <span class="token punctuation">(</span><span class="token number">1639</span> + <span class="token number">500</span><span class="token punctuation">)</span> * <span class="token number">4</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.json <span class="token operator">|</span> <span class="token function">format</span> <span class="token string">&quot;({size} + 500) * 4&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">5264.0000</span>
 <span class="token number">1</span> \u2502 <span class="token number">8508.0000</span>
 <span class="token number">2</span> \u2502 <span class="token number">7744.0000</span>
 <span class="token number">3</span> \u2502 <span class="token number">8292.0000</span>
 <span class="token number">4</span> \u2502 <span class="token number">5740.0000</span>
 <span class="token number">5</span> \u2502 <span class="token number">2208.0000</span>
 <span class="token number">6</span> \u2502 <span class="token number">5996.0000</span>
 <span class="token number">7</span> \u2502 <span class="token number">8556.0000</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.json <span class="token operator">|</span> <span class="token function">format</span> <span class="token string">&quot;({size} - 1000) * 4&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502  -736.0000
 <span class="token number">1</span> \u2502  <span class="token number">2508.0000</span>
 <span class="token number">2</span> \u2502  <span class="token number">1744.0000</span>
 <span class="token number">3</span> \u2502  <span class="token number">2292.0000</span>
 <span class="token number">4</span> \u2502  -260.0000
 <span class="token number">5</span> \u2502 -3792.0000
 <span class="token number">6</span> \u2502    -4.0000
 <span class="token number">7</span> \u2502  <span class="token number">2556.0000</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Note that since <code>math eval</code> uses floating-point numbers, the result may not always be precise.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;floor(5999999999999999999/1000000000000000000)&quot;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
<span class="token number">6.0</span>
</code></pre></div>`,27),o=[t];function l(c,r){return n(),a("div",null,o)}var i=s(p,[["render",l],["__file","math-eval.html.vue"]]);export{i as default};
