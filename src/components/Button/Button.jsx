import React from 'react'
import './Button.scss'

const Button = ({ onClick }) => {
  return (
    <div className="btn" onClick={onClick}>
      <svg
        width="282"
        height="61"
        viewBox="0 0 282 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M281.118 30.6773C281.118 47.1542 237.97 65.4837 156.249 60.0142C78.6207 60.0142 0 47.1542 0 30.6773C0 14.2003 48.5476 0.345904 126.176 0.345904C213.127 -2.63768 281.118 14.2003 281.118 30.6773Z"
          fill="#E95929"
        />
      </svg>
      ограниченная подвижность
    </div>
  )
}

export default Button
