import { callPortfolioAssistant, resolveApiKey, resolveModel } from './_lib/openrouter.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' })
    return
  }

  try {
    const { context, messages } = req.body ?? {}

    const { status, body } = await callPortfolioAssistant({
      apiKey: resolveApiKey(process.env),
      model: resolveModel(process.env),
      context,
      messages,
    })

    res.status(status).json(body)
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Chat proxy failed.',
    })
  }
}
