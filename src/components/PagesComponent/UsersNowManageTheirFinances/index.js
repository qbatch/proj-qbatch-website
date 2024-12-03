import React from 'react'
import { navigate } from 'gatsby';

import Button from '../../UiComponent/Button';

import { UsersNowManageTheirFinancesWrapper } from './style'

const UsersNowManageTheirFinances = ({heading, buttonText}) => {
  return (
    <UsersNowManageTheirFinancesWrapper heading={heading}>
     <h2>{heading ? heading : `Is your app keeping pace with user demands?
     80% of mobile phone users now manage their finances through apps.` }</h2>
     <Button text={buttonText ? buttonText : "Launch your error-free mobile app"} onClick={() => navigate('/contact')} />
    </UsersNowManageTheirFinancesWrapper>
  )
}

export default UsersNowManageTheirFinances;
