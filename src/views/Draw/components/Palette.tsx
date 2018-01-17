import React from 'react'
import styles from './Palette.sass'
import { palette } from 'styles/styleguide'
import { connect } from 'react-redux'

import {
  selectColor
} from 'store/draw'

type Props = StateProps & DispatchProps

const Palette = (props: Props) => {
  let {selectedIndex, selectColorIndex} = props
  return (
    <div className={styles.Palette}>
      {palette.map((hex, i) => (
        <span
          key={hex}
          className={[
            styles.PaletteElement,
            i === selectedIndex ? styles.PaletteElementActive : null
          ].join(' ')}
          style={{ background: hex }}
          onClick={() => {selectColorIndex(i)}}
        />
      ))}
    </div>
  )
}

type StateProps = {
  selectedIndex: number
}
const mapStateToProps = (state: State): StateProps => {
  return {
    selectedIndex: state.draw.colorIndex
  }
}

type DispatchProps = {
  selectColorIndex: (index: number) => void
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    selectColorIndex: (index: number) => dispatch(selectColor(index))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Palette)
