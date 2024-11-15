import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import './About.scss'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Img from '../../assets/images/about/pic.png'
import numberImg1 from '../../assets/images/about/about-number-1.png'
import numberImg2 from '../../assets/images/about/about-number-2.png'
import numberImg3 from '../../assets/images/about/about-number-3.png'
import numberImg4 from '../../assets/images/about/about-number-4.png'
const About = ({ difficulty, setDifficulty, setKey }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' })
  const isSMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const numbers = [
    {
      title: '16,7 млн',
      text: 'людей с ограничениями <br/>зрения в России',
      img: numberImg1,
    },
    {
      title: '13 млн',
      text: 'людей с ограниченной <br/>мобильностью',
      img: numberImg2,
    },
    {
      title: '28 млн',
      text: 'людей с симптомами <br/>дислексии в Росии',
      img: numberImg3,
    },
    {
      title: '42 млн',
      text: 'людей с симптомами <br/>дальтонизма в России',
      img: numberImg4,
    },
  ]

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
          <div className="about">
            <div className="about__text-block">
              <div className="about__text info-text">
                <div className="about__title info-text__title">О проекте</div>
                <div className="about__description info-text__description">
                  <p>
                    Людям с&nbsp;особыми потребностями сложно адаптироваться
                    в&nbsp;веб-&#8288;пространстве. Этот&nbsp;проект призван
                    показать, что&nbsp;они&nbsp;ощущают и&nbsp;как&nbsp;цифровая
                    среда выглядит для&nbsp;них.
                  </p>
                  <p>
                    Удобства в&nbsp;цифровой среде важны так&nbsp;же,
                    как&nbsp;и&nbsp;удобства в&nbsp;реальной. Мы&nbsp;верим,
                    что&nbsp;только поняв путь людей с&nbsp;ограниченными
                    возможностями, можно создать более инклюзивный интернет.
                  </p>
                </div>
              </div>
              {!isSMobile && (
                <div className="about-img">
                  <img src={Img} alt="Очень важная История" />
                </div>
              )}
            </div>
            <div className="about-numbers">
              <div className="about-numbers__wrap">
                {numbers.map((item) => (
                  <div className="about-numbers-item" key={item.title}>
                    <div className="about-numbers-item__title">
                      {item.title}
                    </div>
                    <div
                      className="about-numbers-item__text"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></div>
                    <img
                      src={item.img}
                      className="about-numbers-item__img"
                    ></img>
                  </div>
                ))}
              </div>
            </div>
            {isSMobile && (
              <div className="about-img">
                <img src={Img} alt="Очень важная История" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer
        linkLeft={{ text: 'Назад', link: '' }}
        linkRight={{ text: 'Дальше', link: '/reviews' }}
        currentStep={1}
        maxStep={3}
      />
    </div>
  )
}

export default About
