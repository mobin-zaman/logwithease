
const axios = require('axios');
const colors = require('colors');


const BASE_URL = "https://logwithease.servebeer.com/api/logs";



    class Logger {
        constructor(apiKey) {
            this.apiKey = apiKey;
        }

        log(type,...log) {


            const concatLog = log.join(' ');

            axios.post(BASE_URL, {
                api_key: this.apiKey,
                type,
                description: concatLog
            }).then(response => {
                if(response.status === 200) {
                    if(type === 'INFO') {
                        console.log(`LOGWITHEASE: logged ${type}--> `.green, concatLog.blue);
                    }
                    else if(type === 'ERROR'){
                        console.log(`LOGWITHEASE: logged ${type}--> `.red, concatLog.red);
                    }
                    else if(type === 'WARN') {
                        console.log(`LOGWITHEASE: logged ${type}--> `.yellow, concatLog.yellow);
                    }

                    else {
                        console.log(`LOGWITHEASE: logged ${type}--> `.green, concatLog.green);
                    }

                }
            }).catch(e => {
                console.log(e);
                // if(e.response.status === 404) {{
                console.log("LOGWITHEASE: error --> please check the api key".bgRed);
                console.log(`LOGWITHEASE: error --> also check if you have set LOGWITHEASEKEY=<api_key> as environment variable`.red);
                console.log("NOT LOGGED TO LOGWITHEASE: ".red,concatLog);
                // }}
            })
        }

        info(...log) {
            this.log('INFO', ...log);
        }

        warn(...log) {
            this.log('WARN', ...log);
        }

        error(...log) {
            this.log('ERROR', ...log);
        }


    }

module.exports = Logger;

