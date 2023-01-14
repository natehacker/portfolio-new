import React from 'react'
import './about.css'
import point from '../../assests/point.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


function about() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={point} alt="About Me"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>College</h5>
              <small>Georgia State University</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>General Assembly</h5>
              <small>420 hours completed</small>
            </article>
          </div>
          <p>Hello World, My Name Is Nathan Louissaint A Full Stack Developer With Years Of Experience Spent Dedicating And Crafting My Life’s Work To Help Grow Companies And Provide The Best Assistance Possible To People Who Want To Take Up A Career In Tech I Have Built Several Projects Showcasing My Work If You Have Any Questions Please Feel Free To Contact Me </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about