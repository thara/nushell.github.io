import{_ as a,o as n,c as s,e}from"./app.22fee913.js";const o={},l=e(`<p>Finds a program file.</p><p>Usage:</p><blockquote><p>which <code>&lt;application&gt;</code> {flags}</p></blockquote><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>application: the name of the command to find the path to</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>--all: list all executables</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><code>which</code> finds the location of an executable:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">which</span> python
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 arg     \u2502 python
 path    \u2502 /usr/bin/python
 <span class="token builtin class-name">builtin</span> \u2502 <span class="token boolean">false</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">which</span> cargo
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 arg     \u2502 cargo
 path    \u2502 /home/bob/.cargo/bin/cargo
 <span class="token builtin class-name">builtin</span> \u2502 <span class="token boolean">false</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p><code>which</code> will identify nushell commands:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">which</span> <span class="token function">ls</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 arg     \u2502 <span class="token function">ls</span>
 path    \u2502 nushell built-in <span class="token builtin class-name">command</span>
 <span class="token builtin class-name">builtin</span> \u2502 <span class="token boolean">true</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">which</span> <span class="token function">which</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 arg     \u2502 <span class="token function">which</span>
 path    \u2502 nushell built-in <span class="token builtin class-name">command</span>
 <span class="token builtin class-name">builtin</span> \u2502 <span class="token boolean">true</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Passing the <code>all</code> flag identifies all instances of a command or binary</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">which</span> <span class="token function">ls</span> --all
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 arg \u2502 path                     \u2502 builtin</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 <span class="token function">ls</span>  \u2502 nushell built-in <span class="token builtin class-name">command</span> \u2502 <span class="token boolean">true</span>
 <span class="token number">1</span> \u2502 <span class="token function">ls</span>  \u2502 /bin/ls                  \u2502 <span class="token boolean">false</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p><code>which</code> will also identify local binaries</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">touch</span> foo
<span class="token operator">&gt;</span> <span class="token function">chmod</span> +x foo
<span class="token operator">&gt;</span> <span class="token function">which</span> ./foo
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 arg     \u2502 ./foo
 path    \u2502 /Users/josephlyons/Desktop/foo
 <span class="token builtin class-name">builtin</span> \u2502 <span class="token boolean">false</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p><code>which</code> also identifies aliases</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> e <span class="token operator">=</span> <span class="token builtin class-name">echo</span>
<span class="token operator">&gt;</span> <span class="token function">which</span> e
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 arg \u2502     path      \u2502 builtin</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 e   \u2502 Nushell <span class="token builtin class-name">alias</span> \u2502 <span class="token boolean">false</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>and custom commands</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def my_cool_echo <span class="token punctuation">[</span>arg<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$arg</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> <span class="token function">which</span> my_cool_echo
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502     arg      \u2502          path          \u2502 builtin</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 my_cool_echo \u2502 Nushell custom <span class="token builtin class-name">command</span> \u2502 <span class="token boolean">false</span>
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,22),t=[l];function c(p,i){return n(),s("div",null,t)}var r=a(o,[["render",c],["__file","which.html.vue"]]);export{r as default};
