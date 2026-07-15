import copyIcon from '@/assets/copy.svg'
import { cn } from '@/utils'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import { useRef } from 'react'
import styles from './CodeBlock.module.scss'

type CodeBlockProps = {
  code: string
}

export function CodeBlock({ code }: CodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null)

  const handleCopyButtonClick = () => {
    if (!codeRef.current) {
      return
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeRef.current.innerText)
    }
    const selection = window.getSelection()
    if (!selection) {
      return
    }
    selection.selectAllChildren(codeRef.current)
  }

  const highlighted = Prism.highlight(code, Prism.languages.markup, 'markup')

  return (
    <div className={styles.codeBlock}>
      <div className={styles.toolbar}>
        <span className={styles.title}>Code</span>
        <button type="button" title="Copier le code" onClick={handleCopyButtonClick}>
          <img src={copyIcon} alt="Copier" />
        </button>
      </div>
      <pre className={cn('source-code', styles.pre)} ref={codeRef}>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Prism.highlight escapes the source text itself, it only adds <span> tokens around it */}
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  )
}
