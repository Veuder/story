import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Difficulty from '../Difficulty/Difficulty'
import logo from '../../assets/images/logo.png'
import logoDark from '../../assets/images/logo-dark.png'
import { ReactComponent as HeaderRead } from '../../assets/images/header-read-btn.svg'
import './Header.scss'

const Header = ({
  showDifficulty,
  difficulty,
  setDifficulty,
  openHomeModal,
  link,
  isModalStory,
  setKey,
}) => {
  useEffect(() => {
    setDifficulty && setDifficulty({ ...difficulty })
  }, [])
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <Link to="/">
              <img
                src={logoDark}
                className="logo dark"
                alt="Очень важная История"
              />
              <img
                src={logo}
                className="logo white"
                alt="Очень важная История"
              />
            </Link>

            <Difficulty
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              showDifficulty={showDifficulty}
              openHomeModal={openHomeModal}
              link={link}
              isModalStory={isModalStory}
              setKey={setKey}
            />
            {link &&
              (link === 'about' ? (
                <Link to={'/about'} className="header__link header__link_about">
                  О проекте
                </Link>
              ) : (
                <Link to={'/'} className="header__link header__link_read">
                  <HeaderRead />
                  Читать
                </Link>
              ))}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
