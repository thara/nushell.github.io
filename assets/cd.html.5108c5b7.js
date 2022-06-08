import{_ as s,o as e,c as a,e as n}from"./app.bf7b56eb.js";const t={},o=n(`<p>If you didn&#39;t already know, the <code>cd</code> command is very simple. It stands for &#39;change directory&#39; and it does exactly that. It changes the current directory to the one specified. If no directory is specified, it takes you to the home directory. Additionally, using <code>cd ..</code> takes you to the parent directory.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/username<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> Desktop
/home/username/Desktop<span class="token operator">&gt;</span> now your current directory has been changed
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/username/Desktop/nested/folders<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
/home/username/Desktop/nested<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
/home/username/Desktop<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/Documents/school_related
/home/username/Documents/school_related<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/<span class="token punctuation">..</span>
/home/<span class="token operator">&gt;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/username/Desktop/super/duper/crazy/nested/folders<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span>
/home/username<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/usr
/usr<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span>
/home/username<span class="token operator">&gt;</span>
</code></pre></div><p>Using <code>cd -</code> will take you to the previous directory:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>/home/username/Desktop/super/duper/crazy/nested/folders<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span>
/home/username<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> -
/home/username/Desktop/super/duper/crazy/nested/folders<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span>
</code></pre></div>`,7),c=[o];function p(r,l){return e(),a("div",null,c)}var i=s(t,[["render",p],["__file","cd.html.vue"]]);export{i as default};
