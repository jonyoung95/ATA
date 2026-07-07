import { useState } from 'react'
import type { TranslationMode } from './ModeSelector'

type TranslationPanelProps = {
  selectedMode: TranslationMode | null
}

function TranslationPanel({ selectedMode }: TranslationPanelProps) {
  const [sourceText, setSourceText] = useState('')
  const [recommendationText, setRecommendationText] = useState('')

  const isModeSelected = selectedMode !== null

  const handleSourceTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const nextSourceText = event.target.value

    setSourceText(nextSourceText)

    if (!isModeSelected || nextSourceText.trim() === '') {
      setRecommendationText('')
      return
    }

    setRecommendationText(
      `[${selectedMode.toUpperCase()} MODE] Recommendation will be generated for:\n\n${nextSourceText}`,
    )
  }

  return (
    <section className="translation-panel">
      <div className="panel-header">
        <h2>Translation Workspace</h2>
        <p>
          {isModeSelected
            ? 'Enter source text to prepare a mode-based recommendation.'
            : 'Select a mode before starting the translation workflow.'}
        </p>
      </div>

      <div className="workspace-grid">
        <div className="editor-area">
          <label htmlFor="source-text">Source Text</label>
          <textarea
            id="source-text"
            value={sourceText}
            onChange={handleSourceTextChange}
            placeholder={
              isModeSelected
                ? 'Enter the original text here...'
                : 'Select a mode first.'
            }
            disabled={!isModeSelected}
          />
        </div>

        <div className="editor-area">
          <label htmlFor="recommendation-text">AI Recommendation Result</label>
          <textarea
            id="recommendation-text"
            value={recommendationText}
            onChange={(event) => setRecommendationText(event.target.value)}
            placeholder="Recommendation will be generated automatically based on source text and mode."
            disabled={!isModeSelected}
          />
        </div>
      </div>
    </section>
  )
}

export default TranslationPanel