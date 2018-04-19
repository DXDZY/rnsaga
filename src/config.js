
const isDev=true;
const isLocal=true;
let server = "http://ucl.ceshi.xin.com";
let version = "https://app.youxinpai.com/transformers/ios/test/version.json";
if(!isDev){
    server = "https://ucl.xin.com";
    version = "https://app.youxinpai.com/transformers/ios/test/version.json";
}
if(isLocal){
    server="api";
}
const config = {
    isDev,
    server,
    version,
}
export default config;