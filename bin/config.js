"use strict";
var CONFIG;
(function (CONFIG) {
    CONFIG.Debug = true;
    let Name = "uwp-js-test";
    let Version = new Date().toDateString();
    CONFIG.Title = `${Name} - build ${Version}`;
    CONFIG.DevTools = {
        //React: "/Users/ehiller/Library/Application Support/Google/Chrome/Profile 2/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0/"
        React: "/Users/ehiller/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0/"
    };
    CONFIG.Log = {
        exclude: []
    };
})(CONFIG = exports.CONFIG || (exports.CONFIG = {}));
// see file:///C:/Users/ehiller/AppData/Local/Google/Chrome/User%20Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0/manifest.json
// the manifest file has the react debug extension name, could just scan all of these until I find the correct extension.
//# sourceMappingURL=config.js.map