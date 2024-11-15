import React from 'react'
import { PrevButton, NextButton, usePrevNextButtons } from './SliderButtons'
import useEmblaCarousel from 'embla-carousel-react'

const Slider = ({ slides, options, openModal }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="slider">
      <div className="slider__viewport" ref={emblaRef}>
        <div className="slider__container">
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="slide__wrap">
                <div
                  className="slide__excerpt slide-text"
                  dangerouslySetInnerHTML={{ __html: slide.excerpt }}
                ></div>
                <div
                  className="slide__view-more"
                  onClick={() => openModal(slide)}
                >
                  Смотреть больше
                </div>
                <div className="slide__author review-author">
                  <img src={slide.photo} alt="Очень важная История" />
                  {slide.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider__controls">
        <div className="slider__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default Slider
