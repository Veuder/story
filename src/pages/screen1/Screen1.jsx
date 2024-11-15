import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import useSound from 'use-sound'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Screen1.module.scss'
import video from '../../assets/video/Page-1.webm'
import videoD from '../../assets/video/Page-1_a.webm'
import sound from '../../assets/sounds/sound-screen-1.mp3'
import { ReactComponent as Sound } from '../../assets/images/sound.svg'

const Screen1 = ({ difficulty, setDifficulty, setKey }) => {
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
  }, [difficulty, play, stop])
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
                <span className={`${styles.first} daltonizm-color`}>М</span>
                ожет, в следующей жизни я увижу больше?
              </p>
              <p>
                Звуки панельки меня не отпускают. И никогда не отпустят. Разве
                что взять нож, не буквально, конечно, и перерезать пуповину.{' '}
              </p>
              <p>
                Что тут держит? На этих улицах, в этих домах невозможно дышать.
                Можно свободно вздохнуть, лишь выехав в лес, но и леса скоро
                не станет. Шуршащие угольки да першащий смог в горле.
                Бесконечные глыбы, я их не вижу, но чувствую за плечами.
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
        linkLeft={{ text: 'Назад', link: '' }}
        linkRight={{ text: 'Дальше', link: '/screen-2' }}
        currentStep={1}
        maxStep={7}
      />
    </div>
  )
}

export default Screen1
