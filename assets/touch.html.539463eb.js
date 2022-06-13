import{_ as n,o as s,c as a,e}from"./app.e4b14566.js";const t={},o=e(`<p>Create one or more files in the current or an already existent directory. It has no effect on existing files. Unlike GNU touch, the access time and the modified time are not updated.</p><p><code>-h</code>, <code>--help</code> Display help message.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a file in an empty folder. Then touch the file and list files again to observe that the modified time has not been updated.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
<span class="token operator">&gt;</span> <span class="token function">touch</span> file.ext<span class="token punctuation">;</span> <span class="token function">ls</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 file.ext
 <span class="token builtin class-name">type</span>     \u2502 File
 size     \u2502 <span class="token number">0</span> B
 modified \u2502 <span class="token number">0</span> secs ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
<span class="token operator">&gt;</span> <span class="token function">touch</span> file.ext<span class="token punctuation">;</span> <span class="token function">ls</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 file.ext
 <span class="token builtin class-name">type</span>     \u2502 File
 size     \u2502 <span class="token number">0</span> B
 modified \u2502 <span class="token number">10</span> secs ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Create a file within an already existent folder.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> <span class="token function">dir</span>
<span class="token operator">&gt;</span> <span class="token function">touch</span> dir/file.ext<span class="token punctuation">;</span> <span class="token function">ls</span> <span class="token function">dir</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 dir/file.ext
 <span class="token builtin class-name">type</span>     \u2502 File
 size     \u2502 <span class="token number">0</span> B
 modified \u2502 <span class="token number">0</span> secs ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Create three files at once</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> a b c
<span class="token operator">&gt;</span> <span class="token function">ls</span>
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502        name        \u2502 type \u2502   size   \u2502   modified</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 a                  \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">0</span> sec ago
  <span class="token number">1</span> \u2502 b                  \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">0</span> sec ago
  <span class="token number">2</span> \u2502 c                  \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">0</span> sec ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,9),p=[o];function c(l,i){return s(),a("div",null,p)}var u=n(t,[["render",c],["__file","touch.html.vue"]]);export{u as default};
