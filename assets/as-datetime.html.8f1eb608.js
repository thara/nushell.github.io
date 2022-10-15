import{_ as n,o as s,c as r,a as t,t as e,d as o,e as d}from"./app.e5e083c1.js";const i={},c={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l=o(),m=o(" for dataframe"),h={class:"command-title"},p=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; as-datetime (format) --not-exact</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format</code>: formatting date time string</li><li><code>--not-exact</code>: the format string may be contained in the date (e.g. foo-2021-01-01-bar could match 2021-01-01)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Format example:
        &quot;%y/%m/%d %H:%M:%S&quot;  =&gt; 21/12/31 12:54:98
        &quot;%y-%m-%d %H:%M:%S&quot;  =&gt; 2021-12-31 24:58:01
        &quot;%y/%m/%d %H:%M:%S&quot;  =&gt; 21/12/31 24:58:01
        &quot;%y%m%d %H:%M:%S&quot;    =&gt; 210319 23:58:50
        &quot;%Y/%m/%d %H:%M:%S&quot;  =&gt; 2021/12/31 12:54:98
        &quot;%Y-%m-%d %H:%M:%S&quot;  =&gt; 2021-12-31 24:58:01
        &quot;%Y/%m/%d %H:%M:%S&quot;  =&gt; 2021/12/31 24:58:01
        &quot;%Y%m%d %H:%M:%S&quot;    =&gt; 20210319 23:58:50
        &quot;%FT%H:%M:%S&quot;        =&gt; 2019-04-18T02:45:55
        &quot;%FT%H:%M:%S.%6f&quot;    =&gt; microseconds
        &quot;%FT%H:%M:%S.%9f&quot;    =&gt; nanoseconds
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts string to datetime</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;2021-12-30 00:00:00&quot;</span> <span class="token string">&quot;2021-12-31 00:00:00&quot;</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> as-datetime <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div>`,9);function g(a,f){return s(),r("div",null,[t("h1",c,[u,l,t("code",null,e(a.$frontmatter.title),1),m]),t("div",h,e(a.$frontmatter.dataframe),1),p])}const _=n(i,[["render",g],["__file","as-datetime.html.vue"]]);export{_ as default};
