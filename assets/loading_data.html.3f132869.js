import{_ as e,o as t,c as a,e as o}from"./app.68c16707.js";const n={},s=o(`<h1 id="loading-data" tabindex="-1"><a class="header-anchor" href="#loading-data" aria-hidden="true">#</a> Loading data</h1><p>Earlier, we saw how you can use commands like <code>ls</code>, <code>ps</code>, <code>date</code>, and <code>sys</code> to load information about your files, processes, time of date, and the system itself. Each command gives us a table of information that we can explore. There are other ways we can load in a table of data to work with.</p><h2 id="opening-files" tabindex="-1"><a class="header-anchor" href="#opening-files" aria-hidden="true">#</a> Opening files</h2><p>One of Nu&#39;s most powerful assets in working with data is the <code>open</code> command. It is a multi-tool that can work with a number of different data formats. To see what this means, let&#39;s try opening a json file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open editors/vscode/package.json
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
</code></pre></div><p>In a similar way to <code>ls</code>, opening a file type that Nu understands will give us back something that is more than just text (or a stream of bytes). Here we open a &quot;package.json&quot; file from a JavaScript project. Nu can recognize and open the JSON text and give back a table of data.</p><p>If we wanted to check the version of the project we were looking at, we can use the <code>get</code> command.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu currently supports the following formats for loading data directly into tables:</p><ul><li>json</li><li>yaml</li><li>toml</li><li>xml</li><li>csv</li><li>ini</li><li>xls</li><li>xlsx</li></ul><p>But what happens if you load a text file that isn&#39;t one of these? Let&#39;s try it:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>We&#39;re shown the contents of the file. If the file is too large, we get a handy scroll-view to look at the file and then jump back to the terminal. To help with readability, Nu will also syntax-highlight common file formats like source files, markdown, and more.</p><p>Below the surface, what Nu sees in these text files is one large string. Next, we&#39;ll talk about how to work with these strings to get the data we need out of them.</p><h2 id="working-with-strings" tabindex="-1"><a class="header-anchor" href="#working-with-strings" aria-hidden="true">#</a> Working with strings</h2><p>An important part of working with data coming from outside Nu is that it&#39;s not always in a format that Nu understands. Often this data is given to us as a string.</p><p>Let&#39;s imagine that we&#39;re given this data file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Each bit of data we want is separated by the pipe (&#39;|&#39;) symbol, and each person is on a separate line. Nu doesn&#39;t have a pipe-delimited file format by default, so we&#39;ll have to parse this ourselves.</p><p>The first thing we want to do when bringing in the file is to work with it a line at a time:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia | Butler | Writer
 1 \u2502 Bob | Ross | Painter
 2 \u2502 Antonio | Vivaldi | Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We can see that we&#39;re working with the lines because we&#39;re back into a table. Our next step is to see if we can split up the rows into something a little more useful. For that, we&#39;ll use the <code>split</code> command. <code>split</code>, as the name implies, gives us a way to split a delimited string. We will use <code>split</code>&#39;s <code>column</code> subcommand to split the contents across multiple columns. We tell it what the delimiter is, and it does the rest:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot;
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 Column1  \u2502 Column2   \u2502 Column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia  \u2502  Butler   \u2502  Writer
 1 \u2502 Bob      \u2502  Ross     \u2502  Painter
 2 \u2502 Antonio  \u2502  Vivaldi  \u2502  Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>That <em>almost</em> looks correct. It looks like there&#39;s an extra space there. Let&#39;s <code>trim</code> that extra space:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 Column1 \u2502 Column2 \u2502 Column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia \u2502 Butler  \u2502 Writer
 1 \u2502 Bob     \u2502 Ross    \u2502 Painter
 2 \u2502 Antonio \u2502 Vivaldi \u2502 Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Not bad. The <code>split</code> command gives us data we can use. It also goes ahead and gives us default column names:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get Column1
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
</code></pre></div><p>There are other commands you can use to work with strings:</p><ul><li><code>str</code></li><li><code>lines</code></li><li><code>size</code></li></ul><p>There is also a set of helper commands we can call if we know the data has a structure that Nu should be able to understand. For example, let&#39;s open a Rust lock file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.lock
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
</code></pre></div><p>The <code>from</code> command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.</p><h2 id="opening-in-raw-mode" tabindex="-1"><a class="header-anchor" href="#opening-in-raw-mode" aria-hidden="true">#</a> Opening in raw mode</h2><p>While it&#39;s helpful to be able to open a file and immediately work with a table of its data, this is not always what you want to do. To get to the underlying text, the <code>open</code> command can take an optional <code>--raw</code> flag:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml --raw
[package]                                                                                        name = &quot;nu&quot;
version = &quot;0.1.3&quot;
authors = [&quot;Yehuda Katz &lt;wycats@gmail.com&gt;&quot;, &quot;Jonathan Turner &lt;jonathan.d.turner@gmail.com&gt;&quot;]
description = &quot;A shell for the GitHub era&quot;
license = &quot;MIT&quot;
</code></pre></div><h2 id="fetching-urls" tabindex="-1"><a class="header-anchor" href="#fetching-urls" aria-hidden="true">#</a> Fetching URLs</h2><p>In addition to loading files from your filesystem, you can also load URLs by using the <code>fetch</code> command. This will fetch the contents of the URL from the internet and return it:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; fetch https://www.jonathanturner.org/feed.xml
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 rss \u2502 [row attributes children]
\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,44),i=[s];function l(r,d){return t(),a("div",null,i)}var p=e(n,[["render",l],["__file","loading_data.html.vue"]]);export{p as default};
