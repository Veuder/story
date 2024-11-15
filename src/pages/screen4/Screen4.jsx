import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Screen4.module.scss'
import video from '../../assets/video/Page-4.webm'
import videoD from '../../assets/video/Page-4_a.webm'
import sound from '../../assets/sounds/sound-screen-1.mp3'
import { ReactComponent as Sound } from '../../assets/images/sound.svg'

const Screen4 = ({ difficulty, setDifficulty, setKey }) => {
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
                Я сижу на скамейке около панельки и слышу звуки из распахнутых
                окон. Мне кажется, что она насмехается надо мной. Крики из окон
                первого этажа звучат как пьяный смех, он дезориентирует меня.
                Чувствую себя маленькой напротив этой огромной шумной скалы
                из бетона. Пожалуйста, хватит.
              </p>
              <p>
                Я тоже когда‑то жила на первом этаже, погруженный в этот крик.
                Потом меня перевезли в новостройку. Здесь тоже шумно: дети
                бегают этажом выше, лает собака, за стенкой гремит музыка.
                Раньше, когда я с трудом мылась в ванной, мне казалось,
                что я слышу вой какой‑то девочки. Когда я пыталась готовить
                на кухне, раздавались звуки разбивающейся посуды и глухие удары.
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
        linkLeft={{ text: 'Назад', link: '/screen-3' }}
        linkRight={{ text: 'Дальше', link: '/screen-5' }}
        currentStep={4}
        maxStep={7}
      />
    </div>
  )
}

export default Screen4
