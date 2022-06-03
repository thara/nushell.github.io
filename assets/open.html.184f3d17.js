import{_ as n,o as s,c as a,e}from"./app.aa868a80.js";const t={},p=e(`<p>Loads a file into a cell, convert it to table if possible (avoid by appending <code>--raw</code> flag)</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> user.yaml
- Name: Peter
  Age: <span class="token number">30</span>
  Telephone: <span class="token number">88204828</span>
  Country: Singapore
- Name: Michael
  Age: <span class="token number">42</span>
  Telephone: <span class="token number">44002010</span>
  Country: Spain
- Name: Will
  Age: <span class="token number">50</span>
  Telephone: <span class="token number">99521080</span>
  Country: Germany
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> user.yaml
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 Name    \u2502 Age \u2502 Telephone \u2502 Country</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Peter   \u2502  <span class="token number">30</span> \u2502  <span class="token number">88204828</span> \u2502 Singapore
 <span class="token number">1</span> \u2502 Michael \u2502  <span class="token number">42</span> \u2502  <span class="token number">44002010</span> \u2502 Spain
 <span class="token number">2</span> \u2502 Will    \u2502  <span class="token number">50</span> \u2502  <span class="token number">99521080</span> \u2502 Germany
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> user.yaml --raw
- Name: Peter
  Age: <span class="token number">30</span>
  Telephone: <span class="token number">88204828</span>
  Country: Singapore
- Name: Michael
  Age: <span class="token number">42</span>
  Telephone: <span class="token number">44002010</span>
  Country: Spain
- Name: Will
  Age: <span class="token number">50</span>
  Telephone: <span class="token number">99521080</span>
  Country: Germany
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> user.json
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Peter&quot;</span>,
        <span class="token string">&quot;Age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30</span>,
        <span class="token string">&quot;Telephone&quot;</span><span class="token builtin class-name">:</span> <span class="token number">88204828</span>,
        <span class="token string">&quot;Country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Singapore&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Michael&quot;</span>,
        <span class="token string">&quot;Age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">42</span>,
        <span class="token string">&quot;Telephone&quot;</span><span class="token builtin class-name">:</span> <span class="token number">44002010</span>,
        <span class="token string">&quot;Country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Spain&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Will&quot;</span>,
        <span class="token string">&quot;Age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">50</span>,
        <span class="token string">&quot;Telephone&quot;</span><span class="token builtin class-name">:</span> <span class="token number">99521080</span>,
        <span class="token string">&quot;Country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Germany&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> user.json
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 Name    \u2502 Age \u2502 Telephone \u2502 Country</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Peter   \u2502  <span class="token number">30</span> \u2502  <span class="token number">88204828</span> \u2502 Singapore
 <span class="token number">1</span> \u2502 Michael \u2502  <span class="token number">42</span> \u2502  <span class="token number">44002010</span> \u2502 Spain
 <span class="token number">2</span> \u2502 Will    \u2502  <span class="token number">50</span> \u2502  <span class="token number">99521080</span> \u2502 Germany
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> user.json --raw
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Peter&quot;</span>,
        <span class="token string">&quot;Age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30</span>,
        <span class="token string">&quot;Telephone&quot;</span><span class="token builtin class-name">:</span> <span class="token number">88204828</span>,
        <span class="token string">&quot;Country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Singapore&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Michael&quot;</span>,
        <span class="token string">&quot;Age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">42</span>,
        <span class="token string">&quot;Telephone&quot;</span><span class="token builtin class-name">:</span> <span class="token number">44002010</span>,
        <span class="token string">&quot;Country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Spain&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Will&quot;</span>,
        <span class="token string">&quot;Age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">50</span>,
        <span class="token string">&quot;Telephone&quot;</span><span class="token builtin class-name">:</span> <span class="token number">99521080</span>,
        <span class="token string">&quot;Country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Germany&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div>`,8),o=[p];function l(c,u){return s(),a("div",null,o)}var i=n(t,[["render",l],["__file","open.html.vue"]]);export{i as default};
