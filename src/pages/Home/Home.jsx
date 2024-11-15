import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styles from './Home.module.scss'
import videoRight from '../../assets/video/Page-0.webm'

const Home = ({ setDifficulty }) => {
  const [openHomeModal, setOpenHomeModal] = useState(false)
  const [srcVideo, setSrcVideo] = useState(videoRight)

  useEffect(() => {
    setOpenHomeModal(false)
  }, [openHomeModal])

  const videoPlay = () => {
    document.querySelector(`.${styles.videoLeft} video`).play()
  }

  const videoStop = () => {
    document.querySelector(`.${styles.videoLeft} video`).pause()
    document.querySelector(`.${styles.videoLeft} video`).currentTime = 0
  }

  return (
    <div className="main-wrap main-wrap__dark home-wrap">
      <div className={styles.video + ' ' + styles.videoLeft}>
        <video muted loop key={srcVideo + 'l'}>
          <source src={srcVideo} type="video/webm" />
        </video>
      </div>
      <div className={styles.video + ' ' + styles.videoRight}>
        <video autoPlay muted loop key={srcVideo + 'd'}>
          <source src={srcVideo} type="video/webm" />
        </video>
      </div>

      <Header
        showDifficulty={false}
        difficulty={{
          title: 'без ограничений',
          value: 'not-choise',
          description: '',
        }}
        setDifficulty={setDifficulty}
        openHomeModal={openHomeModal}
        link={'about'}
      />

      <div className={`content ${styles.content}`}>
        <h1 className={styles.title}>
          очень важная
          <br />
          <span>Иcтория</span>
        </h1>
        <div className={styles.description}>
          Мир для меня выглядит иначе,
          <br className={styles.mb} /> ведь мои возможности здоровья
          <br className={styles.mb} /> ограничены.
          Пойдём&nbsp;со&nbsp;мной&nbsp;—
          <br /> я&nbsp;расскажу,
          <br className={styles.mb} /> как это чувствуется.
        </div>
        <div
          className={styles.read}
          onClick={() => {
            setOpenHomeModal(true)
          }}
          onMouseEnter={videoPlay}
          onMouseLeave={videoStop}
          aria-haspopup="menu"
        >
          <svg
            width="364"
            height="79"
            viewBox="0 0 364 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M364 39.7296C364 61.0686 308.13 84.8068 202.316 77.7233C101.8 77.7233 0 61.0686 0 39.7296C0 18.3906 62.8609 0.447974 163.377 0.447974C275.963 -3.41601 364 18.3906 364 39.7296Z"
              fill="white"
            />
          </svg>
          Читать
        </div>
      </div>
    </div>
  )
}

export default Home
