import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'

import { portfolioAssistantContext } from '../data/portfolio'

type ChatMessage = {
  id: string
  role: 'assistant' | 'user'
  content: string
}

const starterQuestions = [
  'What kind of engineering roles is Samuel targeting?',
  'Summarize Samuel for a recruiter in 30 seconds.',
  'What products has Samuel worked on in this portfolio?',
]

const initialMessage: ChatMessage = {
  id: 'assistant-intro',
  role: 'assistant',
  content:
    'Ask about role fit, engineering style, verified projects, or contact details. Live answers come from the server-side portfolio assistant endpoint.',
}

export function PortfolioChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSend = useMemo(() => prompt.trim().length > 0 && !isLoading, [prompt, isLoading])

  const sendMessage = async (nextPrompt: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: nextPrompt,
    }

    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setPrompt('')
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          context: portfolioAssistantContext,
          messages: nextMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      })

      const data = (await response.json()) as {
        error?: string
        reply?: string
      }
      const reply = data.reply?.trim()

      if (!response.ok || !reply) {
        throw new Error(data.error ?? `Request failed with status ${response.status}.`)
      }

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: reply,
        },
      ])
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'The portfolio assistant could not respond.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextPrompt = prompt.trim()
    if (!nextPrompt) {
      return
    }

    await sendMessage(nextPrompt)
  }

  return (
    <div className="chat-card">
      <div className="chat-starters" aria-label="Suggested questions">
        {starterQuestions.map((question) => (
          <button
            className="starter-chip"
            key={question}
            type="button"
            onClick={() => {
              setPrompt(question)
              void sendMessage(question)
            }}
            disabled={isLoading}
          >
            {question}
          </button>
        ))}
      </div>

      <div className="chat-log" aria-live="polite">
        {messages.map((message) => (
          <article className={`chat-message ${message.role}`} key={message.id}>
            <span className="chat-role">{message.role === 'assistant' ? 'AI' : 'You'}</span>
            <p>{message.content}</p>
          </article>
        ))}

        {isLoading ? (
          <article className="chat-message assistant">
            <span className="chat-role">AI</span>
            <p className="typing-indicator">
              Thinking<span>.</span><span>.</span><span>.</span>
            </p>
          </article>
        ) : null}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="portfolio-chat-prompt">
          Ask a question about Samuel Alli
        </label>
        <textarea
          id="portfolio-chat-prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ask about engineering depth, verified projects, or role fit."
          rows={4}
        />
        <div className="chat-form-footer">
          <button className="primary-action chat-submit" type="submit" disabled={!canSend}>
            Send
          </button>
        </div>
      </form>

      {error ? <p className="chat-error">{error}</p> : null}
    </div>
  )
}
