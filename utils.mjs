export function getBroadcastChannel() {
    return new BroadcastChannel('drupal-cgi-worker');
}

export function registerWorker(moduleUrl) {
    function registrationReady() {
        getBroadcastChannel().postMessage({
            action: 'service_worker_ready',
        })
    }
    const serviceWorker = navigator.serviceWorker;
    serviceWorker.register(moduleUrl, {
        type: "module"
    })
        .then(registrationReady)
}
