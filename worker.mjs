
export function setUpWorker(worker) {

    worker.addEventListener('fetch',    event => {
        const url     = new URL(event.request.url);
        const prefix = '/cgi/'
        if (url.pathname.substr(0, prefix.length) === prefix && url.hostname === self.location.hostname) {
            event.respondWith(
                (async () => {
                  return new Response(`<html><body class="sw-body"><h1>200</h1>${url} found<script>window.onload = function() { let p = document.createElement('p');p.innerHTML = 'this is written with document write on load';document.querySelector('body').append(p) }</script></body></html>`, {
                    status: 200,
                    headers: {"Content-Type": "text/html"},
                  })
                })(),
              )
        }
    })
}
