import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import './Reviews.scss'
import reviews from './data'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Img from '../../assets/images/reviews/pic.png'
import Slider from './Slider'
import { ReactComponent as Close } from '../../assets/images/reviews/close.svg'

const Reviews = ({ difficulty, setDifficulty, setKey }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' })
  const [openReviewModal, setOpenReviewModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState({})
  function openModal(slide) {
    setOpenReviewModal(true)
    setCurrentSlide(slide)
  }
  useEffect(() => {
    setDifficulty({
      title: 'без ограничений',
      value: 'not-choise',
      description: '',
    })
  }, [])
  return (
    <div className="main-wrap main-wrap__white">
      {isMobile ? (
        <Header
          showDifficulty={false}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          link={'read'}
          isModalStory={false}
          setKey={setKey}
        />
      ) : (
        <Header
          showDifficulty={false}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          link={'read'}
          isModalStory={false}
          setKey={setKey}
        />
      )}
      <div className="content">
        <div className="container">
          <div className="reviews">
            <div className="reviews__text-block">
              <div className="reviews__text info-text">
                <div className="reviews__title info-text__title">Отзывы</div>
                <div className="reviews__description info-text__description">
                  <p>
                    Собрали отзывы пользователей с&nbsp;различными
                    ограничениями, чтобы&nbsp;показать их опыт взаимодействия
                    с&nbsp;диджитал-продуктами.
                  </p>
                </div>
              </div>
              <div className="reviews-img">
                <img src={Img} alt="Очень важная История" />
              </div>
            </div>
            <Slider
              slides={reviews}
              options={{ align: 'start' }}
              openModal={openModal}
            />
          </div>
        </div>
      </div>
      {openReviewModal && (
        <div
          className="review-overlay"
          onClick={() => setOpenReviewModal(false)}
        >
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div
              className="review-modal__text slide-text"
              dangerouslySetInnerHTML={{ __html: currentSlide.text }}
            ></div>
            <div className="review-modal__author review-author">
              <img src={currentSlide.photo} alt="Очень важная История" />
              {currentSlide.name}
            </div>
            <div
              className="review-modal__close"
              onClick={() => setOpenReviewModal(false)}
            >
              <Close />
            </div>
          </div>
        </div>
      )}
      <Footer
        linkLeft={{ text: 'Назад', link: '/about' }}
        linkRight={{ text: 'Дальше', link: '/team' }}
        currentStep={2}
        maxStep={3}
      />
    </div>
  )
}

export default Reviews
