import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Screen6.module.scss'
import video from '../../assets/video/Page-6_v1.webm'
import videoD from '../../assets/video/Page-6a_v1.webm'
import sound from '../../assets/sounds/sound-screen-1.mp3'
import { ReactComponent as Sound } from '../../assets/images/sound.svg'

const Screen6 = ({ difficulty, setDifficulty, setKey }) => {
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
            <div className={styles.videoBlock}>
              <video autoPlay muted loop key={srcVideo}>
                <source src={srcVideo} type="video/webm" />
              </video>
            </div>
            <div className={`dyslexia-text ${styles.text} text-position-1`}>
              <p>
                Лес встречает меня шелестом листвы и запахом хвои, таким
                отличным от удушающего смога города. Здесь нет панельки, нет
                криков и плача из её окон-ртов. Только тихий шёпот ветра в
                кронах деревьев.
              </p>
              <p>
                Я там, где шум деревьев тише, — это поляна. Чувствую,
                как солнечные лучи ложатся на мои колени. Впервые за долгое
                время я ощущаю, как мои лёгкие наполняются чистым воздухом.
              </p>
              <p>
                Здесь, среди деревьев и травы, оковы ощущаются легче. Здесь
                нет гула серых стен, что давит на плечи. Нет запаха сырости
                и плесени. Только свежесть и жизнь.
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
        linkLeft={{ text: 'Назад', link: '/screen-5' }}
        linkRight={{ text: 'Дальше', link: '/screen-7' }}
        currentStep={6}
        maxStep={7}
      />
    </div>
  )
}

export default Screen6
