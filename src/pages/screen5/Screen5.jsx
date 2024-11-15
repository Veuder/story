import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Screen5.module.scss'
import sound from '../../assets/sounds/sound-screen-1.mp3'
import { ReactComponent as Sound } from '../../assets/images/sound.svg'
import { ReactComponent as OrageBorder } from '../../assets/images/orange-border.svg'
import imgLeft1 from '../../assets/images/Screen5/screen-5-img-left-1.png'
import imgLeft2 from '../../assets/images/Screen5/screen-5-img-left-2.png'
import imgRight1 from '../../assets/images/Screen5/screen-5-img-right-1.png'
import imgRight2 from '../../assets/images/Screen5/screen-5-img-right-2.png'

const Screen5 = ({ difficulty, setDifficulty, setKey }) => {
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
    <div className="main-wrap main-wrap__white">
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
                Звуки моего прошлого и будущего всегда со мной. Никто не поймёт,
                <br /> через что я прохожу.
                <br />
                <span
                  className={`${styles.orangeBorder} orange-border daltonizm-color`}
                >
                  Всем все равно, <OrageBorder />
                </span>{' '}
                ведь это не их проблема. Мама учила меня не выносить
                сор из избы, притворяться, что все в порядке.
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
        linkLeft={{ text: 'Назад', link: '/screen-4' }}
        linkRight={{ text: 'Дальше', link: '/screen-6' }}
        currentStep={5}
        maxStep={7}
      />
    </div>
  )
}

export default Screen5
