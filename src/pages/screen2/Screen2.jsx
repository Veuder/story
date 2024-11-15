import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Screen2.module.scss'
import sound from '../../assets/sounds/sound-screen-1.mp3'
import { ReactComponent as Sound } from '../../assets/images/sound.svg'
import { ReactComponent as OrageBorder } from '../../assets/images/orange-border.svg'
import imgLeft1 from '../../assets/images/Screen2/screen-2-img-left-1.png'
import imgLeft2 from '../../assets/images/Screen2/screen-2-img-left-2.png'
import imgRight1 from '../../assets/images/Screen2/screen-2-img-right-1.png'
import imgRight2 from '../../assets/images/Screen2/screen-2-img-right-2.png'

const Screen2 = ({ difficulty, setDifficulty, setKey }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' })
  const [play, { stop, pause }] = useSound(sound, {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  })

  useEffect(() => {
    difficulty.value === 'visual' ? play() : stop()
  }, [difficulty])
  useEffect(() => {
    return () => {
      stop()
    }
  }, [stop])
  return (
    <div className="main-wrap main-wrap__dark">
      {isMobile ? (
        <Header
          showDifficulty={true}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          link={''}
          isModalStory={true}
          setKey={setKey}
        />
      ) : (
        <Header
          showDifficulty={true}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          link={'about'}
          isModalStory={true}
          setKey={setKey}
        />
      )}
      <div className="content">
        <div className="container">
          <div className={styles.wrap}>
            <div className={`dyslexia-text ${styles.text} text-position-2`}>
              <p>
                Сейчас я прячу зародыши любой мечты. <br />
                <span className="orange-border daltonizm-color">
                  Глубоко-глубоко. <OrageBorder />
                </span>{' '}
                <br className={styles.mb} />
                В карманы, на дно рюкзаков и сумок, между строчек в тетрадках.
                Прячь, говорила мама, а то украдут. Иногда я выношу свои мечты
                погулять на улицу, но снаружи опаснее.
              </p>
              <img
                src={imgLeft1}
                className={styles.img + ' ' + styles.img__left_1}
                alt="Очень важная История"
              />
              <img
                src={imgLeft2}
                className={styles.img + ' ' + styles.img__left_2}
                alt="Очень важная История"
              />
              <img
                src={imgRight1}
                className={styles.img + ' ' + styles.img__right_1}
                alt="Очень важная История"
              />
              <img
                src={imgRight2}
                className={styles.img + ' ' + styles.img__right_2}
                alt="Очень важная История"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="sound"
        onClick={() => {
          if (isPlaying) {
            pause()
          } else {
            play()
          }
          setIsPlaying(!isPlaying)
        }}
      >
        <Sound />
      </div>
      <Footer
        linkLeft={{ text: 'Назад', link: '/screen-1' }}
        linkRight={{ text: 'Дальше', link: '/screen-3' }}
        currentStep={2}
        maxStep={7}
      />
    </div>
  )
}

export default Screen2
