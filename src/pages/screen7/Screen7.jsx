import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Screen7.module.scss'
import video from '../../assets/video/Page-7.webm'
import videoD from '../../assets/video/Page-7a.webm'
import sound from '../../assets/sounds/sound-screen-7.mp3'
import { ReactComponent as Sound } from '../../assets/images/sound.svg'

const Screen7 = ({ difficulty, setDifficulty, setKey }) => {
  const [srcVideo, setSrcVideo] = useState(video)
  const [isPlaying, setIsPlaying] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' })
  const [play, { stop, pause }] = useSound(sound, {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  })
  useEffect(() => {
    difficulty.value === 'daltonizm' ? setSrcVideo(videoD) : setSrcVideo(video)
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
          setKey={setKey}
          isModalStory={true}
        />
      ) : (
        <Header
          showDifficulty={true}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          link={'about'}
          setKey={setKey}
          isModalStory={true}
        />
      )}
      <div className="content">
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.videoBlock}>
              <video autoPlay muted loop key={srcVideo}>
                <source src={srcVideo} type="video/webm" />
              </video>
            </div>

            <div className={`dyslexia-text ${styles.text} text-position-2`}>
              <p>
                Я поднимаю глаза туда, где небо. Я знаю, что оно бесконечно и не
                ограничено рамками окон. И на мгновение мне кажется, что я тоже
                могу быть такой же бесконечной и свободной.
              </p>
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
        linkLeft={{ text: 'Назад', link: '/screen-6' }}
        linkRight={{ text: 'Дальше', link: '/about' }}
        currentStep={7}
        maxStep={7}
      />
    </div>
  )
}

export default Screen7
