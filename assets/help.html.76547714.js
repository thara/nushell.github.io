import{_ as n,o as s,c as a,e}from"./app.88eb8db7.js";const t={},o=e(`<p>Use <code>help</code> for more information on a command. Use <code>help commands</code> to list all available commands. Use <code>help &lt;command name&gt;</code> to display help about a particular command.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span>
Welcome to Nushell.

Here are some tips to <span class="token builtin class-name">help</span> you get started.
  * <span class="token builtin class-name">help</span> commands - list all available commands
  * <span class="token builtin class-name">help</span> <span class="token operator">&lt;</span>command name<span class="token operator">&gt;</span> - display <span class="token builtin class-name">help</span> about a particular <span class="token builtin class-name">command</span>

Nushell works on the idea of a <span class="token string">&quot;pipeline&quot;</span><span class="token builtin class-name">.</span> Pipelines are commands connected with the <span class="token string">&#39;|&#39;</span> character.
Each stage <span class="token keyword">in</span> the pipeline works together to load, parse, and display information to you.

<span class="token punctuation">[</span>Examples<span class="token punctuation">]</span>

List the files <span class="token keyword">in</span> the current directory, sorted by size:
    <span class="token function">ls</span> <span class="token operator">|</span> sort-by size

Get information about the current system:
    sys <span class="token operator">|</span> get <span class="token function">host</span>

Get the processes on your system actively using CPU:
    <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">0</span>

You can also learn <span class="token function">more</span> at https://www.nushell.sh/book/
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> commands
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name         \u2502 description</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span>  \u2502 <span class="token builtin class-name">alias</span>        \u2502 Define a shortcut <span class="token keyword">for</span> another command.
 <span class="token number">1</span>  \u2502 append       \u2502 Append the given row to the table
 <span class="token number">2</span>  \u2502 autoview     \u2502 View the contents of the pipeline as a table or list.
 <span class="token number">3</span>  \u2502 build-string \u2502 Builds a string from the arguments
 <span class="token number">4</span>  \u2502 <span class="token function">cal</span>          \u2502 Display a calendar.
 <span class="token number">5</span>  \u2502 calc         \u2502 Parse a math expression into a number
<span class="token punctuation">..</span>.
 <span class="token number">83</span> \u2502 where        \u2502 Filter table to match the condition.
 <span class="token number">84</span> \u2502 <span class="token function">which</span>        \u2502 Finds a program file.
 <span class="token number">85</span> \u2502 with-env     \u2502 Runs a block with an environment set. Eg<span class="token punctuation">)</span> with-env <span class="token punctuation">[</span>NAME <span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env.NAME <span class="token punctuation">}</span>
 <span class="token number">86</span> \u2502 wrap         \u2502 Wraps the given data <span class="token keyword">in</span> a table.
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> <span class="token builtin class-name">cd</span>
Change to a new path.

Usage:
  <span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">(</span>directory<span class="token punctuation">)</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>

Parameters:
  <span class="token punctuation">(</span>directory<span class="token punctuation">)</span> the directory to change to

Flags:
  -h, --help: Display this <span class="token builtin class-name">help</span> message

Examples:
  Change to a new directory called <span class="token string">&#39;dirname&#39;</span>
  <span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token function">dirname</span>

  Change to your home directory
  <span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span>

  Change to your home directory <span class="token punctuation">(</span>alternate version<span class="token punctuation">)</span>
  <span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> ~

  Change to the previous directory
  <span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> -
</code></pre></div>`,5),p=[o];function l(c,i){return s(),a("div",null,p)}var u=n(t,[["render",l],["__file","help.html.vue"]]);export{u as default};
