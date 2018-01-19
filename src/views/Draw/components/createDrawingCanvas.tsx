import { Sprite, Application, Graphics, interaction } from 'pixi.js'
import slider from 'assets/slider.png'
import { unit } from 'styles/styleguide'
import store from 'store/store'
import { palette } from 'styles/styleguide'

type InteractionEvent = interaction.InteractionEvent
type Bounds = {
  left: number,
  right: number,
  top: number,
  bottom: number
}

const toHexNumber = (hex: string): number => {
  return parseInt(`0x${hex.slice(1)}`, 16)
}

const createDrawingCanvas = (size = 16) => {
  const app = new Application({
    width: size,
    height: size
  })

  let touchableArea = new Sprite()
  touchableArea.width = size
  touchableArea.height = size
  touchableArea.interactive = true

  let positions: string[] = []
  let isPointerPressed = false
  let currentColor = ''

  touchableArea.on('pointerdown', (event: InteractionEvent) => {
    positions = []
    let position = event.data.global
    let color = palette[store.getState().draw.colorIndex]
    if (color !== currentColor) {  
      drawing.beginFill(toHexNumber(color))
      currentColor = color
    }
    draw(position.x, position.y)
    isPointerPressed = true
  })
  touchableArea.on('pointerup', () => {
    isPointerPressed = false
  })
  touchableArea.on('pointermove', (event: InteractionEvent) => {
    if (isPointerPressed) {
      let position = event.data.global
      draw(position.x, position.y)
    }
  })

  let drawing = new Graphics()

  let isOutOfBunds = (a: Bounds, b: Bounds) => {
    if ( a.right <= b.left 
      || a.left >= b.right 
      || a.bottom <= b.top 
      || a.top >= b.bottom) {
      return
    }
  }

  let draw = (x: number, y: number) => {
    let bounds = {
      left: 0,
      top: 0,
      right: size,
      bottom: size
    }
    let brushSize = Math.round(store.getState().draw.brushSize)
    let offset = brushSize / 2
    let left = Math.round(x - offset)
    let top = Math.round(y - offset)
    let right = left + brushSize
    let bottom = top + brushSize
    if (isOutOfBunds({left, top, right, bottom}, bounds)) {
      // If brush is completely outside
      return
    }
    left = Math.max(left, bounds.left)
    right = Math.min(right, bounds.right)
    top = Math.max(top, bounds.top)
    bottom = Math.min(bottom, bounds.bottom)
    let id = left + 'x' + top
    if (positions.indexOf(id) === -1) {
      drawing.drawRect(
        left, 
        top, 
        right - left, 
        bottom - top
      )
      positions.push(id)
    }
  }

  app.stage.addChild(touchableArea)
  app.stage.addChild(drawing)

  return app
}

export default createDrawingCanvas
