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

## Writing your dashboard widgets

Please check the jsdoc documentation on [harcDashboard](/src/app/components/harc-dashboard/index.js) component

## License

[MIT](/LICENSE)
