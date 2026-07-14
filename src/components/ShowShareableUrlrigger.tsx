import linkIcon from '@/assets/link.svg'
import { usePlaygroundStateAsUrl } from '@/state/usePlaygroundStore'
import { cn } from '@/utils'
import { useRef } from 'react'

export function ShowShareableUrlrigger() {
  const shareableUrl = usePlaygroundStateAsUrl()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleOpenDialog = () => {
    if (!dialogRef.current) {
      return
    }
    if (dialogRef.current.open) {
      dialogRef.current.close()
    } else {
      dialogRef.current.showModal()
    }
  }

  return (
    <>
      <dialog className={cn('dialog')} ref={dialogRef}>
        <form method="dialog">
          <button type="submit">Fermer</button>
        </form>
        <section className="wrap-text">
          <p>URL de partage :</p>
          <a href={shareableUrl} target="_blank" rel="noreferrer">
            {shareableUrl}
          </a>
        </section>
      </dialog>
      <button type="button" title="Obtenir l'URL de partage" onClick={handleOpenDialog}>
        <img src={linkIcon} alt="Lien permanent" />
        <span className="sm-hidden">Partager</span>
      </button>
    </>
  )
}
