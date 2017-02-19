export namespace CONFIG {
  export let Debug:boolean = true;
  let Name = "uwp-js-test";
  let Version = new Date().toDateString();
  export let Title = `${Name} - build ${Version}`; 
  export let DevTools = {
    //React: "/Users/ehiller/Library/Application Support/Google/Chrome/Profile 2/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0/"
    React: "/Users/ehiller/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0/"
  };
  export let Log = {
    exclude: [
     // "window.js"
    ]
  }
  
}

// see file:///C:/Users/ehiller/AppData/Local/Google/Chrome/User%20Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0/manifest.json
// the manifest file has the react debug extension name, could just scan all of these until I find the correct extension.
