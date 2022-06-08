import{_ as n,o as s,c as a,e}from"./app.bf7b56eb.js";const t={},p=e(`<p>This command gives information about the system nu is running on.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token function">host</span>    \u2502 <span class="token punctuation">[</span>row <span class="token number">7</span> columns<span class="token punctuation">]</span>
 cpu     \u2502 <span class="token punctuation">[</span>row cores current ghz max ghz min ghz<span class="token punctuation">]</span>
 disks   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>
 mem     \u2502 <span class="token punctuation">[</span>row <span class="token function">free</span> swap <span class="token function">free</span> swap total total<span class="token punctuation">]</span>
 net     \u2502 <span class="token punctuation">[</span>table <span class="token number">19</span> rows<span class="token punctuation">]</span>
 battery \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 Darwin
 release  \u2502 <span class="token number">19.5</span>.0
 version  \u2502 Darwin Kernel Version <span class="token number">19.5</span>.0: Tue May <span class="token number">26</span> <span class="token number">20</span>:41:44 PDT <span class="token number">2020</span><span class="token punctuation">;</span> root:xnu-6153.121.2~2/RELEASE_X86_64
 <span class="token function">hostname</span> \u2502 Josephs-MacBook-Pro.local
 arch     \u2502 x86_64
 <span class="token function">uptime</span>   \u2502 <span class="token number">5</span>:10:12:33
 sessions \u2502 <span class="token punctuation">[</span>table <span class="token number">2</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get cpu
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 cores       \u2502 <span class="token number">16</span>
 current ghz \u2502 <span class="token number">2.4000</span>
 min ghz     \u2502 <span class="token number">2.4000</span>
 max ghz     \u2502 <span class="token number">2.4000</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get mem
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 total      \u2502 <span class="token number">68.7</span> GB
 <span class="token function">free</span>       \u2502 <span class="token number">11.1</span> GB
 swap total \u2502 <span class="token number">0</span> B
 swap <span class="token function">free</span>  \u2502 <span class="token number">0</span> B
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,6),o=[p];function c(l,r){return s(),a("div",null,o)}var i=n(t,[["render",c],["__file","sys.html.vue"]]);export{i as default};
