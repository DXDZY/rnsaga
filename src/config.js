const config = {
    isDev: true, // false 正式， true 测试
    DEBUG: true, // false 正式， true 测试
    dev: {
      server: "http://ucl.ceshi.xin.com",
      nclserver: "http://ncl.ceshi.xin.com",
      version:"https://app.youxinpai.com/transformers/ios/test/version.json",
      mock:'api',
    },
    production: {
      server: "https://ucl.xin.com",
      nclserver: "https://ncl.xin.com",
      version: "https://app.youxinpai.com/transformers/ios/test/version.json",
      mock:'api',
    },
  }
  if (!config.DEBUG) {
    global.console = {
      info: () => {},
      log: () => {},
      warn: () => {},
      debug: () => {},
      error: () => {}
    };
  }
  export default config;
  