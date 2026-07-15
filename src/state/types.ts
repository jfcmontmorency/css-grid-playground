export type GridContainerVirtualDom = {
  className: string
  style: string
  outputStyle?: string
  children: GridItemVirtualDom[]
}

export type GridItemVirtualDom = {
  className: string
  style: string
  outputStyle?: string
  innerText: string
}

export type GridItemState = {
  styles?: string
  text?: string
}

export type GridContainerState = {
  styles?: string
  items: GridItemState[]
}

export type PlaygroundState = {
  /**
   * Global styles for the wrapper of grid containers
   */
  wrapperStyles: string
  /**
   * Global styles for all grid containers
   */
  gridStyles: string
  /**
   * Global styles for all grid items
   */
  gridItemStyles: string
  /**
   * Grid containers and their children with styles and other data
   */
  grids: GridContainerState[]
}
