const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'
const DEFAULT_MODEL = 'openai/gpt-oss-20b:free'

/**
 * Calls OpenRouter with the portfolio assistant context and returns a plain
 * { status, body } result so every runtime (Vercel function, Express server,
 * Vite dev middleware) can adapt it to its own response API.
 */
export async function callPortfolioAssistant({ apiKey, model, context, messages }) {
  if (!apiKey) {
    return {
      status: 503,
      body: { error: 'Missing OPENROUTER_API_KEY server environment variable.' },
    }
  }

  const response = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model || DEFAULT_MODEL,
      messages: [
        {
          role: 'system',
          content: context || 'You are a portfolio assistant.',
        },
        ...((messages || []).map((message) => ({
          role: message.role,
          content: message.content,
        }))),
      ],
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    return {
      status: response.status,
      body: { error: data?.error?.message || 'OpenRouter request failed.' },
    }
  }

  const reply = data?.choices?.[0]?.message?.content?.trim()
  return {
    status: 200,
    body: { reply: reply || 'No response returned.' },
  }
}

export function resolveApiKey(env) {
  return env.OPENROUTER_API_KEY || env.VITE_OPEN_ROUTER
}

export function resolveModel(env) {
  return env.OPENROUTER_MODEL
}
