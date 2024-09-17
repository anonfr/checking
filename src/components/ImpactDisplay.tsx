import React from 'react'

interface TokenDisplayProps {
  tokens: number
}

const TokenDisplay: React.FC<TokenDisplayProps> = ({ tokens }) => {
  return (
    <div className="token-display">
      <p>Tokens: {tokens}</p>
    </div>
  )
}

export default TokenDisplay
