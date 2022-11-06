import{_ as o,o as r,c as n,a as e,t,d as s,e as c}from"./app.32b969d4.js";const l={},d={id:"frontmatter-title-for-formats",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),m=s(),p=s(" for formats"),h={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from eml --preview-body</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--preview-body {int}</code>: How many bytes of the body to preview</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert eml structured data into table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml
</code></pre></div><p>Convert eml structured data into table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml <span class="token parameter variable">-b</span> <span class="token number">1</span>
</code></pre></div>`,9);function u(a,_){return r(),n("div",null,[e("h1",d,[i,m,e("code",null,t(a.$frontmatter.title),1),p]),e("div",h,t(a.$frontmatter.formats),1),f])}const g=o(l,[["render",u],["__file","from_eml.html.vue"]]);export{g as default};
