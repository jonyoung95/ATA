import { useState } from 'react'

type CopyButtonProps = {
  text: string
}

function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    if (text === '') {
      return
    }

    await navigator.clipboard.writeText(text)

    setIsCopied(true)

    window.setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <button
      type="button"
      className="copy-button"
      onClick={handleCopy}
      disabled={text === ''}
    >
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default CopyButton