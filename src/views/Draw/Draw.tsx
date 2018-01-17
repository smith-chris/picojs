import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Draw.sass'
import Palette from './components/Palette'
import Slider from 'components/Slider/Slider'

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
      selectionSize
    } = this.props
    return (
      <div className={styles.draw}>
        <div className={styles.header} />
        <div className={styles.content}>
          <div className={styles.canvas} />
          <div>
            <Palette />
            <div className={styles.inputGroup}>
              <Slider
                onChange={selectBrush}
                value={brushSize}
              />
            </div>
            <div className={styles.inputGroup}>
              <Slider
                onChange={selectSelection}
                value={selectionSize}
              />
            </div>
          </div>
        </div>
        <div className={styles.footer} />
      </div>
    )
  }
}
type StateProps = {
  brushSize: number;
  selectionSize: number;
}
const mapStateToProps = (state: State): StateProps => {
  return {
    brushSize: state.draw.brushSize,
    selectionSize: state.draw.selectionSize
  }
}

type DispatchProps = {
  selectBrush: (size: number) => void;
  selectSelection: (size: number) => void;
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
