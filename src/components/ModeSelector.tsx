type TranslationMode = 'app' | 'email' | 'manual'

type ModeSelectorProps = {
  selectedMode: TranslationMode | null
  onSelectMode: (mode: TranslationMode) => void
}

const modes: {
  id: TranslationMode
  label: string
  description: string
}[] = [
  {
    id: 'app',
    label: 'App Mode',
    description: 'UI / Mobile App / Smart Home',
  },
  {
    id: 'email',
    label: 'Email Mode',
    description: 'Support / Business Email',
  },
  {
    id: 'manual',
    label: 'Manual Mode',
    description: 'Manual / FAQ / User Guide',
  },
]

function ModeSelector({ selectedMode, onSelectMode }: ModeSelectorProps) {
  return (
    <section className="mode-selector">
      <div className="mode-selector-header">
        <h2>Select Mode</h2>
        <p>Choose the translation workflow before entering source text.</p>
      </div>

      <div className="mode-options">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            className={
              selectedMode === mode.id
                ? 'mode-option mode-option-active'
                : 'mode-option'
            }
            onClick={() => onSelectMode(mode.id)}
          >
            <strong>{mode.label}</strong>
            <span>{mode.description}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ModeSelector
export type { TranslationMode }