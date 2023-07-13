import {useState} from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next images" />,
  prevArrow: <ArrowLeft aria-label="previous images" />
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <img
          role="button"
          key={`
        thumb-${index}`}
          src={item.src}
          alt={item.label}
          onClick={() => setIsOpen(true)}
        />
      ))}
    </Slider>
    <S.Modal isOpen={isOpen} aria-hidden={!isOpen}>

    </S.Modal>
  </S.Wrapper>
  )

}

export default Gallery
