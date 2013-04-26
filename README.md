Yet another table sorter
========================

Yats.js is a simple javascript table sorter.


Usage
-----

To use yats.js include `yats.js` at the bottom of your page. Furthermore you will need to include the `yats.css` file and the font-awesome.

There are two ways to target your tables: 

1. Add a `data-tablesort`attribute to the tables you want to enable sorting on.
2. Call `sortTable(".your-selector");`

Shortcommings
-------------

At the moment yats.js has some limitations. It expects your table have a layout like so:

    <table>
      <thead>
        <tr>
          <th>Headings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Content</td>
        </tr>
        ...
      </tbody>
    </table>

Styling
-------

Since `yats.js` uses [Font Awesome](http://fortawesome.github.io/Font-Awesome/), you might want to get rid of that dependency. You can take a look at the `yats.css` file, it is really small.

Development
-----------

To play around, or develop it you can use:

    bundle install
    rake server

License
-------

See license.txt

