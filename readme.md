# Server Side Rendering with Preact + PHP

This is a demo project showcasing how to achieve limited SSR with Preact and PHP, without extensions.

You could swap Preact for React.

If you want to use other server side languages, you could [output to handlebars](https://github.com/rmorse/ssr-preact-php-handlebars) instead, or [add your own language in the JSX Template Vars plugin](https://github.com/rmorse/babel-plugin-jsx-template-vars/wiki/Custom-languages).

## Setup

1. Clone this repo locally.
2. Run `npm install` to install dependencies.
3. Run `npm run templates` to generate the PHP template in `./webroot/templates/` from the Preact app.
4. Run `npm run development` to setup your development build and create the application.
5. Copy the contents `webroot` folder to your PHP server.
6. If not running directly on a domain, ensure you update `./webroot/index.php` so that the script (`/assets/app.js`) points to the correct location to load the Preact app.

## Test

Once you have copied the contents of `webroot` to your PHP server, access the URL on your server.

If you **view source** of the webpage, you will see that application html is generated on the server:

```html
<section class="profile"><h1>Mary</h1>...</section>
```

Once the Preact application is loaded, the application will be interactive.

**You should not see a flicker when the JS has downloaded and the application has initialised. This means SSR was a success 💪**

## How it works

Add a `templateVars` property [to your component object](https://github.com/rmorse/ssr-preact-php/blob/main/src/components/person/index.js#L58) to define which variables should be exposed to the PHP template.

[There is more information about how to use the Babel JSX Template Vars transform here](https://github.com/rmorse/babel-plugin-jsx-template-vars#template-variable-types).

## Limitations

There are currently some __significant__ limitations with this approach.

Most notably the generation of the PHP template.  

It is created using the __still in development__ version of **Babel JSX Template Vars** which only supports an extremely small subset of JSX syntax.

[Read here on whats currently supported and can be successfully translated to PHP syntax](https://github.com/rmorse/babel-plugin-jsx-template-vars#template-variable-types).








