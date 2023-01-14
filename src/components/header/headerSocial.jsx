import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFigma} from 'react-icons/fa'

function headerSocial() {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/nathan-louissaint/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/natehacker" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="http://figma.com" target="_blank" rel='noreferrer'><FaFigma/></a>
    </div>
  )
}

export default headerSocial