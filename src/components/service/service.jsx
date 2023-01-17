import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
function service() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Competitor analysis</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Customer analysis and
user research</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Product structure and
strategy.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Prototyping and
wireframing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Analysis and
iteration.</p>
            </li>
          </ul>
        </article>
        {/* =========== END OF UI/UX =========== */}
        <article className='service'>
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Designing user interfaces and navigation menus</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Writing and reviewing code for sites, typically HTML, XML, or JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Integrating multimedia content onto a site..</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Testing web applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Troubleshooting problems with performance or user experience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Collaborating with designers, developers, and stakeholders.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* =========== END OF WEBDEVELOPMENT =========== */}
        <article className='service'>
          <div className="service_head">
            <h3>PROBLEM SOLVING</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Define the problem. Diagnose the situation so that your focus is on the problem, not just its symptoms.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Binary search.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>debugging.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>algebraic coding theory.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> logical strategie appoarch.</p>
            </li>
          </ul>
        </article>
        {/* =========== END OF CONTENT CREATION =========== */}

      </div>
    </section>
  )
}

export default service