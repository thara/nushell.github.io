import{_ as s,o as n,c as a,e as t}from"./app.3a8901ae.js";const o={},p=t(`<p>Converts table data into toml text.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502   \u2502 name       \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 X \u2502 filesystem \u2502 /home/shaurya
 <span class="token number">1</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Pictures
 <span class="token number">2</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Desktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> to toml
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token string">&quot; &quot;</span> <span class="token operator">=</span> <span class="token string">&quot;X&quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;filesystem&quot;</span>
path <span class="token operator">=</span> <span class="token string">&quot;/home/shaurya&quot;</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token string">&quot; &quot;</span> <span class="token operator">=</span> <span class="token string">&quot; &quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;filesystem&quot;</span>
path <span class="token operator">=</span> <span class="token string">&quot;/home/shaurya/Pictures&quot;</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token string">&quot; &quot;</span> <span class="token operator">=</span> <span class="token string">&quot; &quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;filesystem&quot;</span>
path <span class="token operator">=</span> <span class="token string">&quot;/home/shaurya/Desktop&quot;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> cargo_sample.toml
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 dependencies   \u2502 dev-dependencies \u2502 package
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table: <span class="token number">1</span> row<span class="token punctuation">]</span> \u2502 <span class="token punctuation">[</span>table: <span class="token number">1</span> row<span class="token punctuation">]</span>   \u2502 <span class="token punctuation">[</span>table: <span class="token number">1</span> row<span class="token punctuation">]</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> cargo_sample.toml <span class="token operator">|</span> to toml
<span class="token punctuation">[</span>dependencies<span class="token punctuation">]</span>
ansi_term <span class="token operator">=</span> <span class="token string">&quot;0.11.0&quot;</span>
directories <span class="token operator">=</span> <span class="token string">&quot;2.0.2&quot;</span>
byte-unit <span class="token operator">=</span> <span class="token string">&quot;2.1.0&quot;</span>
bytes <span class="token operator">=</span> <span class="token string">&quot;0.4.12&quot;</span>
chrono-humanize <span class="token operator">=</span> <span class="token string">&quot;0.0.11&quot;</span>
chrono-tz <span class="token operator">=</span> <span class="token string">&quot;0.5.1&quot;</span>
clap <span class="token operator">=</span> <span class="token string">&quot;2.33.0&quot;</span>
conch-parser <span class="token operator">=</span> <span class="token string">&quot;0.1.1&quot;</span>
derive-new <span class="token operator">=</span> <span class="token string">&quot;0.5.6&quot;</span>
dunce <span class="token operator">=</span> <span class="token string">&quot;1.0.0&quot;</span>
futures-sink-preview <span class="token operator">=</span> <span class="token string">&quot;0.3.0-alpha.16&quot;</span>
futures_codec <span class="token operator">=</span> <span class="token string">&quot;0.2.2&quot;</span>
getset <span class="token operator">=</span> <span class="token string">&quot;0.0.7&quot;</span>
itertools <span class="token operator">=</span> <span class="token string">&quot;0.8.0&quot;</span>
lalrpop-util <span class="token operator">=</span> <span class="token string">&quot;0.17.0&quot;</span>
language-reporting <span class="token operator">=</span> <span class="token string">&quot;0.3.0&quot;</span>
log <span class="token operator">=</span> <span class="token string">&quot;0.4.6&quot;</span>
logos <span class="token operator">=</span> <span class="token string">&quot;0.10.0-rc2&quot;</span>
logos-derive <span class="token operator">=</span> <span class="token string">&quot;0.10.0-rc2&quot;</span>
nom <span class="token operator">=</span> <span class="token string">&quot;5.0.0-beta1&quot;</span>
ordered-float <span class="token operator">=</span> <span class="token string">&quot;1.0.2&quot;</span>
pretty_env_logger <span class="token operator">=</span> <span class="token string">&quot;0.3.0&quot;</span>
prettyprint <span class="token operator">=</span> <span class="token string">&quot;0.6.0&quot;</span>
prettytable-rs <span class="token operator">=</span> <span class="token string">&quot;0.8.0&quot;</span>
regex <span class="token operator">=</span> <span class="token string">&quot;1.1.6&quot;</span>
rustyline <span class="token operator">=</span> <span class="token string">&quot;4.1.0&quot;</span>
serde <span class="token operator">=</span> <span class="token string">&quot;1.0.91&quot;</span>
serde_derive <span class="token operator">=</span> <span class="token string">&quot;1.0.91&quot;</span>
serde_json <span class="token operator">=</span> <span class="token string">&quot;1.0.39&quot;</span>
sysinfo <span class="token operator">=</span> <span class="token string">&quot;0.8.4&quot;</span>
term <span class="token operator">=</span> <span class="token string">&quot;0.5.2&quot;</span>
tokio-fs <span class="token operator">=</span> <span class="token string">&quot;0.1.6&quot;</span>
toml <span class="token operator">=</span> <span class="token string">&quot;0.5.1&quot;</span>
toml-query <span class="token operator">=</span> <span class="token string">&quot;0.9.0&quot;</span>

<span class="token punctuation">[</span>dependencies.chrono<span class="token punctuation">]</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;serde&quot;</span><span class="token punctuation">]</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.4.6&quot;</span>

<span class="token punctuation">[</span>dependencies.cursive<span class="token punctuation">]</span>
default-features <span class="token operator">=</span> <span class="token boolean">false</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;pancurses-backend&quot;</span><span class="token punctuation">]</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.31.1&quot;</span>

<span class="token punctuation">[</span>dependencies.futures-preview<span class="token punctuation">]</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;compat&quot;</span>, <span class="token string">&quot;io-compat&quot;</span><span class="token punctuation">]</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.3.0-alpha.16&quot;</span>

<span class="token punctuation">[</span>dependencies.indexmap<span class="token punctuation">]</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;serde-1&quot;</span><span class="token punctuation">]</span>
version <span class="token operator">=</span> <span class="token string">&quot;1.0.2&quot;</span>

<span class="token punctuation">[</span>dependencies.pancurses<span class="token punctuation">]</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;win32a&quot;</span><span class="token punctuation">]</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.16&quot;</span>

<span class="token punctuation">[</span>dev-dependencies<span class="token punctuation">]</span>
pretty_assertions <span class="token operator">=</span> <span class="token string">&quot;0.6.1&quot;</span>

<span class="token punctuation">[</span>package<span class="token punctuation">]</span>
authors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;The Nu Project Contributors&quot;</span><span class="token punctuation">]</span>
description <span class="token operator">=</span> <span class="token string">&quot;A shell for the GitHub era&quot;</span>
edition <span class="token operator">=</span> <span class="token string">&quot;2018&quot;</span>
license <span class="token operator">=</span> <span class="token string">&quot;ISC&quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;nu&quot;</span>
version <span class="token operator">=</span> <span class="token string">&quot;0.1.1&quot;</span>
</code></pre></div>`,6),e=[p];function r(c,u){return n(),a("div",null,e)}var k=s(o,[["render",r],["__file","to-toml.html.vue"]]);export{k as default};
