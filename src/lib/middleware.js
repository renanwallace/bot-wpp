let ExposedFn;
(function (ExposedFn) {
    ExposedFn["OnMessage"] = "onMessage";
})(ExposedFn || (ExposedFn = {}));

/**
 * Expõe a função [OnMessage]
 */

WAPI.waitNewMessages(false, function (data) {
    data.forEach(function (message) {
        window[ExposedFn.OnMessage](message);
    });
});
