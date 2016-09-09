'use strict';

(function() {
    var workerSource = document.getElementById('inlineWorker');
    var blob = new Blob([workerSource.textContent]);

     // can I create a new script tag like this? ack...
    var url = window.URL.createObjectURL(blob);

    var worker;
    try {
        worker = new Worker(url);
    } catch (e) {
        done();
    }

    worker.addEventListener('message', function(e) {
        assert_unreached("script ran");
    }, false);

    worker.postMessage('');
})();
