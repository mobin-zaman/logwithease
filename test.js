const logger = require('./index');

const x = 100;
count = 0;

let timer = setInterval(()=> { 
logger.error(`error happened: ${count++}`);


logger.warn(`giving you warning: ${count++}`);

logger.log("NOTE", `giving you note: ${count++}`);
} ,000);
