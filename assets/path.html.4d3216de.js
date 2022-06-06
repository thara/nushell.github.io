import{_ as n,u as r,o as s,c as o,a as t,t as a,d as i,e as h}from"./app.4b6143d5.js";const d={computed:{frontmatter(){return r().value}}},c={id:"frontmatter-title",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=i(),u={style:{"white-space":"pre-wrap"}},m=h(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>There are three ways to represent a path:

* As a path literal, e.g., &#39;/home/viking/spam.txt&#39;
* As a structured path: a table with &#39;parent&#39;, &#39;stem&#39;, and &#39;extension&#39; (and
* &#39;prefix&#39; on Windows) columns. This format is produced by the &#39;path parse&#39;
  subcommand.
* As an inner list of path parts, e.g., &#39;[[ / home viking spam.txt ]]&#39;.
  Splitting into parts is done by the \`path split\` command.

All subcommands accept all three variants as an input. Furthermore, the &#39;path
join&#39; subcommand can be used to join the structured path or path parts back into
the path literal.
</code></pre></div>`,4);function _(f,g,x,b,v,e){return s(),o("div",null,[t("h1",c,[p,l,t("code",null,a(e.frontmatter.title),1)]),t("div",u,a(e.frontmatter.usage),1),m])}var w=n(d,[["render",_],["__file","path.html.vue"]]);export{w as default};
