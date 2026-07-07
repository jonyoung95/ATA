import { useState } from 'react'
import ModeSelector, { type TranslationMode } from './components/ModeSelector'
import TranslationPanel from './components/TranslationPanel'
import WorkspaceHeader from './components/WorkspaceHeader'
import './App.css'

function App() {
  const [selectedMode, setSelectedMode] = useState<TranslationMode | null>(null)

  return (
    <main>
      <ModeSelector
        selectedMode={selectedMode}
        onSelectMode={setSelectedMode}
      />
      <WorkspaceHeader />
      <TranslationPanel selectedMode={selectedMode} />
    </main>
  )
}

export default App