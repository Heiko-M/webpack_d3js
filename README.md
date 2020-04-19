# webpack_d3js

*Node App for Data Visualization with D3.js bundled with Webpack*

This app is a personal project to learn Webpack and D3.js plus a few other things. Feel free to use it to your advantage.

## Prerequisites

The app expects a `dist` folder containing an `index.html` file that includes

- a `<div id="plot_area"></div>` element and
- a `<script src="main.js" type="text/javascript"></script>` element

in its body, such as this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data Visualization with D3.js</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <h1>Data Visualization with D3.js</h1>
  <div id="plot_area"></div>
  <script src="main.js" type="text/javascript"></script>
</body>

</html>
```

## Run

To serve the app on localhost, run

```sh
npm start
```

## Build

To generate an up-to-date bundle of all files with webpack, run

```sh
npm run build
```