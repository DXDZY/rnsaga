import config from './../config';
if(config.isDev){
    module.exports = require('./configureStore.dev');
}else{
    module.exports = require('./configureStore.prod');
}
