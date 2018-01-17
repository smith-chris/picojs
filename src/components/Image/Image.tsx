import React from 'react'
import styles from './Image.sass'
import { unit } from 'styles/styleguide'
import sliderArrow, { ImageAsset } from 'assets/sliderArrow.png'
import slider from 'assets/slider.png'

type Assets = {
  [key: string]: ImageAsset
}

let assets: Assets = {
  sliderArrow,
  slider
}

type Props = {
  className?: string,
  asset: string
}

const Image = (props: Props) => {
  let {className, asset} = props
  let image = assets[asset]

  return (
    <img 
      className={[styles.Image, className].join(' ')}
      width={`${image.width * unit}px`}
      height={`${image.height * unit}px`}
      src={image.src}
    />
  )
}

export default Image