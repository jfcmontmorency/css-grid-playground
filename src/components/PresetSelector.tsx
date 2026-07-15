import { gridPresets } from '@/state/presets'
import styles from './PresetSelector.module.scss'

type PresetSelectorProps = {
  presetIndex: number
  onChange: (presetIndex: number) => void
}

export function PresetSelector({ presetIndex, onChange }: PresetSelectorProps) {
  return (
    <div className={styles.selectWithButton}>
      <select value={presetIndex} onChange={(e) => onChange(Number(e.target.value))}>
        <optgroup label="Exemples de modèles">
          {gridPresets.map((preset, index) => {
            return (
              <option key={`preset-${index}`} value={index}>
                {preset.name}
              </option>
            )
          })}
        </optgroup>
      </select>
    </div>
  )
}
