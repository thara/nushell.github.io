import{_ as t,r as o,o as p,c,a,b as l,e as n,d as s}from"./app.46eb55cb.js";const i={},u=n(`<p>Use <code>def</code> to create a custom command.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def my_command <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> hi nu <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> my_command
hi nu
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def my_command <span class="token punctuation">[</span>adjective: string, num: int<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$adjective</span> <span class="token variable">$num</span> meet nu <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> my_command <span class="token function">nice</span> <span class="token number">2</span>
<span class="token function">nice</span> <span class="token number">2</span> meet nu
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>def my_cookie_daemon <span class="token punctuation">[</span>
    in: path             <span class="token comment"># Specify where the cookie daemon shall look for cookies :p</span>
    <span class="token punctuation">..</span>.rest: path        <span class="token comment"># Other places to consider for cookie supplies</span>
    --output <span class="token punctuation">(</span>-o<span class="token punctuation">)</span>: path  <span class="token comment"># Where to store leftovers</span>
    --verbose
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$in</span> <span class="token variable">$rest</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> eat <span class="token variable">$it</span> <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
my_cookie_daemon /home/bob /home/alice --output /home/mallory
</code></pre></div>`,5),r=s("Further (and non trivial) examples can be found in our "),d={href:"https://github.com/nushell/nu_scripts",target:"_blank",rel:"noopener noreferrer"},m=s("nushell scripts repo"),h=n(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>The syntax of the def command is as follows. <code>def &lt;name&gt; &lt;signature&gt; &lt;block&gt;</code></p><p>The signature is a list of parameters flags and at maximum one rest argument. You can specify the type of each of them by appending <code>: &lt;type&gt;</code>. Example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def cmd <span class="token punctuation">[</span>
parameter: string
--flag: int
<span class="token punctuation">..</span>.rest: path
<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
</code></pre></div><p>It is possible to comment them by appending <code># Comment text</code>! Example</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def cmd <span class="token punctuation">[</span>
parameter <span class="token comment"># Parameter comment</span>
--flag: int <span class="token comment"># Flag comment</span>
<span class="token punctuation">..</span>.rest: path <span class="token comment"># Rest comment</span>
<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
</code></pre></div><p>Flags can have a single character shorthand form. For example <code>--output</code> is often abbreviated by <code>-o</code>. You can declare a shorthand by writing <code>(-&lt;shorthand&gt;)</code> after the flag name. Example</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def cmd <span class="token punctuation">[</span>
--flag<span class="token punctuation">(</span>-f<span class="token punctuation">)</span>: int <span class="token comment"># Flag comment</span>
<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
</code></pre></div><p>You can make a parameter optional by adding <code>?</code> to its name. Optional parameters do not need to be passed. (TODO Handling optional parameters in scripts is WIP. Please don&#39;t expect it to work seamlessly)</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def cmd <span class="token punctuation">[</span>
parameter?: path <span class="token comment"># Optional parameter</span>
<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
</code></pre></div>`,10);function k(g,f){const e=o("ExternalLinkIcon");return p(),c("div",null,[u,a("p",null,[r,a("a",d,[m,l(e)])]),h])}var _=t(i,[["render",k],["__file","def.html.vue"]]);export{_ as default};
