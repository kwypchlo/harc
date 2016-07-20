# Home Automation Remote Controller POC

## Installation

Install application dependencies with:
```bash
npm install
```

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Deploying the app

* build production: `npm run build`
* deploy `dist` directory to the web server

## Testing

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

## Writing your own widget for the dashboard

### Creating widget component

TL:DR: copy one of the pre-made widgets (eg. `harc-widget-lights`) and modify template, controller and service to fit your needs

Creating new widget component step by step:

* create a component with prefix `harc-widget-` (eg. `harc-widget-audio`)
* in a template file, your widget should be wrapped in `es-widget` component (see `es-widget` documentation, make sure to import `harcWidget` module)

### Using widget component

* in harc-dashboard component, add your widget to harc-dashboard.html
* your widget should contain controller and require `harcDashboard` component as a parent
* in your widget controller, call `register` method on required `harcDashboard` controller with your widget name (id) as a param
* extend dashboard api to return widget data on general api call (with name of the widget as a param)

## License

[MIT](/LICENSE)
