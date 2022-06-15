import{_ as n,o as s,c as a,e}from"./app.f475f5ab.js";const t={},o=e(`<p>This command creates a new shell and begin at this path.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/foobar<span class="token operator">&gt;</span> <span class="token function">cat</span> user.json
<span class="token punctuation">{</span>
    <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Peter&quot;</span>,
    <span class="token string">&quot;Age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30</span>,
    <span class="token string">&quot;Telephone&quot;</span><span class="token builtin class-name">:</span> <span class="token number">88204828</span>,
    <span class="token string">&quot;Country&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Singapore&quot;</span>
<span class="token punctuation">}</span>
/home/foobar<span class="token operator">&gt;</span> enter user.json
/<span class="token operator">&gt;</span> <span class="token function">ls</span>
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 Name  \u2502 Age \u2502 Telephone \u2502 Country
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 Peter \u2502  <span class="token number">30</span> \u2502  <span class="token number">88204828</span> \u2502 Singapore
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
/<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
/home/foobar<span class="token operator">&gt;</span>
</code></pre></div><p>It also provides the ability to work with multiple directories at the same time. This command will allow you to create a new &quot;shell&quot; and enter it at the specified path. You can toggle between this new shell and the original shell with the <code>p</code> (for previous) and <code>n</code> (for next), allowing you to navigate around a ring buffer of shells. Once you&#39;re done with a shell, you can <code>exit</code> it and remove it from the ring buffer.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/<span class="token operator">&gt;</span> enter /tmp
/tmp<span class="token operator">&gt;</span> enter /usr
/usr<span class="token operator">&gt;</span> enter /bin
/bin<span class="token operator">&gt;</span> enter /opt
/opt<span class="token operator">&gt;</span> p
/bin<span class="token operator">&gt;</span> p
/usr<span class="token operator">&gt;</span> p
/tmp<span class="token operator">&gt;</span> p
/<span class="token operator">&gt;</span> n
/tmp<span class="token operator">&gt;</span>
</code></pre></div><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2><p>If you <code>enter</code> a JSON file with multiple a top-level list, this will open one new shell for each list element.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/private/tmp<span class="token operator">&gt;</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;1<span class="token entity" title="\\\\">\\\\</span>n2<span class="token entity" title="\\\\">\\\\</span>n3<span class="token entity" title="\\\\">\\\\</span>n&quot;</span> <span class="token operator">|</span> lines <span class="token operator">|</span> save foo.json
/private/tmp<span class="token operator">&gt;</span> enter foo.json
/<span class="token operator">&gt;</span> shells
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 active \u2502 name                    \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502        \u2502 filesystem              \u2502 /private/tmp
 <span class="token number">1</span> \u2502        \u2502 <span class="token punctuation">{</span>/private/tmp/foo.json<span class="token punctuation">}</span> \u2502 /
 <span class="token number">2</span> \u2502        \u2502 <span class="token punctuation">{</span>/private/tmp/foo.json<span class="token punctuation">}</span> \u2502 /
 <span class="token number">3</span> \u2502 X      \u2502 <span class="token punctuation">{</span>/private/tmp/foo.json<span class="token punctuation">}</span> \u2502 /
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
/<span class="token operator">&gt;</span>
</code></pre></div>`,8),p=[o];function l(r,c){return s(),a("div",null,p)}var u=n(t,[["render",l],["__file","enter.html.vue"]]);export{u as default};
