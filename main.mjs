import { registerWorker, getBroadcastChannel } from './utils.mjs'

let channel = getBroadcastChannel()
channel.addEventListener('message', ({ data }) => {
  const { action } = data;
  if (action === 'service_worker_ready') {
      window.location.href = '/cgi/test'
  }
})

registerWorker(
  `${window.location.origin}/service-worker.mjs`,
)
