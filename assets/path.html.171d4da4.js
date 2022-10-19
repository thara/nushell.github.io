import{_ as s,o as r,c as o,a as t,t as a,d as n,e as i}from"./app.058e3381.js";const d={},h={id:"frontmatter-title-for-default",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),l=n(),p=n(" for default"),u={class:"command-title"},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>There are three ways to represent a path:

* As a path literal, e.g., &#39;/home/viking/spam.txt&#39;
* As a structured path: a table with &#39;parent&#39;, &#39;stem&#39;, and &#39;extension&#39; (and
* &#39;prefix&#39; on Windows) columns. This format is produced by the &#39;path parse&#39;
  subcommand.
* As a list of path parts, e.g., &#39;[ / home viking spam.txt ]&#39;. Splitting into
  parts is done by the \`path split\` command.

All subcommands accept all three variants as an input. Furthermore, the &#39;path
join&#39; subcommand can be used to join the structured path or path parts back into
the path literal.
</code></pre></div>`,4);function f(e,_){return r(),o("div",null,[t("h1",h,[c,l,t("code",null,a(e.$frontmatter.title),1),p]),t("div",u,a(e.$frontmatter.default),1),m])}const x=s(d,[["render",f],["__file","path.html.vue"]]);export{x as default};
