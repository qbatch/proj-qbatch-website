import React from 'react'

import ArrowRight from '../../../assets/images/icons/right-icon-button.svg'

import ButtonWrapper from './style'

const index = (props) => {
  const { text, className, type, btnType, onClick } = props

  return (
    <ButtonWrapper variant="text" className={className} onClick={onClick} type={btnType}>
      {text}
      <div className="button-icon">
        <div>
          <ArrowRight className={type} />
        </div>
      </div>
    </ButtonWrapper>
  )
}

export default index
