import { useState, useEffect } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined/Close'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next images" />,
  prevArrow: <ArrowLeft aria-label="previous images" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
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

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)

  }, [])

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
        <S.Close role="button" arial-label="close modal">
          <Close
            size={40}
            aria-label="Close modal"
            onClick={() => setIsOpen(false)}
          />
        </S.Close>
        <S.Content>
          <Slider settings={modalSettings}>
            {items.map((item, index) => (
              <img
                key={`
                gallery-${index}`}
                src={item.src}
                alt={item.label}
              />
            ))}
          </Slider>

          </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
