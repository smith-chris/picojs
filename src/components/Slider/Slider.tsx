import React from 'react'
import styles from './Slider.sass'
import Image from 'components/Image/Image'

type Props = {
  className?: string
}

const Slider = (props: Props) => {
  let {className} = props
  return (
    <span className={[styles.Slider, className].join(' ')}>
      <Image asset='sliderArrow' className={styles.arrow}/>
      <Image asset='slider' className={styles.slider}/>
    </span>
  )
}

export default Slider