import{_ as n,o as s,c as a,e}from"./app.526ee9ba.js";const p={},o=e(`<p>This command returns the nth row of a table, starting from 0. If the number given is less than 0 or more than the number of rows, nothing is returned.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>input-command<span class="token punctuation">]</span> <span class="token operator">|</span> nth <span class="token operator">&lt;</span>row number<span class="token operator">&gt;</span>  <span class="token punctuation">..</span>.args
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;row number&gt;</code> the number of the row to return</li><li><code>args</code>: Optionally return more rows</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name               \u2502 type \u2502 size     \u2502 modified</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span>  \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502   <span class="token number">3.4</span> KB \u2502 <span class="token number">53</span> mins ago
 <span class="token number">1</span>  \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">1.3</span> KB \u2502 <span class="token number">6</span> mins ago
 <span class="token number">2</span>  \u2502 Cargo.lock         \u2502 File \u2502 <span class="token number">113.3</span> KB \u2502 <span class="token number">53</span> mins ago
 <span class="token number">3</span>  \u2502 Cargo.toml         \u2502 File \u2502   <span class="token number">4.6</span> KB \u2502 <span class="token number">53</span> mins ago
 <span class="token number">4</span>  \u2502 LICENSE            \u2502 File \u2502   <span class="token number">1.1</span> KB \u2502 <span class="token number">3</span> months ago
 <span class="token number">5</span>  \u2502 Makefile.toml      \u2502 File \u2502    <span class="token number">449</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">6</span>  \u2502 README.md          \u2502 File \u2502  <span class="token number">15.8</span> KB \u2502 <span class="token number">2</span> mins ago
 <span class="token number">7</span>  \u2502 TODO.md            \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">53</span> mins ago
 <span class="token number">8</span>  \u2502 assets             \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">9</span>  \u2502 build.rs           \u2502 File \u2502     <span class="token number">78</span> B \u2502 <span class="token number">4</span> months ago
 <span class="token number">10</span> \u2502 crates             \u2502 Dir  \u2502    <span class="token number">704</span> B \u2502 <span class="token number">53</span> mins ago
 <span class="token number">11</span> \u2502 debian             \u2502 Dir  \u2502    <span class="token number">352</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">12</span> \u2502 <span class="token function">docker</span>             \u2502 Dir  \u2502    <span class="token number">288</span> B \u2502 <span class="token number">3</span> months ago
 <span class="token number">13</span> \u2502 docs               \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">53</span> mins ago
 <span class="token number">14</span> \u2502 features.toml      \u2502 File \u2502    <span class="token number">632</span> B \u2502 <span class="token number">4</span> months ago
 <span class="token number">15</span> \u2502 images             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">16</span> \u2502 rustfmt.toml       \u2502 File \u2502     <span class="token number">16</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">17</span> \u2502 src                \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">1</span> day ago
 <span class="token number">18</span> \u2502 target             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">5</span> days ago
 <span class="token number">19</span> \u2502 tests              \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">3</span> months ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> nth <span class="token number">0</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 CODE_OF_CONDUCT.md
 <span class="token builtin class-name">type</span>     \u2502 File
 size     \u2502 <span class="token number">3.4</span> KB
 modified \u2502 <span class="token number">54</span> mins ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> nth <span class="token number">0</span> <span class="token number">2</span>
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 name               \u2502 type \u2502 size     \u2502 modified</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502   <span class="token number">3.4</span> KB \u2502 <span class="token number">54</span> mins ago
 <span class="token number">1</span> \u2502 Cargo.lock         \u2502 File \u2502 <span class="token number">113.3</span> KB \u2502 <span class="token number">54</span> mins ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> nth <span class="token number">5</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 Makefile.toml
 <span class="token builtin class-name">type</span>     \u2502 File
 size     \u2502 <span class="token number">449</span> B
 modified \u2502 <span class="token number">5</span> months ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,10),t=[o];function r(l,c){return s(),a("div",null,t)}var u=n(p,[["render",r],["__file","nth.html.vue"]]);export{u as default};
