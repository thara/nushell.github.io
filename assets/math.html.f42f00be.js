import{_ as p,r as o,o as t,c as l,a as s,b as c,w as r,d as n,e as a}from"./app.bf7b56eb.js";const u={},m=s("p",null,"Mathematical functions that generally only operate on a list of numbers (integers, decimals, bytes) and tables. Currently the following functions are implemented:",-1),i=s("li",null,[s("code",null,"math abs"),n(": Returns absolute values of a list of numbers")],-1),k=s("li",null,[s("code",null,"math avg"),n(": Finds the average of a list of numbers or tables")],-1),b=s("li",null,[s("code",null,"math ceil"),n(": Applies the ceil function to a list of numbers")],-1),d=s("code",null,"math eval",-1),h=n(": Evaluates a list of math expressions into numbers"),g=a("<li><code>math floor</code>: Applies the floor function to a list of numbers</li><li><code>math max</code>: Finds the maximum within a list of numbers or tables</li><li><code>math median</code>: Finds the median of a list of numbers or tables</li><li><code>math min</code>: Finds the minimum within a list of numbers or tables</li><li><code>math mode</code>: Finds the most frequent element(s) within a list of numbers or tables</li><li><code>math round</code>: Applies the round function to a list of numbers</li><li><code>math sqrt</code>: Applies the square root function to a list of numbers</li><li><code>math stddev</code>: Finds the standard deviation of a list of numbers or tables</li><li><code>math sum</code>: Finds the sum of a list of numbers or tables</li><li><code>math product</code>: Finds the product of a list of numbers or tables</li><li><code>math variance</code>: Finds the variance of a list of numbers or tables</li>",11),f=a(`<p>However, the mathematical functions like <code>min</code> and <code>max</code> are more permissive and also work on <code>Dates</code>.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>To get the average of the file sizes in a directory, simply pipe the size column from the ls command to the average command.</p><h3 id="list-of-numbers-integers-decimals-bytes" tabindex="-1"><a class="header-anchor" href="#list-of-numbers-integers-decimals-bytes" aria-hidden="true">#</a> List of Numbers (Integers, Decimals, Bytes)</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
 <span class="token comment">#  \u2502 name               \u2502 type \u2502 size     \u2502 modified</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502   <span class="token number">3.4</span> KB \u2502 <span class="token number">4</span> days ago
  <span class="token number">1</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">1.3</span> KB \u2502 <span class="token number">4</span> days ago
  <span class="token number">2</span> \u2502 Cargo.lock         \u2502 File \u2502 <span class="token number">106.3</span> KB \u2502 <span class="token number">6</span> mins ago
  <span class="token number">3</span> \u2502 Cargo.toml         \u2502 File \u2502   <span class="token number">4.6</span> KB \u2502 <span class="token number">3</span> days ago
  <span class="token number">4</span> \u2502 LICENSE            \u2502 File \u2502   <span class="token number">1.1</span> KB \u2502 <span class="token number">4</span> days ago
  <span class="token number">5</span> \u2502 Makefile.toml      \u2502 File \u2502    <span class="token number">449</span> B \u2502 <span class="token number">4</span> days ago
  <span class="token number">6</span> \u2502 README.md          \u2502 File \u2502  <span class="token number">16.0</span> KB \u2502 <span class="token number">6</span> mins ago
  <span class="token number">7</span> \u2502 TODO.md            \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">6</span> mins ago
  <span class="token number">8</span> \u2502 assets             \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">4</span> days ago
  <span class="token number">9</span> \u2502 build.rs           \u2502 File \u2502     <span class="token number">78</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">10</span> \u2502 crates             \u2502 Dir  \u2502    <span class="token number">672</span> B \u2502 <span class="token number">3</span> days ago
 <span class="token number">11</span> \u2502 debian             \u2502 Dir  \u2502    <span class="token number">352</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">12</span> \u2502 <span class="token function">docker</span>             \u2502 Dir  \u2502    <span class="token number">288</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">13</span> \u2502 docs               \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">14</span> \u2502 features.toml      \u2502 File \u2502    <span class="token number">632</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">15</span> \u2502 images             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">16</span> \u2502 justfile           \u2502 File \u2502    <span class="token number">234</span> B \u2502 <span class="token number">3</span> days ago
 <span class="token number">17</span> \u2502 rustfmt.toml       \u2502 File \u2502     <span class="token number">16</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">18</span> \u2502 src                \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">4</span> days ago
 <span class="token number">19</span> \u2502 target             \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">8</span> hours ago
 <span class="token number">20</span> \u2502 tests              \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">4</span> days ago
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get size <span class="token operator">|</span> math avg
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">7.2</span> KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get size <span class="token operator">|</span> math min
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">0</span> B
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get size <span class="token operator">|</span> math max
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">113.6</span> KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get size <span class="token operator">|</span> math median
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">320</span> B
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get size <span class="token operator">|</span> math <span class="token function">sum</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token number">143.6</span> KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">3</span> <span class="token number">9</span> <span class="token number">12</span> <span class="token number">12</span> <span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">|</span> math mode
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502  <span class="token number">3</span>
 <span class="token number">1</span> \u2502 <span class="token number">12</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> math product
<span class="token number">72</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">10</span> <span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">|</span> math stddev
<span class="token number">18.1372</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">10</span> <span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">|</span> math variance
<span class="token number">328.96</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math ceil
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502  <span class="token number">2</span>
 <span class="token number">1</span> \u2502  <span class="token number">3</span>
 <span class="token number">2</span> \u2502 -3
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math floor
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502  <span class="token number">1</span>
 <span class="token number">1</span> \u2502  <span class="token number">2</span>
 <span class="token number">2</span> \u2502 -4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1.5</span> <span class="token number">2.3</span> -3.1<span class="token punctuation">]</span> <span class="token operator">|</span> math round
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502  <span class="token number">2</span>
 <span class="token number">1</span> \u2502  <span class="token number">2</span>
 <span class="token number">2</span> \u2502 -3
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">16</span> <span class="token number">0.25</span><span class="token punctuation">]</span> <span class="token operator">|</span> math sqrt
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502  <span class="token number">2</span>
 <span class="token number">1</span> \u2502  <span class="token number">4</span>
 <span class="token number">2</span> \u2502  <span class="token number">0.5</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> -2 -3.0<span class="token punctuation">]</span> <span class="token operator">|</span> math abs
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502      <span class="token number">1</span>
 <span class="token number">1</span> \u2502      <span class="token number">2</span>
 <span class="token number">2</span> \u2502 <span class="token number">3.0000</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="dates" tabindex="-1"><a class="header-anchor" href="#dates" aria-hidden="true">#</a> Dates</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get modified <span class="token operator">|</span> math min
<span class="token number">2020</span>-06-09 <span class="token number">17</span>:25:51.798743222 UTC
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get modified <span class="token operator">|</span> math max
<span class="token number">2020</span>-06-14 05:49:59.637449186 UT
</code></pre></div><h3 id="operations-on-tables" tabindex="-1"><a class="header-anchor" href="#operations-on-tables" aria-hidden="true">#</a> Operations on tables</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token builtin class-name">pwd</span> <span class="token operator">|</span> <span class="token function">split</span> row / <span class="token operator">|</span> size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 lines \u2502 words \u2502 chars \u2502 bytes</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502     <span class="token number">0</span> \u2502     <span class="token number">1</span> \u2502     <span class="token number">5</span> \u2502          <span class="token number">5</span>
 <span class="token number">1</span> \u2502     <span class="token number">0</span> \u2502     <span class="token number">1</span> \u2502    <span class="token number">11</span> \u2502         <span class="token number">11</span>
 <span class="token number">2</span> \u2502     <span class="token number">0</span> \u2502     <span class="token number">1</span> \u2502    <span class="token number">11</span> \u2502         <span class="token number">11</span>
 <span class="token number">3</span> \u2502     <span class="token number">0</span> \u2502     <span class="token number">1</span> \u2502     <span class="token number">4</span> \u2502          <span class="token number">4</span>
 <span class="token number">4</span> \u2502     <span class="token number">0</span> \u2502     <span class="token number">2</span> \u2502    <span class="token number">12</span> \u2502         <span class="token number">12</span>
 <span class="token number">5</span> \u2502     <span class="token number">0</span> \u2502     <span class="token number">1</span> \u2502     <span class="token number">7</span> \u2502          <span class="token number">7</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">pwd</span> <span class="token operator">|</span> <span class="token function">split</span> row / <span class="token operator">|</span> size <span class="token operator">|</span> math max
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 lines      \u2502 <span class="token number">0</span>
 words      \u2502 <span class="token number">2</span>
 chars      \u2502 <span class="token number">12</span>
 bytes \u2502 <span class="token number">12</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">pwd</span> <span class="token operator">|</span> <span class="token function">split</span> row / <span class="token operator">|</span> size <span class="token operator">|</span> math avg
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 lines      \u2502 <span class="token number">0.0000</span>
 words      \u2502 <span class="token number">1.1666</span>
 chars      \u2502 <span class="token number">8.3333</span>
 bytes \u2502 <span class="token number">8.3333</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>To get the sum of the characters that make up your present working directory.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">pwd</span> <span class="token operator">|</span> <span class="token function">split</span> row / <span class="token operator">|</span> size <span class="token operator">|</span> get chars <span class="token operator">|</span> math <span class="token function">sum</span>
<span class="token number">50</span>
</code></pre></div><h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><p><code>math</code> functions are aggregation functions so empty lists are invalid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> math avg
error: Error: Unexpected: Cannot perform aggregate math operation on empty data
</code></pre></div>`,31);function v(x,y){const e=o("RouterLink");return t(),l("div",null,[m,s("ul",null,[i,k,b,s("li",null,[c(e,{to:"/old_book/commands/math-eval.html"},{default:r(()=>[d]),_:1}),h]),g]),f])}var B=p(u,[["render",v],["__file","math.html.vue"]]);export{B as default};
