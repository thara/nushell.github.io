import{_ as t,o as r,c as o,a as e,t as s,d as n,e as c}from"./app.05a5ae3c.js";const d={},l={id:"frontmatter-title-for-database",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),i=n(),h=n(" for database"),b={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; order-by ...select --ascending --nulls-first</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...select</code>: Select expression(s) on the table</li><li><code>--ascending</code>: Order by ascending values</li><li><code>--nulls-first</code>: Show nulls first in order</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>orders query by a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> order-by a
    <span class="token operator">|</span> describe
</code></pre></div><p>orders query by column a ascending and by column b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> order-by a <span class="token parameter variable">--ascending</span>
    <span class="token operator">|</span> order-by b
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function f(a,m){return r(),o("div",null,[e("h1",l,[p,i,e("code",null,s(a.$frontmatter.title),1),h]),e("div",b,s(a.$frontmatter.database),1),u])}const g=t(d,[["render",f],["__file","order-by.html.vue"]]);export{g as default};
