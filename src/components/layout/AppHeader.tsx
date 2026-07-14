import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import styles from './AppHeader.module.scss'

type AppHeaderProps = {
  children?: never
} & ComponentPropsWithoutRef<'header'>

export default function AppHeader({ className, ...props }: AppHeaderProps) {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <a className={styles.title} href={import.meta.env.BASE_URL}>
        <h1>CSS Grid</h1>
      </a>
    </header>
  )
}
