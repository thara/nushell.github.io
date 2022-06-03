import{_ as e,o as t,c as a,e as o}from"./app.31037174.js";const n={},r=o(`<h1 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> Metadata</h1><p>In using Nu, you may have come across times where you felt like there was something extra going on behind the scenes. For example, let&#39;s say that you try to open a file that Nu supports only to forget and try to convert again:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
</code></pre></div><p>The error message tells us not only that what we gave <code>from toml</code> wasn&#39;t a string, but also where the value originally came from. How would it know that?</p><p>Values that flow through a pipeline in Nu often have a set of additional information, or metadata, attached to them. These are known as tags, like the tags on an item in a store. These tags don&#39;t affect the data, but they give Nu a way to improve the experience of working with that data.</p><p>Let&#39;s run the <code>open</code> command again, but this time, we&#39;ll look at the tags it gives back:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | tags
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 span   \u2502 [row end start]
 anchor \u2502 /home/jonathant/Source/nushell/Cargo.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Currently, we track two bits of metadata on the values in pipeline. You can notice that we have the anchor, which gives the location for where this data was loaded from. This can help Nu better understand how to present data.</p><p>There&#39;s also a span. Let&#39;s take a closer look at that:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | tags | get span
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 start \u2502 5
 end   \u2502 15
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
</code></pre></div><p>The span &quot;start&quot; and &quot;end&quot; here refer to where the underline will be in the line. If you count over 5, and then count up to 15, you&#39;ll see it lines up with the &quot;Cargo.toml&quot; filename. This is how the error we saw earlier knew what to underline.</p>`,11),s=[r];function l(i,h){return t(),a("div",null,s)}var c=e(n,[["render",l],["__file","metadata.html.vue"]]);export{c as default};
