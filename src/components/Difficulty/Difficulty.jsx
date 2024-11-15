import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Difficulty.scss'
import close from '../../assets/images/difficulty/close-modal.png'
import mobileMenuImg1 from '../../assets/images/difficulty/mobile-menu-img-1.png'
import mobileMenuImg2 from '../../assets/images/difficulty/mobile-menu-img-2.png'
import { ReactComponent as Menu } from '../../assets/images/difficulty/menu.svg'
import { ReactComponent as MenuClose } from '../../assets/images/difficulty/menu-close.svg'
import { ReactComponent as MobileRead } from '../../assets/images/difficulty/mobile-read.svg'

import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import logoDark from '../../assets/images/logo-dark.png'
import DifficultyChoise from './DifficultyChoise'

const Difficulty = ({
  difficulty,
  setDifficulty,
  showDifficulty,
  openHomeModal,
  link,
  isModalStory,
  setKey,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [openModal, setOpenModal] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openDescription, setOpenDescription] = useState(false)
  const difficulties = [
    {
      text: 'ограниченная подвижность',
      description:
        'Так люди с ограниченной подвижностью видят интерфейс. Чтобы им было удобнее, важно увеличивать кнопки и другие элементы для облегчения навигации.',
      value: 'mobility',
    },
    {
      text: 'нарушение зрения',
      description:
        'Так люди с ограниченной подвижностью видят интерфейс. Чтобы им было удобнее, важно увеличивать кнопки и другие элементы для облегчения навигации.',
      value: 'visual',
    },
    {
      text: 'дислексия',
      description:
        'Так люди с ограниченной подвижностью видят интерфейс. Чтобы им было удобнее, важно увеличивать кнопки и другие элементы для облегчения навигации.',
      value: 'dyslexia',
    },
    {
      text: 'дальтонизм',
      description:
        'Так люди с ограниченной подвижностью видят интерфейс. Чтобы им было удобнее, важно увеличивать кнопки и другие элементы для облегчения навигации.',
      value: 'daltonizm',
    },
    {
      text: 'без ограничений',
      description: '',
      value: 'not-choise',
    },
  ]
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' })

  useEffect(() => {
    openHomeModal && setOpenModal(true)
  }, [openHomeModal])

  useEffect(() => {
    function closeDescription() {
      setOpenDescription(false)
    }
    document.body.addEventListener('click', closeDescription)

    return () => {
      document.body.removeEventListener('click', closeDescription)
    }
  }, [openDescription])

  useEffect(() => {
    difficulty.value !== 'not-choise' && setOpenMenu(false)
  }, [difficulty])

  const handleClick = (target) => {
    if (location.pathname === '/') {
      navigate('/screen-1', { replace: true })
    }
    setOpenModal(false)
    return {
      title: target.textContent,
      value: target.dataset.value,
      description: target.dataset.description,
    }
  }
  return (
    <>
      {showDifficulty && (
        <DifficultyChoise
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setOpenDescription={setOpenDescription}
          openDescription={openDescription}
          setOpenModal={setOpenModal}
          handleClick={handleClick}
          setKey={setKey}
        />
      )}

      {isMobile && (
        <div
          className="difficulty-burger daltonizm-color"
          onClick={() => setOpenMenu(true)}
        >
          <Menu />
        </div>
      )}
      {openModal && (
        <div className="difficulty-overlay" onClick={() => setOpenModal(false)}>
          <div
            className="difficulty-modal"
            onClick={(e) => e.stopPropagation()}
            role="menu"
          >
            <div
              className="difficulty-modal__close"
              onClick={() => setOpenModal(false)}
            >
              <img src={close} alt="Очень важная история" />
            </div>
            <div className="difficulty-modal__title">
              Выберите сложность восприятия
            </div>
            <div className="difficulty-modal__description">
              Узнайте, с&nbsp;чем сталкиваются люди с&nbsp;нарушениями зрения,
              подвижности или восприятия. Нажмите кнопку, чтобы&nbsp;выбрать
              ограничение.
            </div>
            <div className="difficulty-modal__btns">
              {difficulties.map((el) => {
                return (
                  <div
                    key={el.value}
                    className="difficulty-btn"
                    data-description={el.description}
                    data-value={el.value}
                    onClick={(e) =>
                      setDifficulty(
                        handleClick(e.target.closest('.difficulty-btn'))
                      )
                    }
                  >
                    <svg
                      width="543"
                      height="80"
                      viewBox="0 0 543 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M542.434 40.8044C542.434 62.4515 423.944 69.4235 271.434 80C121.764 80 0.433594 62.4515 0.433594 40.8044C0.433594 19.1573 107.687 0.986639 257.356 0.986639C413.386 -5.23483 542.434 19.1573 542.434 40.8044Z"
                        fill="#373C3F"
                      />
                    </svg>

                    {el.text}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {openMenu && (
        <div className="menu-overlay">
          <div className={`menu-modal ${isModalStory ? 'dark' : 'white'}`}>
            <div className="container">
              <div className="menu-modal__wrap">
                <div className="menu-modal__header">
                  <Link to="/">
                    <img
                      src={logoDark}
                      className="logo dark"
                      alt="Очень важная История"
                    />
                    <img
                      src={logo}
                      className="logo white"
                      alt="Очень важная История"
                    />
                  </Link>
                  <MenuClose
                    onClick={() => setOpenMenu(false)}
                    className="daltonizm-color"
                  />
                </div>
                <div className="menu-modal__content">
                  {isModalStory ? (
                    <div className="modal-content-story">
                      <Link
                        to={'/about'}
                        className="header__link header__link_about"
                      >
                        О проекте
                      </Link>
                      <DifficultyChoise
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        setOpenDescription={setOpenDescription}
                        openDescription={openDescription}
                        setOpenModal={setOpenModal}
                        handleClick={handleClick}
                        setKey={setKey}
                      />
                    </div>
                  ) : (
                    <div className="modal-content-simple">
                      <div className="modal-content-simple__top">
                        Прочитать историю ещё раз
                        <Link
                          to={'/'}
                          className="modal-content-simple__btn daltonizm-color"
                        >
                          Читать
                          <MobileRead />
                        </Link>
                      </div>
                      <img
                        src={mobileMenuImg1}
                        alt="Очень важная история"
                        className="modal-content-simple__img-1 daltonizm-color"
                      />
                      <img
                        src={mobileMenuImg2}
                        alt="Очень важная история"
                        className="modal-content-simple__img-2 daltonizm-color"
                      />
                    </div>
                  )}
                </div>
                <div className="menu-modal__footer">
                  <div className="share">
                    Рассказать о проекте:
                    <div>
                      <Link to="/" className="social-link daltonizm-color">
                        TG
                      </Link>
                      <Link to="/" className="social-link daltonizm-color">
                        VK
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="cursor" id="cursor"></div>
    </>
  )
}

export default Difficulty
