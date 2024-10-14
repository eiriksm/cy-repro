import { registerWorker, getBroadcastChannel } from './utils.mjs'

let channel = getBroadcastChannel()
channel.addEventListener('message', ({ data }) => {
  const { action } = data;
  if (action === 'service_worker_ready') {
      alert('the service worker is ready!')
      setTimeout(_ => {
        window.location.href = '/cgi/test'
      }, 1000)
  }
})

registerWorker(
  `${window.location.origin}/service-worker.mjs`,
)
