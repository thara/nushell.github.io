import{_ as a,o as n,c as r,a as e,t as s,d as i,e as o}from"./app.9011b7da.js";const h={},d=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),i(),e("code",null,"{{ $frontmatter.title }}")],-1),c={style:{"white-space":"pre-wrap"}},p=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>There are three ways to represent a path:

* As a path literal, e.g., &#39;/home/viking/spam.txt&#39;
* As a structured path: a table with &#39;parent&#39;, &#39;stem&#39;, and &#39;extension&#39; (and
* &#39;prefix&#39; on Windows) columns. This format is produced by the &#39;path parse&#39;
  subcommand.
* As an inner list of path parts, e.g., &#39;[[ / home viking spam.txt ]]&#39;.
  Splitting into parts is done by the \`path split\` command.

All subcommands accept all three variants as an input. Furthermore, the &#39;path
join&#39; subcommand can be used to join the structured path or path parts back into
the path literal.
</code></pre></div>`,4);function l(t,u){return n(),r("div",null,[d,e("div",c,s(t.$frontmatter.usage),1),p])}var f=a(h,[["render",l],["__file","path.html.vue"]]);export{f as default};
