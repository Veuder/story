import { Routes, Route } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Home from './pages/Home/Home'
import Screen1 from './pages/screen1/Screen1'
import Screen2 from './pages/screen2/Screen2'
import Screen3 from './pages/screen3/Screen3'
import Screen4 from './pages/screen4/Screen4'
import Screen5 from './pages/screen5/Screen5'
import Screen6 from './pages/screen6/Screen6'
import Screen7 from './pages/screen7/Screen7'
import About from './pages/about/About'
import { dyslexia } from './assets/script/dyslexia'
import './App.scss'
import Reviews from './pages/reviews/Reviews'

function App() {
  const [difficulty, setDifficulty] = useState({
    title: 'не выбрано',
    value: 'not-choise',
    description: '',
  })
  const [key, setKey] = useState(false) // Возврат текста после остановки дислексии
  let mainContent = useRef('')
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' })
  useEffect(() => {
    mainContent.current.classList = `main-content ${difficulty.value}`

    if (difficulty.value === 'mobility' && isMobile) {
      let startY
      let startScrollTop
      const scrollSpeed = 0.2 // Чем меньше значение, тем медленнее прокрутка
      function touchstart(e) {
        startY = e.touches[0].pageY
        startScrollTop =
          window.pageYOffset || document.documentElement.scrollTop
      }
      function touchmove(e) {
        e.preventDefault()
        const deltaY = e.touches[0].pageY - startY
        const newScrollTop = startScrollTop - deltaY * scrollSpeed
        window.scrollTo({
          top: newScrollTop,
          behavior: 'smooth',
        })
      }
      document.addEventListener('touchstart', touchstart)
      document.addEventListener('touchmove', touchmove, { passive: false })
      return () => {
        document.removeEventListener('touchstart', touchstart, false)
        document.removeEventListener('touchmove', touchmove, false)
      }
    }
    if (difficulty.value === 'mobility' && !isMobile) {
      const cursor = document.getElementById('cursor')
      let mouseX = 0,
        mouseY = 0
      let posX = 0,
        posY = 0
      const speed = 0.03

      function mouseMove(event) {
        mouseX = event.clientX
        mouseY = event.clientY
      }

      if (cursor) {
        cursor.classList.add('active')
        document.addEventListener('mousemove', mouseMove, false)

        function animateCursor() {
          posX += (mouseX - posX) * speed
          posY += (mouseY - posY) * speed
          cursor.style.transform = `translate(${posX}px, ${posY}px)`
          requestAnimationFrame(animateCursor)
        }
        animateCursor()
      }
      return () => {
        document.removeEventListener('mousemove', mouseMove, false)
        cursor?.classList.remove('active')
      }
    } else if (difficulty.value === 'dyslexia') {
      dyslexia()
      return clearAllIntervals
    }

    if (difficulty.value !== 'dyslexia') {
      // setKey((prev) => !prev)
    }

    function clearAllIntervals() {
      const interval_id = window.setInterval(function () {},
      Number.MAX_SAFE_INTEGER)
      for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i)
      }
    }
  }, [difficulty, isMobile])

  return (
    <>
      <main className="main-content" ref={mainContent} key={key}>
        <Routes>
          <Route
            path="/"
            element={
              <Home difficulty={difficulty} setDifficulty={setDifficulty} />
            }
          />
          <Route
            path="/screen-1"
            element={
              <Screen1
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/screen-2"
            element={
              <Screen2
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/screen-3"
            element={
              <Screen3
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/screen-4"
            element={
              <Screen4
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/screen-5"
            element={
              <Screen5
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/screen-6"
            element={
              <Screen6
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/screen-7"
            element={
              <Screen7
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
          <Route
            path="/reviews"
            element={
              <Reviews
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setKey={setKey}
              />
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App
