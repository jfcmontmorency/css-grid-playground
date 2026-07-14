import styles from './GeneralActionsToolbar.module.scss';
import { PresetSelector } from './PresetSelector';
import { ShowCodeTrigger } from './ShowCodeTrigger';

export function GeneralActionsToolbar({
  editorsVisible,
  setEditorsVisible,
}: { editorsVisible: boolean; setEditorsVisible: (visible: boolean) => void }) {
  return (
    <div className={styles.panel} data-noselect>
      <div className={styles.controlGroup}>
        <PresetSelector />
        <div className={styles.controlGroupNested}>
          <ShowCodeTrigger />
        </div>
      </div>
    </div>
  )
}
