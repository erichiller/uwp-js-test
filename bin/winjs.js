(function () {
    "use strict";
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var isFirstActivation = true;
    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.voiceCommand) {
        }
        else if (args.detail.kind === activation.ActivationKind.launch) {
            // A Launch activation happens when the user launches your app via the tile
            // or invokes a toast notification by clicking or tapping on the body.
            if (args.detail.arguments) {
            }
            else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
            }
        }
        if (!args.detail.prelaunchActivated) {
        }
        if (isFirstActivation) {
            // TODO: The app was activated and had not been running. Do general startup initialization here.
            document.addEventListener("visibilitychange", onVisibilityChanged);
            args.setPromise(WinJS.UI.processAll().then(function completed() {
                var ratingControlDiv = document.getElementById("ratingControlDiv");
                var ratingControl = ratingControlDiv.winControl;
                ratingControl.addEventListener("change", ratingChanged, false);
            }));
            var helloButton = document.getElementById("helloButton");
            helloButton.addEventListener("click", buttonClickHandler, false);
        }
        isFirstActivation = false;
    };
})();
function buttonClickHandler(eventInfo) {
    var userName = document.getElementById("nameInput").value;
    var greetingString = "Hello, " + userName + "!";
    document.getElementById("greetingOutput").innerText = greetingString;
}
//# sourceMappingURL=winjs.js.map