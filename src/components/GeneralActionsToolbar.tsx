import styles from './GeneralActionsToolbar.module.scss'
import { PresetSelector } from './PresetSelector'

type GeneralActionsToolbarProps = {
  presetIndex: number
  onPresetChange: (presetIndex: number) => void
}

export function GeneralActionsToolbar({ presetIndex, onPresetChange }: GeneralActionsToolbarProps) {
  return (
    <div className={styles.panel} data-noselect>
      <div className={styles.controlGroup}>
        <PresetSelector presetIndex={presetIndex} onChange={onPresetChange} />
      </div>
    </div>
  )
}
