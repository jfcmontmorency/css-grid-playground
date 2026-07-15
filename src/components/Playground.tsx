import { gridPresets } from '@/state/presets'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef, useState } from 'react'
import { CodeBlock } from './CodeBlock'
import { GeneralActionsToolbar } from './GeneralActionsToolbar'
import styles from './Playground.module.scss'
import { generateGrids, generateGridsHtmlCode } from './grid/grid-generators'
import AsStyled from './primitives/AsStyled'

type PlaygroundProps = {
  children?: never
} & ComponentPropsWithoutRef<'div'>

export default function Playground({ className, ...props }: PlaygroundProps) {
  const [presetIndex, setPresetIndex] = useState(0)
  const currentPreset = gridPresets[presetIndex]
  const state = currentPreset.createState()
  const gridElements = generateGrids(state)
  const code = generateGridsHtmlCode(state)
  const presetTitle = presetIndex > 0 ? currentPreset.name : undefined
  const presetDescription = presetIndex > 0 ? currentPreset.description : undefined
  const hasProse = presetTitle || presetDescription

  return (
    <div className={cn(styles.editor, className)} {...props}>
      <div className={styles.editorBody}>
        <section className={styles.result}>
          {hasProse && (
            <section>
              {presetTitle && <h2 className={styles.resultTitle}>{presetTitle}</h2>}
              {presetDescription && <div className={styles.resultDescription}>{presetDescription}</div>}
            </section>
          )}
          <div className={styles.resultBody}>
            <AsStyled css={state.wrapperStyles}>{gridElements}</AsStyled>
          </div>
        </section>
        <GeneralActionsToolbar presetIndex={presetIndex} onPresetChange={setPresetIndex} />
        <CodeBlock code={code} />
      </div>
    </div>
  )
}
