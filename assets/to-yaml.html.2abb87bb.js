import{_ as s,o as n,c as a,e as t}from"./app.4b6143d5.js";const e={},o=t(`<p>Converts table data into yaml text.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502   \u2502 name       \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 X \u2502 filesystem \u2502 /home/shaurya
 <span class="token number">1</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Pictures
 <span class="token number">2</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Desktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> to yaml
---
- <span class="token string">&quot; &quot;</span><span class="token builtin class-name">:</span> X
  name: filesystem
  path: /home/shaurya
- <span class="token string">&quot; &quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot; &quot;</span>
  name: filesystem
  path: /home/shaurya/Pictures
- <span class="token string">&quot; &quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot; &quot;</span>
  name: filesystem
  path: /home/shaurya/Desktop
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> appveyor.yml
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 image              \u2502 environment    \u2502 <span class="token function">install</span>         \u2502 build \u2502 test_script     \u2502 cache
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 Visual Studio <span class="token number">2017</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">1</span> row<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">5</span> rows<span class="token punctuation">]</span> \u2502       \u2502 <span class="token punctuation">[</span>table: <span class="token number">2</span> rows<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">2</span> rows<span class="token punctuation">]</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> appveyor.yml <span class="token operator">|</span> to yaml
---
image: Visual Studio <span class="token number">2017</span>
environment:
  global:
    PROJECT_NAME: nushell
    RUST_BACKTRACE: <span class="token number">1</span>
  matrix:
    - TARGET: x86_64-pc-windows-msvc
      CHANNEL: nightly
      BITS: <span class="token number">64</span>
install:
  - <span class="token string">&quot;set PATH=C:<span class="token entity" title="\\\\">\\\\</span>msys64<span class="token entity" title="\\\\">\\\\</span>mingw%BITS%<span class="token entity" title="\\\\">\\\\</span>bin;C:<span class="token entity" title="\\\\">\\\\</span>msys64<span class="token entity" title="\\\\">\\\\</span>usr<span class="token entity" title="\\\\">\\\\</span>bin;%PATH%&quot;</span>
  - <span class="token string">&quot;curl -sSf -o rustup-init.exe https://win.rustup.rs&quot;</span>
  - rustup-init.exe -y --default-host %TARGET% --default-toolchain %CHANNEL%-%TARGET%
  - <span class="token string">&quot;set PATH=%PATH%;C:<span class="token entity" title="\\\\">\\\\</span>Users<span class="token entity" title="\\\\">\\\\</span>appveyor<span class="token entity" title="\\\\">\\\\</span>.cargo<span class="token entity" title="\\\\">\\\\</span>bin&quot;</span>
  - <span class="token string">&quot;call <span class="token entity" title="\\&quot;">\\&quot;</span>C:<span class="token entity" title="\\\\">\\\\</span>Program Files (x86)<span class="token entity" title="\\\\">\\\\</span>Microsoft Visual Studio<span class="token entity" title="\\\\">\\\\</span>2017<span class="token entity" title="\\\\">\\\\</span>Community<span class="token entity" title="\\\\">\\\\</span>VC<span class="token entity" title="\\\\">\\\\</span>Auxiliary<span class="token entity" title="\\\\">\\\\</span>Build<span class="token entity" title="\\\\">\\\\</span>vcvars64.bat<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
build: <span class="token boolean">false</span>
test_script:
  - cargo build --verbose
  - cargo <span class="token builtin class-name">test</span> --all --verbose
cache:
  - target -<span class="token operator">&gt;</span> Cargo.lock
  - <span class="token string">&quot;C:<span class="token entity" title="\\\\">\\\\</span>Users<span class="token entity" title="\\\\">\\\\</span>appveyor<span class="token entity" title="\\\\">\\\\</span>.cargo<span class="token entity" title="\\\\">\\\\</span>registry -&gt; Cargo.lock&quot;</span>
</code></pre></div>`,6),p=[o];function l(i,c){return n(),a("div",null,p)}var u=s(e,[["render",l],["__file","to-yaml.html.vue"]]);export{u as default};
