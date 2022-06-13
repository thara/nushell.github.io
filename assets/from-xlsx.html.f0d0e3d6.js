import{_ as n,o as s,c as a,e}from"./app.e4b14566.js";const p={},t=e(`<p>Parses MS Excel binary data into a table. <code>open</code> calls <code>from xlsx</code> automatically when the file extension is <code>xlsx</code>. Use this command when <code>open</code> is unable to guess the file type from the extension.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.xlsx
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 Sheet1
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table <span class="token number">26</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
<span class="token operator">&gt;</span> <span class="token function">open</span> abc.xlsx --raw
Length: <span class="token number">6344</span> <span class="token punctuation">(</span>0x18c8<span class="token punctuation">)</span> bytes
0000:   <span class="token number">50</span> 4b 03 04  <span class="token number">14</span> 00 00 00  08 00 00 00  00 00 d5 5f   PK<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>._
0010:   a7 <span class="token number">48</span> <span class="token number">68</span> 01  00 00 <span class="token number">23</span> 05  00 00 <span class="token number">13</span> 00  00 00 5b <span class="token number">43</span>   .Hh<span class="token punctuation">..</span>.<span class="token comment">#.......[C</span>
0020:   6f 6e <span class="token number">74</span> <span class="token number">65</span>  6e <span class="token number">74</span> 5f <span class="token number">54</span>  <span class="token number">79</span> <span class="token number">70</span> <span class="token number">65</span> <span class="token number">73</span>  5d 2e <span class="token number">78</span> 6d   ontent_Types<span class="token punctuation">]</span>.xm
<span class="token punctuation">..</span>.
18a0:   6b <span class="token number">73</span> <span class="token number">68</span> <span class="token number">65</span>  <span class="token number">65</span> <span class="token number">74</span> <span class="token number">73</span> 2f  <span class="token number">73</span> <span class="token number">68</span> <span class="token number">65</span> <span class="token number">65</span>  <span class="token number">74</span> <span class="token number">31</span> 2e <span class="token number">78</span>   ksheets/sheet1.x
18b0:   6d 6c <span class="token number">50</span> 4b  05 06 00 00  00 00 0a 00  0a 00 7f 02   mlPK<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
18c0:   00 00 <span class="token number">33</span> <span class="token number">16</span>  00 00 00 00                             <span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.
<span class="token operator">&gt;</span> <span class="token function">open</span> abc.xlsx --raw <span class="token operator">|</span> from xlsx
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 Sheet1
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table <span class="token number">26</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,3),o=[t];function c(l,u){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","from-xlsx.html.vue"]]);export{k as default};
