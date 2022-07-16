import{_ as l,o as i,c as d,a as e,b as n,w as a,d as t,e as s,r as c}from"./app.a5cac4f6.js";const r={},h=e("h1",{id:"loading-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loading-data","aria-hidden":"true"},"#"),t(" Loading data")],-1),u=t("Earlier, we saw how you can use commands like "),m=e("code",null,"ls",-1),p=t(", "),_=e("code",null,"ps",-1),g=t(", "),f=e("code",null,"date",-1),x=t(", and "),w=e("code",null,"sys",-1),b=t(" to load information about your files, processes, time of date, and the system itself. Each command gives us a table of information that we can explore. There are other ways we can load in a table of data to work with."),v=e("h2",{id:"opening-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opening-files","aria-hidden":"true"},"#"),t(" Opening files")],-1),k=t("One of Nu's most powerful assets in working with data is the "),y=e("code",null,"open",-1),B=t(" command. It is a multi-tool that can work with a number of different data formats. To see what this means, let's try opening a json file:"),N=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open editors/vscode/package.json
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name             \u2502 lark
 description      \u2502 Lark support for VS Code
 author           \u2502 Lark developers
 license          \u2502 MIT
 version          \u2502 1.0.0
 repository       \u2502 [row type url]
 publisher        \u2502 vscode
 categories       \u2502 [table 0 rows]
 keywords         \u2502 [table 1 rows]
 engines          \u2502 [row vscode]
 activationEvents \u2502 [table 1 rows]
 main             \u2502 ./out/extension
 contributes      \u2502 [row configuration grammars languages]
 scripts          \u2502 [row compile postinstall test vscode:prepublish watch]
 devDependencies  \u2502 [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),T=t("In a similar way to "),C=e("code",null,"ls",-1),j=t(', opening a file type that Nu understands will give us back something that is more than just text (or a stream of bytes). Here we open a "package.json" file from a JavaScript project. Nu can recognize the JSON text and parse it to a table of data.'),O=t("If we wanted to check the version of the project we were looking at, we can use the "),R=e("code",null,"get",-1),q=t(" command."),W=s(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu currently supports the following formats for loading data directly into tables:</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li>nuon</li><li>ods</li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>But what happens if you load a text file that isn&#39;t one of these? Let&#39;s try it:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>We&#39;re shown the contents of the file.</p><p>Below the surface, what Nu sees in these text files is one large string. Next, we&#39;ll talk about how to work with these strings to get the data we need out of them.</p><h2 id="handling-strings" tabindex="-1"><a class="header-anchor" href="#handling-strings" aria-hidden="true">#</a> Handling Strings</h2><p>An important part of working with data coming from outside Nu is that it&#39;s not always in a format that Nu understands. Often this data is given to us as a string.</p><p>Let&#39;s imagine that we&#39;re given this data file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Each bit of data we want is separated by the pipe (&#39;|&#39;) symbol, and each person is on a separate line. Nu doesn&#39;t have a pipe-delimited file format by default, so we&#39;ll have to parse this ourselves.</p><p>The first thing we want to do when bringing in the file is to work with it a line at a time:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia | Butler | Writer
 1 \u2502 Bob | Ross | Painter
 2 \u2502 Antonio | Vivaldi | Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,14),L=t("We can see that we're working with the lines because we're back into a table. Our next step is to see if we can split up the rows into something a little more useful. For that, we'll use the "),V=e("code",null,"split",-1),A=t(" command. "),I=e("code",null,"split",-1),E=t(", as the name implies, gives us a way to split a delimited string. We will use "),P=e("code",null,"split",-1),S=t("'s "),z=e("code",null,"column",-1),F=t(" subcommand to split the contents across multiple columns. We tell it what the delimiter is, and it does the rest:"),H=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|"
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1  \u2502 column2   \u2502 column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia  \u2502  Butler   \u2502  Writer
 1 \u2502 Bob      \u2502  Ross     \u2502  Painter
 2 \u2502 Antonio  \u2502  Vivaldi  \u2502  Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),J=t("That "),M=e("em",null,"almost",-1),U=t(" looks correct. It looks like there's an extra space there. Let's "),D=e("code",null,"trim",-1),G=t(" that extra space:"),K=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|" | str trim
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1 \u2502 column2 \u2502 column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia \u2502 Butler  \u2502 Writer
 1 \u2502 Bob     \u2502 Ross    \u2502 Painter
 2 \u2502 Antonio \u2502 Vivaldi \u2502 Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),Y=t("Not bad. The "),Q=e("code",null,"split",-1),X=t(" command gives us data we can use. It also goes ahead and gives us default column names:"),Z=s(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia
 1 \u2502 Bob
 2 \u2502 Antonio
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We can also name our columns instead of using the default names:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 first_name \u2502 last_name \u2502 job
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia    \u2502 Butler    \u2502 Writer
 1 \u2502 Bob        \u2502 Ross      \u2502 Painter
 2 \u2502 Antonio    \u2502 Vivaldi   \u2502 Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Now that our data is in a table, we can use all the commands we&#39;ve used on tables before:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 first_name \u2502 last_name \u2502 job
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Antonio    \u2502 Vivaldi   \u2502 Composer
 1 \u2502 Bob        \u2502 Ross      \u2502 Painter
 2 \u2502 Octavia    \u2502 Butler    \u2502 Writer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>There are other commands you can use to work with strings:</p>`,6),$=e("li",null,[e("code",null,"str")],-1),ee=e("code",null,"lines",-1),te=e("code",null,"size",-1),oe=s(`<p>There is also a set of helper commands we can call if we know the data has a structure that Nu should be able to understand. For example, let&#39;s open a Rust lock file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = &quot;adhoc_derive&quot;
version = &quot;0.1.2&quot;
</code></pre></div><p>The &quot;Cargo.lock&quot; file is actually a .toml file, but the file extension isn&#39;t .toml. That&#39;s okay, we can use the <code>from</code> command using the <code>toml</code> subcommand:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 metadata \u2502 [row 107 columns]
 package  \u2502 [table 130 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>The <code>from</code> command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.</p><h2 id="opening-in-raw-mode" tabindex="-1"><a class="header-anchor" href="#opening-in-raw-mode" aria-hidden="true">#</a> Opening in raw mode</h2>`,6),ne=t("While it's helpful to be able to open a file and immediately work with a table of its data, this is not always what you want to do. To get to the underlying text, the "),ae=e("code",null,"open",-1),se=t(" command can take an optional "),le=e("code",null,"--raw",-1),ie=t(" flag:"),de=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml --raw
[package]                                                                                        name = "nu"
version = "0.1.3"
authors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]
description = "A shell for the GitHub era"
license = "MIT"
`)])],-1),ce=e("h2",{id:"fetching-urls",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fetching-urls","aria-hidden":"true"},"#"),t(" Fetching URLs")],-1),re=t("In addition to loading files from your filesystem, you can also load URLs by using the "),he=e("code",null,"fetch",-1),ue=t(" command. This will fetch the contents of the URL from the internet and return it:"),me=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> fetch https://blog.rust-lang.org/feed.xml
\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 feed \u2502 {record 2 fields}
\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1);function pe(_e,ge){const o=c("RouterLink");return i(),d("div",null,[h,e("p",null,[u,n(o,{to:"/book/commands/ls.html"},{default:a(()=>[m]),_:1}),p,n(o,{to:"/book/commands/ps.html"},{default:a(()=>[_]),_:1}),g,n(o,{to:"/book/commands/date.html"},{default:a(()=>[f]),_:1}),x,n(o,{to:"/book/commands/sys.html"},{default:a(()=>[w]),_:1}),b]),v,e("p",null,[k,n(o,{to:"/book/commands/open.html"},{default:a(()=>[y]),_:1}),B]),N,e("p",null,[T,n(o,{to:"/book/commands/ls.html"},{default:a(()=>[C]),_:1}),j]),e("p",null,[O,n(o,{to:"/book/commands/get.html"},{default:a(()=>[R]),_:1}),q]),W,e("p",null,[L,n(o,{to:"/book/commands/split.html"},{default:a(()=>[V]),_:1}),A,n(o,{to:"/book/commands/split.html"},{default:a(()=>[I]),_:1}),E,n(o,{to:"/book/commands/split.html"},{default:a(()=>[P]),_:1}),S,z,F]),H,e("p",null,[J,M,U,n(o,{to:"/book/commands/str_trim.html"},{default:a(()=>[D]),_:1}),G]),K,e("p",null,[Y,n(o,{to:"/book/commands/split.html"},{default:a(()=>[Q]),_:1}),X]),Z,e("ul",null,[$,e("li",null,[n(o,{to:"/book/commands/lines.html"},{default:a(()=>[ee]),_:1})]),e("li",null,[n(o,{to:"/book/commands/size.html"},{default:a(()=>[te]),_:1})])]),oe,e("p",null,[ne,n(o,{to:"/book/commands/open.html"},{default:a(()=>[ae]),_:1}),se,le,ie]),de,ce,e("p",null,[re,n(o,{to:"/book/commands/fetch.html"},{default:a(()=>[he]),_:1}),ue]),me])}var xe=l(r,[["render",pe],["__file","loading_data.html.vue"]]);export{xe as default};
