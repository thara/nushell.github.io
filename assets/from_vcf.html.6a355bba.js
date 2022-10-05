import{_ as s,o,c as n,a as e,t,d as r,e as c}from"./app.fbc72659.js";const i={},d={id:"frontmatter-title-for-formats",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),h=r(),l=r(" for formats"),p={style:{"white-space":"pre-wrap","margin-top":"10px"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from vcf </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD&#39;</span> <span class="token operator">|</span> from vcf
</code></pre></div>`,5);function _(a,u){return o(),n("div",null,[e("h1",d,[f,h,e("code",null,t(a.$frontmatter.title),1),l]),e("div",p,t(a.$frontmatter.formats),1),m])}const v=s(i,[["render",_],["__file","from_vcf.html.vue"]]);export{v as default};
