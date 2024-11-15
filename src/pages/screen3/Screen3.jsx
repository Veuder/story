import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Screen3.module.scss'
import video from '../../assets/video/Page-3.webm'
import videoD from '../../assets/video/Page-3a.webm'
import sound from '../../assets/sounds/sound-screen-1.mp3'
import { ReactComponent as Sound } from '../../assets/images/sound.svg'

const Screen3 = ({ difficulty, setDifficulty, setKey }) => {
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
            <div className={styles.videoBlock}>
              <video autoPlay muted loop key={srcVideo}>
                <source src={srcVideo} type="video/webm" />
              </video>
            </div>
            <div className={`dyslexia-text ${styles.text} text-position-1`}>
              <p>
                Я слышу вопли панелек. Нет, это не гул ветра и не скрип ржавых
                подъездных дверей. Вопят не они сами, вопят те, кто внутри.
                Особенно летом. Летом я чувствую, как все цветёт, горячее солнце
                дотрагивается до моей кожи, и я тоже как будто живу.
              </p>
              <p>
                И я ощущаю, как узникам панельных коробок тесно и жарко.
                Они отворяют окна, раскрывают форточки, выползают на балконы.
                И тогда я слышу, как они умеют кричать. Смачно браниться,
                визжать и рыдать.
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
        linkLeft={{ text: 'Назад', link: '/screen-2' }}
        linkRight={{ text: 'Дальше', link: '/screen-4' }}
        currentStep={3}
        maxStep={7}
      />
    </div>
  )
}

export default Screen3
