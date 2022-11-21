import React from 'react'
import headerImg from '../images/avataaars.svg'
import firstPage from './Header.module.css'


export default function Header() {
  return (
    <div>
        <header className={firstPage.page}>
            <div className="container d-flex align-items-center flex-column pt-5">
                <img src={headerImg} alt="" className={firstPage.photo} />
                <h1 className={firstPage.words}>START REACT</h1>
                <div className="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p className={firstPage.paragraph}>Graphic Artist - Web Designer - Illustrator</p>

                </div>

            </div>
        </header>
    </div>
  )
}
