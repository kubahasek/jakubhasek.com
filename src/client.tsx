import { StartClient } from '@tanstack/react-start/client'
import { createRouter } from './router'

const router = createRouter()

export default function ClientApp() {
  return <StartClient router={router} />
}
