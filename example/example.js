//const apiKey =  "H0ibelwxcIQ6WE45z74VZrAS4SOZ9wp2YD3qlWUXY2";
// const logger = require('./index')(api_key);
const apiKey = "v4McareBlcds2b-rWABNoy9Xds3p-tUfytlsWU70CVYdnKE5";
const Logger = require('../index');

const logger = new Logger(apiKey);


const exampleException = "Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Grid which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node\n" +
    "    in div (created by Grid)\n" +
    "    in Grid (created by Table)\n" +
    "    in div (created by Table)\n" +
    "    in Table (at LogPanel.jsx:31)\n" +
    "    in LogPanel (at LogDashboard.jsx:116)\n" +
    "    in div (at LogDashboard.jsx:113)\n" +
    "    in LogDashBoard (created by Context.Consumer)\n" +
    "    in Route (at router.js:43)\n" +
    "    in Switch (at router.js:26)\n" +
    "    in AppRouter (at src/index.js:14)\n" +
    "    in Router (created by BrowserRouter)\n" +
    "    in BrowserRouter (at src/index.js:12)\n" +
    "    in StrictMode (at src/index.js:11)";

logger.info("example information");

logger.warn(`giving you warning: ${count++}`);

logger.error("error: ", exampleException);

logger.log("NOTE", "this is an example of custom type log");




