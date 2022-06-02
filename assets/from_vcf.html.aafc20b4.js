import{_ as t,o as r,c as s,a as e,t as o,d as n,e as c}from"./app.9011b7da.js";const i={},d=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),n(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from vcf </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD&#39;</span> <span class="token operator">|</span> from vcf
</code></pre></div>`,5);function p(a,f){return r(),s("div",null,[d,e("div",l,o(a.$frontmatter.usage),1),h])}var _=t(i,[["render",p],["__file","from_vcf.html.vue"]]);export{_ as default};
