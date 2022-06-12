import{_ as a,o as n,c as s,e}from"./app.74dc26fa.js";const o={},t=e(`<p>Parse text as <code>.json</code> and create table. Use this when nushell cannot determine the input file extension.</p><p>Syntax: <code>from json {flags}</code></p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><pre><code>--objects
  treat each line as a separate value
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> command_from-json
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        title: <span class="token string">&quot;from json&quot;</span>,
        type: <span class="token string">&quot;command&quot;</span>,
        flags: <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> command_from-json <span class="token operator">|</span> from json
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 title     \u2502 <span class="token builtin class-name">type</span>    \u2502 flags
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 from json \u2502 <span class="token builtin class-name">command</span> \u2502 <span class="token boolean">true</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,7),c=[t];function p(l,r){return n(),s("div",null,c)}var d=a(o,[["render",p],["__file","from-json.html.vue"]]);export{d as default};
