import{_ as a,r,o as n,c as d,a as e,b as s,e as i,d as t}from"./app.46eb55cb.js";const l={},h=i(`<p>Configuration management.</p><p>Syntax: <code>config {flags}</code></p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><pre><code>load &lt;file path shape&gt;
  load the config from the path give

set &lt;any shape&gt;
  set a value in the config, eg) set variable value

set_into &lt;member shape&gt;
  sets a variable from values in the pipeline

get &lt;any shape&gt;
  get a value from the config

remove &lt;any shape&gt;
  remove a value from the config

clear
  clear the config

path
  return the path to the config file
</code></pre><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><table><thead><tr><th>Variable</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>table of strings</td><td>PATH to use to find binaries</td></tr><tr><td>env</td><td>row</td><td>the environment variables to pass to external commands</td></tr><tr><td>ctrlc_exit</td><td>boolean</td><td>whether or not to exit Nu after multiple ctrl-c presses</td></tr><tr><td>table_mode</td><td>&quot;light&quot; or other</td><td>enable lightweight or normal tables</td></tr><tr><td>edit_mode</td><td>&quot;vi&quot; or &quot;emacs&quot;</td><td>changes line editing to &quot;vi&quot; or &quot;emacs&quot; mode</td></tr><tr><td>key_timeout</td><td>integer (milliseconds)</td><td>vi: the delay to wait for a longer key sequence after ESC</td></tr><tr><td>history_size</td><td>integer</td><td>maximum entries that will be stored in history (100,000 default)</td></tr><tr><td>completion_mode</td><td>&quot;circular&quot; or &quot;list&quot;</td><td>changes completion type to &quot;circular&quot; (default) or &quot;list&quot; mode</td></tr><tr><td>complete_from_path</td><td>boolean</td><td>whether or not to complete names of binaries on PATH (default true)</td></tr><tr><td>rm_always_trash</td><td>boolean</td><td>whether or not to always use system trash when no flags are given to <code>rm</code></td></tr><tr><td>pivot_mode</td><td>&quot;auto&quot; or &quot;always&quot; or &quot;never&quot;</td><td>&quot;auto&quot; will only pivot single row tables if the output is greater than the terminal width. &quot;always&quot; will always pivot single row tables. &quot;never&quot; will never pivot single row tables.</td></tr><tr><td>plugin_dirs</td><td>table of strings</td><td>additional directories to search for plugins during startup</td></tr></tbody></table><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> table_mode <span class="token string">&quot;light&quot;</span>
</code></pre></div>`,8),c=t("A more detailed description on how to use this command to configure Nu shell can be found in the configuration chapter of "),u={href:"https://www.nushell.sh/book/configuration.html",target:"_blank",rel:"noopener noreferrer"},p=t("Nu Book"),g=t(".");function m(f,_){const o=r("ExternalLinkIcon");return n(),d("div",null,[h,e("p",null,[c,e("a",u,[p,s(o)]),g])])}var q=a(l,[["render",m],["__file","config.html.vue"]]);export{q as default};
