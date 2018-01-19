import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Draw.sass'
import { unit, palette } from 'styles/styleguide'
import Palette from './components/Palette'
import Slider from 'components/Slider/Slider'
import Image from 'components/Image/Image'
import Canvas from './components/Canvas'

import {
  selectBrushSize,
  selectSelectionSize
} from 'store/draw'

type Props = StateProps & DispatchProps

class Draw extends Component<Props> {
  state = {
    sliderValue: 1
  }

  handleChange = (newValue: number) => {
    this.setState({
      sliderValue: newValue
    })
  }

  render() {
    let {
      selectBrush,
      brushSize,
      selectSelection,
      selectionSize,
      colorIndex
    } = this.props
    return (
      <div className={styles.Draw}>
        <Canvas/>
        <div>
          <Palette/>
          <div className={styles.inputGroup}>
          <span 
            className={styles.brushIndicator}
            style={{background: colorIndex === 0 ? palette[6] : null}}  
          >
            <div 
              style={{
                width: brushSize * unit,
                height: brushSize * unit,
                background: palette[colorIndex]
              }}
            />
          </span>
          <Slider
            className={styles.slider}
            onChange={selectBrush}
            value={brushSize}
          />
          </div>
          <div className={styles.inputGroup}>
            <Image asset='selectionIcon'/>
            <Slider
              className={styles.slider}              
              onChange={selectSelection}
              value={selectionSize}
            />
          </div>
        </div>
      </div>
    )
  }
}
type StateProps = StoreState['draw']
const mapStateToProps = (state: StoreState): StateProps => {
  return state.draw
}

type DispatchProps = {
  selectBrush: (size: number) => void
  selectSelection: (size: number) => void
}
const mapDispatchToProps = (
  dispatch: Dispatch
): DispatchProps => {
  return {
    selectBrush: (size: number) =>
      dispatch(selectBrushSize(size)),
    selectSelection: (size: number) =>
      dispatch(selectSelectionSize(size))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Draw)
