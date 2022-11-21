import React from 'react'
import About from './About.module.css'

export default function Contact() {
  return (
    <div>


      <section className={About.page}>
        <div className="container ">
          <h2 className={About.h2}>ABOUT</h2>
          <div className="icons pb-4">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>


          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 ml-auto">
              <p className={About.paragraph}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-lg-4 ml-auto">
              <p className={About.paragraph}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
