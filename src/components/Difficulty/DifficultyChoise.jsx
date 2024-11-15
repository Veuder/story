import React from 'react'
import { ReactComponent as Question } from '../../assets/images/difficulty/question.svg'

const DifficultyChoise = ({
  difficulty,
  setDifficulty,
  setOpenDescription,
  openDescription,
  setOpenModal,
  handleClick,
  setKey,
}) => {
  return (
    <div className="difficulty">
      <div className="difficulty__choise">
        {difficulty.description && (
          <div
            className="difficulty-description"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="difficulty-description__icon daltonizm-color"
              onClick={() => setOpenDescription((prev) => !prev)}
            >
              <Question />
            </div>
            {openDescription && (
              <div className="difficulty-description__content">
                {difficulty.description}
              </div>
            )}
          </div>
        )}
        <div>
          Сложность:
          <span> {difficulty.title}</span>
        </div>
      </div>
      <div
        className="difficulty__open-modal daltonizm-color"
        onClick={() => {
          if (difficulty.value === 'not-choise') {
            return setOpenModal(true)
          } else {
            difficulty.value === 'dyslexia' && setKey((prev) => !prev)

            return setDifficulty(
              handleClick({
                textContent: 'без ограничений',
                dataset: {
                  value: 'not-choise',
                  description: '',
                },
              })
            )
          }
        }}
      >
        <svg
          width="278"
          height="73"
          viewBox="0 0 278 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            width="100%"
            height="100%"
            d="M278 37.2816C278 66.6689 217.225 62.9488 139 72.4344C62.2324 72.4344 0 75.6376 0 37.2816C0 6.45161 55.0116 1.57078 131.779 1.57078C211.81 -4.00898 278 12.8577 278 37.2816Z"
            fill="#373C3F"
          />
        </svg>
        {difficulty.value === 'not-choise'
          ? 'выбрать сложность'
          : 'отменить сложность'}
      </div>
    </div>
  )
}

export default DifficultyChoise
