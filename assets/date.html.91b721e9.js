import{_ as n,o as a,c as e,e as s}from"./app.e96f8690.js";const t={},o=s(`<p>Use <code>date</code> to get the current date and time. Defaults to local timezone but you can get it in UTC too.</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><pre><code>--utc
  Returns the current date and time in UTC

--local
  Returns the current date and time in your local timezone
</code></pre><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 year     \u2502 <span class="token number">2020</span>
 month    \u2502 <span class="token number">6</span>
 day      \u2502 <span class="token number">21</span>
 hour     \u2502 <span class="token number">18</span>
 minute   \u2502 <span class="token number">3</span>
 second   \u2502 <span class="token number">43</span>
 timezone \u2502 -04:00
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> --utc
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 year     \u2502 <span class="token number">2020</span>
 month    \u2502 <span class="token number">6</span>
 day      \u2502 <span class="token number">21</span>
 hour     \u2502 <span class="token number">22</span>
 minute   \u2502 <span class="token number">3</span>
 second   \u2502 <span class="token number">53</span>
 timezone \u2502 UTC
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> --local
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 year     \u2502 <span class="token number">2020</span>
 month    \u2502 <span class="token number">6</span>
 day      \u2502 <span class="token number">21</span>
 hour     \u2502 <span class="token number">18</span>
 minute   \u2502 <span class="token number">4</span>
 second   \u2502 <span class="token number">3</span>
 timezone \u2502 -04:00
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,7),c=[o];function r(p,l){return a(),e("div",null,c)}var u=n(t,[["render",r],["__file","date.html.vue"]]);export{u as default};
