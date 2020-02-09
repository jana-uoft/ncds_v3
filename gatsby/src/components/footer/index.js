import React from 'react'

import Wrapper from './styled/Wrapper'
import Copyright from './styled/Copyright'

import ImageFooter from './images/ImgFooter'

const Footer = () => {
  return (
    <Wrapper>
      <ImageFooter />
      <Copyright>
        <h4>Copyrights © 2020 All Rights Reserved by Nainativu CDS</h4>
        <a
          href='https://jana19.org'
          rel='noopener noreferrer'
          target='_blank'
        >
          Website by <b>Jana</b> (https://jana19.org)
        </a>
      </Copyright>
    </Wrapper>
  )
}

export default Footer