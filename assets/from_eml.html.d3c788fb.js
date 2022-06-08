import{_ as s,u as r,o,c as n,a as e,t,d as c,e as d}from"./app.d1a8c647.js";const l={computed:{frontmatter(){return r().value}}},i={id:"frontmatter-title",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=c(),h={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from eml --preview-body</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--preview-body {int}</code>: How many bytes of the body to preview</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert eml structured data into table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml
</code></pre></div><p>Convert eml structured data into table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml -b <span class="token number">1</span>
</code></pre></div>`,9);function _(f,g,b,v,x,a){return o(),n("div",null,[e("h1",i,[m,p,e("code",null,t(a.frontmatter.title),1)]),e("div",h,t(a.frontmatter.usage),1),u])}var w=s(l,[["render",_],["__file","from_eml.html.vue"]]);export{w as default};
