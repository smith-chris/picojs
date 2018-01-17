import React from 'react'
import styles from './Slider.sass'
import Image from 'components/Image/Image'
import { unit } from 'styles/styleguide'

type Props = {
  className?: string,
  value: number,
  onChange: (newValue: number) => void
}

const Slider = (props: Props) => {
  let {className, value, onChange} = props
  return (
    <span className={[styles.Slider, className].join(' ')}>
      <Image 
        asset='sliderArrow' 
        className={styles.arrow}
        style={{
          left: `${value * unit * 8}px`
        }}
      />
      <Image asset='slider' className={styles.slider}/>
      <input 
        className={styles.range}
        type='range' 
        value={value} 
        min={0} 
        max={3} 
        onChange={(e) => { onChange(parseInt(e.target.value, 0)) }}
      />
    </span>
  )
}

export default Slider