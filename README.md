# The Local Library Website

Inspired by [Node.js Express framework tutorial on Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) using MySQL.

## Installation

    $ git clone https://github.com/sithu-ab/express-library.git
    $ cd express-library
    $ npm install

Create a new database, for example, `express_library`.

Configure your db setting in `config/config.js`.

Run migration:

    $ node_modules/.bin/sequelize db:migrate

Run app:

    $ DEBUG=express-library:* npm run devstart

## References

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
- https://github.com/sequelize/express-example
- http://docs.sequelizejs.com
