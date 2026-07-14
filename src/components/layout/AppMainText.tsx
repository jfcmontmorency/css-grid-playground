import closeIcon from '@/assets/close-2.svg'
import { useState } from 'react'
import styles from './AppMainText.module.scss'

function AppMainText() {
  const [showArticle, setShowArticle] = useState(true)
  const handleDismissArticle = () => {
    setShowArticle(false)
  }
  const mainProps: React.HTMLAttributes<HTMLElement> = {}
  if (!showArticle) {
    mainProps.hidden = true
  }
  return (
    <main className={styles.info} {...mainProps}>
      <article>
        <button className={styles.dismissTrigger} title="Fermer" type="button" onClick={handleDismissArticle}>
          <img src={closeIcon} alt="Fermer" />
        </button>
        Terrain de jeu en ligne pour les grilles CSS où vous pouvez ajouter/supprimer des éléments, modifier les
        propriétés CSS, voir les changements en temps réel, et partager l'état via une URL. Il propose aussi des
        modèles inspirés des exemples de{' '}
        <a href="https://web.dev/learn/css/grid" target="_blank" rel="noreferrer">
          web.dev
        </a>{' '}
        et prend en charge les variables{' '}
        <a href="https://open-props.style/#colors" target="_blank" rel="noreferrer">
          Open Props
        </a>
        .
      </article>
    </main>
  )
}

export default AppMainText
