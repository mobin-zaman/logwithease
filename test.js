const logger = require('./index');

const x = 100;
count = 0;


const example_exception = "Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Grid which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node\n" +
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

// let timer = setInterval(()=> {
logger.error("error happeneing in somehwere: ", example_exception);


logger.warn(`giving you warning: ${count++}`);

logger.log("NOTE", `giving you note: ${count++}`);
// } ,10000);
