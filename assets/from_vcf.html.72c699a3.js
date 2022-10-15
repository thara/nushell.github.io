import{_ as o,o as r,c as n,a as e,t,d as s,e as c}from"./app.4966a45e.js";const d={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),l=s(),h=s(" for formats"),m={class:"command-title"},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from vcf </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD&#39;</span> <span class="token operator">|</span> from vcf
</code></pre></div>`,5);function p(a,u){return r(),n("div",null,[e("h1",i,[f,l,e("code",null,t(a.$frontmatter.title),1),h]),e("div",m,t(a.$frontmatter.formats),1),_])}const v=o(d,[["render",p],["__file","from_vcf.html.vue"]]);export{v as default};
