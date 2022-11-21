import React from 'react'
import popUp from './Portofolio.module.css'
import portfImage1 from '../images/cabin.png'
import portfImage2 from '../images/cake.png'
import portfImage3 from '../images/circus.png'
import portfImage4 from '../images/game.png'
import portfImage5 from '../images/safe.png'
import portfImage6 from '../images/submarine.png'

export default function Portofolio() {
  return <>

    <section className={popUp.page}>
      <div className="container">
        <h2 className={popUp.head}>Portfolio</h2>
        <div className="icons pb-4 text-center">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>


        <div className="row d-flex justify-content-center" >
          <div className="col-md-6 col-lg-4 mb-5 ">
            <div className={popUp.pic} data-bs-toggle='modal' data-bs-target="#imageExample">
              <div className={popUp.overlay}  >
                <div className={popUp.item}>
                  <i className=' fa fa-plus fs-2' ></i>
                </div>
              </div>
              <img src={portfImage1} className="w-100 rounded-5" alt="" />

            </div>
            <div className="modal fade m-5" id='imageExample' tablIndex="-1" aria-hidden="true">
              <div className="modal-dialog my-5">
                <div className="modal-content">
                  <div className="container">
                    <div className="row text-center">
                      <div className="header1 col-md-12 text-center ">
                        <h1>LOG CABIN</h1>

                        <div className="icons pb-4 text-center">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                      </div>

                    </div>
                    <div className=" modal-body text-center" data-bs-dismiss="modal" aria-label="close">




                      <img src={portfImage1} alt="" className='d-block w-100' />
                      <div className="col-md-12 text-center">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</h5>
                      </div>

                      <button type='button' className='btn-clos rounded-3 p-2 my-2 ' data-bs-dismiss="modal" aria-label="close">Close Button</button>
                    </div>


                  </div>

                </div>
              </div>
            </div>



            <div className={popUp.pic} data-bs-toggle='modal' data-bs-target="#imageExample2">
              <div className={popUp.overlay}  >
                <div className={popUp.item}>
                  <i className=' fa fa-plus fs-2' ></i>
                </div>
              </div>
              <img src={portfImage4} className="w-100 rounded-5" alt="" />

            </div>
            <div className="modal fade m-5" id='imageExample2' tablIndex="-1" aria-hidden="true">
              <div className="modal-dialog my-5">
                <div className="modal-content">
                  <div className="container">
                    <div className="row text-center">
                      <div className="header1 col-md-12 text-center ">
                        <h1>LOG CABIN</h1>

                        <div className="icons pb-4 text-center">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                      </div>

                    </div>
                    <div className=" modal-body text-center" data-bs-dismiss="modal" aria-label="close">




                      <img src={portfImage4} alt="" className='d-block w-100' />
                      <div className="col-md-12 text-center">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</h5>
                      </div>

                      <button type='button' className='btn-clos rounded-3 p-2 my-2 ' data-bs-dismiss="modal" aria-label="close">Close Button</button>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>





          <div className="col-md-6 col-lg-4 mb-5 ">
            <div className={popUp.pic} data-bs-toggle='modal' data-bs-target="#imageExample3">
              <div className={popUp.overlay}  >
                <div className={popUp.item}>
                  <i className=' fa fa-plus fs-2' ></i>
                </div>
              </div>
              <img src={portfImage2} className="w-100 rounded-5" alt="" />

            </div>
            <div className="modal fade m-5" id='imageExample3' tablIndex="-1" aria-hidden="true">
              <div className="modal-dialog my-5">
                <div className="modal-content">
                  <div className="container">
                    <div className="row text-center">
                      <div className="header1 col-md-12 text-center ">
                        <h1>LOG CABIN</h1>

                        <div className="icons pb-4 text-center">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                      </div>

                    </div>
                    <div className=" modal-body text-center" data-bs-dismiss="modal" aria-label="close">




                      <img src={portfImage2} alt="" className='d-block w-100' />
                      <div className="col-md-12 text-center">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</h5>
                      </div>

                      <button type='button' className='btn-clos rounded-3 p-2 my-2 ' data-bs-dismiss="modal" aria-label="close">Close Button</button>
                    </div>


                  </div>

                </div>
              </div>
            </div>



            <div className={popUp.pic} data-bs-toggle='modal' data-bs-target="#imageExample4">
              <div className={popUp.overlay}  >
                <div className={popUp.item}>
                  <i className=' fa fa-plus fs-2' ></i>
                </div>
              </div>
              <img src={portfImage5} className="w-100 rounded-5" alt="" />

            </div>
            <div className="modal fade m-5" id='imageExample4' tablIndex="-1" aria-hidden="true">
              <div className="modal-dialog my-5">
                <div className="modal-content">
                  <div className="container">
                    <div className="row text-center">
                      <div className="header1 col-md-12 text-center ">
                        <h1>LOG CABIN</h1>

                        <div className="icons pb-4 text-center">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                      </div>

                    </div>
                    <div className=" modal-body text-center" data-bs-dismiss="modal" aria-label="close">




                      <img src={portfImage5} alt="" className='d-block w-100' />
                      <div className="col-md-12 text-center">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</h5>
                      </div>

                      <button type='button' className='btn-clos rounded-3 p-2 my-2 ' data-bs-dismiss="modal" aria-label="close">Close Button</button>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>




          <div className="col-md-6 col-lg-4 mb-5 ">
            <div className={popUp.pic} data-bs-toggle='modal' data-bs-target="#imageExample6">
              <div className={popUp.overlay}  >
                <div className={popUp.item}>
                  <i className=' fa fa-plus fs-2' ></i>
                </div>
              </div>
              <img src={portfImage3} className="w-100 rounded-5" alt="" />

            </div>
            <div className="modal fade m-5" id='imageExample6' tablIndex="-1" aria-hidden="true">
              <div className="modal-dialog my-5">
                <div className="modal-content">
                  <div className="container">
                    <div className="row text-center">
                      <div className="header1 col-md-12 text-center ">
                        <h1>LOG CABIN</h1>

                        <div className="icons pb-4 text-center">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                      </div>

                    </div>
                    <div className=" modal-body text-center" data-bs-dismiss="modal" aria-label="close">




                      <img src={portfImage3} alt="" className='d-block w-100' />
                      <div className="col-md-12 text-center">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</h5>
                      </div>

                      <button type='button' className='btn-clos rounded-3 p-2 my-2 ' data-bs-dismiss="modal" aria-label="close">Close Button</button>
                    </div>


                  </div>

                </div>
              </div>
            </div>



            <div className={popUp.pic} data-bs-toggle='modal' data-bs-target="#imageExample7">
              <div className={popUp.overlay}  >
                <div className={popUp.item}>
                  <i className=' fa fa-plus fs-2' ></i>
                </div>
              </div>
              <img src={portfImage6} className="w-100 rounded-5" alt="" />

            </div>
            <div className="modal fade m-5" id='imageExample7' tablIndex="-1" aria-hidden="true">
              <div className="modal-dialog my-5">
                <div className="modal-content">
                  <div className="container">
                    <div className="row text-center">
                      <div className="header1 col-md-12 text-center ">
                        <h1>LOG CABIN</h1>

                        <div className="icons pb-4 text-center">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                      </div>

                    </div>
                    <div className=" modal-body text-center" data-bs-dismiss="modal" aria-label="close">




                      <img src={portfImage6} alt="" className='d-block w-100' />
                      <div className="col-md-12 text-center">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</h5>
                      </div>

                      <button type='button' className='btn-clos rounded-3 p-2 my-2 ' data-bs-dismiss="modal" aria-label="close">Close Button</button>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>





          
        </div>
      </div>

    </section>



















  </>
}





