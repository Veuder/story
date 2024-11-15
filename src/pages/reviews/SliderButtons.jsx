import React, { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="slider__button slider__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="80"
        height="73"
        viewBox="0 0 80 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.66196 21.2845C8.90257 0.852052 34.1387 -0.395435 54.6077 4.19718C62.9803 6.07573 69.5185 10.8763 73.7869 19.2794C80.0977 31.7034 79.2814 45.4032 71.5896 57.0126C60.0519 74.4265 29.6395 75.1133 13.6965 61.6716C2.19691 51.9762 -0.0871124 35.9016 3.66196 21.2845Z"
          stroke="#212529"
          strokeWidth="3.10076"
        />
        <path
          d="M41 47C37.2143 47 35.1487 42.9222 31.9618 41.3056C29.9026 40.261 28.092 38.8266 26.0758 37.75C25.0867 37.2218 24.0706 36.763 23.077 36.25C22.9815 36.2007 21.7953 35.6598 22.0309 35.5556C23.3814 34.9579 25.2289 35.6447 26.6895 34.9444C28.8937 33.8876 30.8368 32.1147 32.8544 30.75C35.4382 29.0024 37.802 27.1844 39.9958 25"
          stroke="#373C3F"
          strokeWidth="3.10076"
          strokeLinecap="round"
        />
        <path
          d="M24 35.975C27.8374 35.975 31.6748 35.975 35.5123 35.975C38.0991 35.975 40.6582 36.1606 43.1961 35.5202C45.9832 34.817 48.8943 35.0304 51.7157 35.0304C53.5092 35.0304 55.2358 35.6602 57 35.6602"
          stroke="#373C3F"
          strokeWidth="3.10076"
          strokeLinecap="round"
        />
      </svg>

      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="slider__button slider__button--next"
      type="button"
      {...restProps}
    >
      <svg
        width="79"
        height="75"
        viewBox="0 0 79 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75.3348 23.3809C70.0839 2.98811 43.0837 -3.09202 24.2892 6.32675C15.8841 10.539 11.5508 14.9941 7.27401 23.3809C0.950805 35.7808 -0.432863 47.4529 7.27401 59.0397C18.8343 76.4199 49.3063 77.1053 65.2805 63.6897C76.8027 54.0131 79.0912 37.9697 75.3348 23.3809Z"
          stroke="#212529"
          strokeWidth="3.10076"
        />
        <path
          d="M58.9997 37.0003C58.0744 37.5069 56.5603 37.1349 55.5661 37.1954C53.7195 37.3077 51.8522 37.8732 50.0271 38.2062C47.9121 38.5922 45.6756 38.1009 43.5973 38.6319C42.3826 38.9422 41.1249 39.3932 39.9694 39.9087C39.0347 40.3257 38.1945 41.096 37.1351 40.9905C33.6621 40.6448 30.2831 39.7915 26.7696 39.7314C24.5144 39.6928 22.2554 39.7314 19.9997 39.7314"
          stroke="#373C3F"
          strokeWidth="3.10076"
          strokeLinecap="round"
        />
        <path
          d="M60 37C59.4957 37 59.0722 36.6582 58.6671 36.3955C57.7177 35.78 56.8102 35.1313 55.9141 34.4426C54.2169 33.1382 52.5754 31.6903 50.8369 30.4505C49.3459 29.3872 47.8318 28.6613 46.1415 27.9728C45.4694 27.6991 44.7053 27.4792 44.1119 27.0495C43.6899 26.744 43.4619 26.229 43 26"
          stroke="#373C3F"
          strokeWidth="3.10076"
          strokeLinecap="round"
        />
        <path
          d="M60 37C59.2849 38.4633 57.676 39.6064 56.7332 40.6015C55.7104 41.6811 54.7338 42.7903 53.5344 43.678C52.5559 44.4022 51.5442 45.0037 50.6396 45.8349C49.9387 46.4789 49.2402 47.1236 48.5115 47.7349C47.9516 48.2046 47.4305 48.7034 46.8856 49.1886C46.6058 49.4378 46.345 49.8823 46 50"
          stroke="#373C3F"
          strokeWidth="3.10076"
          strokeLinecap="round"
        />
      </svg>

      {children}
    </button>
  )
}
