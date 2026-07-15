import { ComponentPropsWithoutRef } from 'react'
import AsStyled from '../primitives/AsStyled'
import styles from './GridItem.module.scss'

type GridItemProps = {
  children?: string
  css?: string
  className: string
} & ComponentPropsWithoutRef<'div'>

export default function GridItem({ className, children, css, ...props }: GridItemProps) {
  const text = String(children || className)

  return (
    <AsStyled className={className} css={css} {...props}>
      <div className={styles.content}>{text}</div>
    </AsStyled>
  )
}
