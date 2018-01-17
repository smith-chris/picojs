import React, { Component } from 'react'
import styles from './Draw.sass'
import Palette from './components/Palette'
import Slider from 'components/Slider/Slider'

class Draw extends Component {
  state = {
    sliderValue: 0
  }

  handleChange = (newValue: number) => {
    this.setState({
      sliderValue: newValue
    })
  }

  render () {
    return (
      <div className={styles.draw}>
        <div className={styles.header}/>
        <div className={styles.content}>
          <div className={styles.canvas}/>
          <div>
            <Palette/>
            <Slider 
              onChange={this.handleChange} 
              value={this.state.sliderValue}
            />
          </div>
        </div>
        <div className={styles.footer}/>
      </div>
    )
  }
}

export default Draw
