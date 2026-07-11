import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

import { callPortfolioAssistant, resolveApiKey, resolveModel } from './api/_lib/openrouter.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'portfolio-chat-dev-proxy',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res, next) => {
            if (req.method !== 'POST') {
              next()
              return
            }

            try {
              const rawBody = await new Promise<string>((resolve, reject) => {
                let body = ''
                req.on('data', (chunk) => {
                  body += chunk
                })
                req.on('end', () => resolve(body))
                req.on('error', reject)
              })

              const payload = JSON.parse(rawBody) as {
                context?: string
                messages?: Array<{ role: 'assistant' | 'user'; content: string }>
              }

              const { status, body } = await callPortfolioAssistant({
                apiKey: resolveApiKey(env),
                model: resolveModel(env),
                context: payload.context,
                messages: payload.messages,
              })

              res.statusCode = status
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(body))
            } catch (error) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  error: error instanceof Error ? error.message : 'Chat proxy failed.',
                }),
              )
            }
          })
        },
      },
    ],
  }
})
