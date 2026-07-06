import { useState } from 'react'

function TranslationPanel() {
  const [sourceText, setSourceText] = useState('')
  const [translationDraft, setTranslationDraft] = useState('')

  return (
    <section className="translation-panel">
      <div className="panel-header">
        <h2>Translation Workspace</h2>
        <p>Start building your knowledge-driven translation flow here.</p>
      </div>

      <div className="workspace-grid">
        <div className="editor-area">
          <label htmlFor="source-text">Source Text</label>
          <textarea
            id="source-text"
            value={sourceText}
            onChange={(event) => setSourceText(event.target.value)}
            placeholder="Enter the original text here..."
          />
        </div>

        <div className="editor-area">
          <label htmlFor="translation-draft">AI Recommendation Result</label>
          <textarea
            id="translation-draft"
            value={translationDraft}
            onChange={(event) => setTranslationDraft(event.target.value)}
            placeholder="Recommendation will be generated based on source text and mode."
          />
        </div>
      </div>
    </section>
  )
}

export default TranslationPanel