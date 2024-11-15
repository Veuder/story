import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { ReactComponent as Arrow } from '../../assets/images/footer/arrow.svg'
import { ReactComponent as ButtonBg } from '../../assets/images/footer/button-bg.svg'

const Footer = ({ linkLeft, linkRight, currentStep, maxStep }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          {linkLeft && (
            <Link
              to={linkLeft.link}
              className={`footer-link footer-link__left ${
                !linkLeft.link ? 'disabled' : ''
              }`}
            >
              <ButtonBg className="footer-link-bg" />
              <Arrow />
              {linkLeft.text}
            </Link>
          )}
          <span className="footer__step">
            {currentStep} из {maxStep}
          </span>
          <Link to={linkRight.link} className="footer-link footer-link__right">
            <ButtonBg className="footer-link-bg" />
            {linkRight.text}
            <Arrow />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
