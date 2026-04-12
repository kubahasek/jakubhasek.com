import { createStart } from '@tanstack/react-start'
import { createRouter } from './router'

const router = createRouter()

export const start = createStart({ router })
