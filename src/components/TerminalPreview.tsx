import { useEffect, useState } from 'react'

const commandRotations = [
  'pnpm ship frontend --with-motion',
  'git checkout feature/recruiter-wow-factor',
  'deploy portfolio --region global',
]

const deploymentLogs = [
  '[17:42:10] booting edge preview',
  '[17:42:11] syncing recruiter-ready content',
  '[17:42:12] optimizing interaction payloads',
  '[17:42:13] enabling polished motion budget',
  '[17:42:14] green build // ready for production',
]

export function TerminalPreview() {
  const [commandIndex, setCommandIndex] = useState(0)
  const [visibleCharacters, setVisibleCharacters] = useState(0)

  useEffect(() => {
    const currentCommand = commandRotations[commandIndex]
    const interval = window.setInterval(() => {
      setVisibleCharacters((current) => {
        if (current >= currentCommand.length) {
          window.clearInterval(interval)
          return current
        }

        return current + 1
      })
    }, 45)

    const nextCommandTimeout = window.setTimeout(() => {
      setVisibleCharacters(0)
      setCommandIndex((current) => (current + 1) % commandRotations.length)
    }, 2800)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(nextCommandTimeout)
    }
  }, [commandIndex])

  const visibleCommand = commandRotations[commandIndex].slice(0, visibleCharacters)

  return (
    <aside className="terminal-card" aria-label="Animated deployment terminal preview">
      <div className="terminal-topbar">
        <span />
        <span />
        <span />
      </div>

      <div className="terminal-body">
        <p className="terminal-path">samuel@portfolio:~$</p>
        <p className="terminal-command">
          {visibleCommand}
          <span className="cursor" aria-hidden="true" />
        </p>

        <div className="log-stream" aria-hidden="true">
          {deploymentLogs.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="status-pills">
          <span className="status-pill cyan">React + TypeScript</span>
          <span className="status-pill green">Design systems</span>
          <span className="status-pill orange">Product delivery</span>
        </div>
      </div>
    </aside>
  )
}
