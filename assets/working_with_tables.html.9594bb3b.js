import{_ as e,o as t,c as a,e as n}from"./app.4b6143d5.js";const s={},o=n(`<h1 id="working-with-tables" tabindex="-1"><a class="header-anchor" href="#working-with-tables" aria-hidden="true">#</a> Working with tables</h1><p>One of the common ways of seeing data in Nu is through a table. Nu comes with a number of commands for working with tables to make it convenient to find what you&#39;re looking for, and for narrowing down the data to just what you need.</p><p>To start off, let&#39;s get a table that we can use:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="sorting-the-data" tabindex="-1"><a class="header-anchor" href="#sorting-the-data" aria-hidden="true">#</a> Sorting the data</h2><p>We can sort a table by calling the <code>sort-by</code> command and telling it which columns we want to use in the sort. Let&#39;s say we wanted to sort our table by the size of the file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 1 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
 2 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 3 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 5 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 6 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We can sort a table by any column that can be compared. For example, we could also have sorted the above using the &quot;name&quot;, &quot;accessed&quot;, or &quot;modified&quot; columns.</p><h2 id="selecting-the-data-you-want" tabindex="-1"><a class="header-anchor" href="#selecting-the-data-you-want" aria-hidden="true">#</a> Selecting the data you want</h2><p>We can select data from a table by choosing to select specific columns or specific rows. Let&#39;s <code>select</code> a few columns from our table to use:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 size
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502  4.6 KB
 1 \u2502 lib.rs        \u2502   330 B
 2 \u2502 lite_parse.rs \u2502  6.3 KB
 3 \u2502 parse.rs      \u2502 49.8 KB
 4 \u2502 path.rs       \u2502  2.1 KB
 5 \u2502 shapes.rs     \u2502  4.7 KB
 6 \u2502 signature.rs  \u2502  1.2 KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>This helps to create a table that&#39;s more focused on what we need. Next, let&#39;s say we want to only look at the 5 smallest files in this directory:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name         \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs       \u2502 File \u2502  330 B \u2502 5 days ago
 1 \u2502 signature.rs \u2502 File \u2502 1.2 KB \u2502 5 days ago
 2 \u2502 path.rs      \u2502 File \u2502 2.1 KB \u2502 5 days ago
 3 \u2502 files.rs     \u2502 File \u2502 4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs    \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>You&#39;ll notice we first sort the table by size to get to the smallest file, and then we use the <code>first 5</code> to return the first 5 rows of the table.</p><p>You can also <code>skip</code> rows that you don&#39;t want. Let&#39;s skip the first two of the 5 rows we returned above:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name      \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 path.rs   \u2502 File \u2502 2.1 KB \u2502 5 days ago
 1 \u2502 files.rs  \u2502 File \u2502 4.6 KB \u2502 5 days ago
 2 \u2502 shapes.rs \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We&#39;ve narrowed it to three rows we care about.</p><p>Let&#39;s look at a few other commands for selecting data. You may have wondered why the rows of the table are numbers. This acts as a handy way to get to a single row. Let&#39;s sort our table by the file name and then pick one of the rows with the <code>nth</code> command using its row number:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

&gt; ls | sort-by name | nth 5
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 shapes.rs
 type     \u2502 File
 size     \u2502 4.7 KB
 modified \u2502 5 days ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="getting-data-out-of-a-table" tabindex="-1"><a class="header-anchor" href="#getting-data-out-of-a-table" aria-hidden="true">#</a> Getting data out of a table</h2><p>So far, we&#39;ve worked with tables by trimming the table down to only what we need. Sometimes we may want to go a step further and only look at the values in the cells themselves rather than taking a whole column. Let&#39;s say, for example, we wanted to only get a list of the names of the files. For this, we use the <code>get</code> command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We now have the values for each of the filenames.</p><p>This might look like the <code>select</code> command we saw earlier, so let&#39;s put that here as well to compare the two:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>These look very similar! Let&#39;s see if we can spell out the difference between these two commands to make it clear:</p><ul><li><code>select</code> - creates a new table which includes only the columns specified</li><li><code>get</code> - returns the values inside the column specified as a list</li></ul><p>The one way to tell these apart looking at the table is that the column names are missing, which lets us know that this is going to be a list of values we can work with.</p><p>The <code>get</code> command can go one step further and take a path to data deeper in the table. This simplifies working with more complex data, like the structures you might find in a .json file.</p><h2 id="changing-data-in-a-table" tabindex="-1"><a class="header-anchor" href="#changing-data-in-a-table" aria-hidden="true">#</a> Changing data in a table</h2><p>In addition to selecting data from a table, we can also update what the table has. We may want to combine tables, add new columns, or edit the contents of a cell. In Nu, rather than editing in place, each of the commands in the section will return a new table in the pipeline.</p><h3 id="concatenating-tables" tabindex="-1"><a class="header-anchor" href="#concatenating-tables" aria-hidden="true">#</a> Concatenating Tables</h3><p>We can concatenate tables with identical column names using <code>echo</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let $first = [[a b]; [1 2]]
&gt; let $second = [[a b]; [3 4]]
&gt; echo $first $second
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2
 1 \u2502 3 \u2502 4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><h3 id="adding-a-new-column" tabindex="-1"><a class="header-anchor" href="#adding-a-new-column" aria-hidden="true">#</a> Adding a new column</h3><p>We can use the <code>insert</code> command to add a new column to the table. Let&#39;s look at an example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Let&#39;s add a column called &quot;next_edition&quot; with the value 2021:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Notice that we if open the original file, the contents have stayed the same:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Changes in Nu are functional changes, meaning that they work on the values themselves rather than trying to cause a permanent change. This lets us do many different types of work in our pipeline until we&#39;re ready to write out the result with any changes we&#39;d like if we choose to. Here we could write out the result using the <code>save</code> command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
&gt; open rustfmt2.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="updating-a-column" tabindex="-1"><a class="header-anchor" href="#updating-a-column" aria-hidden="true">#</a> Updating a column</h3><p>In a similar way to the <code>insert</code> command, we can also use the <code>update</code> command to change the contents of a column to a new value. To see it in action let&#39;s open the same file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>And now, let&#39;s update the edition to point at the next edition we hope to support:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | update edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="incrementing-values" tabindex="-1"><a class="header-anchor" href="#incrementing-values" aria-hidden="true">#</a> Incrementing values</h3><p>There&#39;s one more command that Nu supports that will help us work with numbers and versions: <code>inc</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
&gt; open rustfmt.toml | inc edition
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2019
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Because the value in &quot;edition&quot; is a number, we can use <code>inc</code> to update it. Where <code>inc</code> really shines is working with versions:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | get package.version
0.1.3
&gt; open Cargo.toml | inc package.version --minor | get package.version
0.2.0
</code></pre></div><p>When working with versions, we can use the flag to say how to increment the version:</p><ul><li><strong>--major</strong> - increment the major version (0.1.3 -&gt; 1.0.0)</li><li><strong>--minor</strong> - increment the minor version (0.1.3 -&gt; 0.2.0)</li><li><strong>--patch</strong> - increment the patch version (0.1.3 -&gt; 0.1.4)</li></ul>`,55),i=[o];function l(r,d){return t(),a("div",null,i)}var h=e(s,[["render",l],["__file","working_with_tables.html.vue"]]);export{h as default};
