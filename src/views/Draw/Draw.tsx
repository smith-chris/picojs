import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Draw.sass'
import { unit, palette } from 'styles/styleguide'
import Palette from './components/Palette'
import Slider from 'components/Slider/Slider'
import Image from 'components/Image/Image'
import Canvas from './components/Canvas'
import MainLayout from 'components/Layouts/Main'
import { drawActions } from 'store/draw'

type Props = StateProps & ActionProps

class Draw extends Component<Props> {
  render() {
    let {
      selectBrushSize,
      brushSize,
      selectSelectionSize,
      selectionSize,
      colorIndex
    } = this.props

    return (
      <MainLayout header={<Link to='/code'>Go to Code</Link>}>
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
              onChange={selectBrushSize}
              value={brushSize}
            />
            </div>
            <div className={styles.inputGroup}>
              <Image asset='selectionIcon'/>
              <Slider
                className={styles.slider}              
                onChange={selectSelectionSize}
                value={selectionSize}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
}

type StateProps = StoreState['draw']
const mapStateToProps = (state: StoreState): StateProps => {
  return state.draw
}

type ActionProps = typeof drawActions
const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
  return bindActionCreators(drawActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Draw)
