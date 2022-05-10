# Server Side Rendering with Preact + PHP (via handlebars)

This is a demo project showcasing how to achieve limited SSR with Preact and PHP.

You could swap Preact for React, and PHP for other languages that don't support rending JavaScript on the server.

## Setup

1. Clone this repo locally.
2. Run `npm install` to install dependencies.
3. Run `npm run templates` to generate the handlebars template in `./webroot/templates/` from the Preact app.
4. Run `npm run development` to setup your development build and create the application.
5. Copy the contents `webroot` folder to your PHP server.
6. If not running directly on a domain, ensure you update `./webroot/index.php` so that the script (`/assets/app.js`) points to the correct location to load the Preact app.

## Test

Once you have copied the contents of `webroot` to your PHP server, access the URL on your server.

If you **view source** of the webpage, you will see that application html is generated on the server:

```html
<section class="profile"><h1>Mary</h1><div>Red</div><div>Green</div><div>Blue</div></section>
```

Once the Preact application is loaded, the application will interactive.

**You should not see a flicker when the JS has downloaded and the application has initialised. This means SSR was a success 💪**

## Limitations

There are currently some __significant__ limitations with this approach.

Most notably the generation of the handlebars template.  

It is created using the alpha (still in development) version of **Babel JSX Template Vars** which only supports an extremely small subset of JSX syntax.

Read here on whats currently supported and can be successfully translated to handlebars syntax.

## Future goals

Even running handlebars on the server is not particularly performant.  A future goal would be to compile this straight to PHP (so the logic in the templates is directly handled by the server) and then all we would need to do is a simple token replacement for replacement variables.









