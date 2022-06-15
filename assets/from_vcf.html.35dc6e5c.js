import{_ as r,u as s,o,c as n,a as e,t,d as c,e as d}from"./app.47c01eab.js";const i={computed:{frontmatter(){return s().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=c(),f={style:{"white-space":"pre-wrap"}},_=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from vcf </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD&#39;</span> <span class="token operator">|</span> from vcf
</code></pre></div>`,5);function m(u,g,v,x,b,a){return o(),n("div",null,[e("h1",l,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",f,t(a.frontmatter.usage),1),_])}var k=r(i,[["render",m],["__file","from_vcf.html.vue"]]);export{k as default};
