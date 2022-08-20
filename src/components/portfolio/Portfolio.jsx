import React from 'react'
import './Portfolio.css'
import p from '../../assets/assets/screencapture-minheinproject-netlify-app-2022-08-16-08_03_46.png'
import d from '../../assets/assets/screencapture-minheinproject-netlify-app-2022-08-16-08_50_29.png'
import b from '../../assets/assets/blogs.png'

const Portfolio = () => {
  return (
    <div className='portfolio container' id='portfolio'>
        <div className="text-center text-primary">
            <h2>My Projects</h2>
            <h5>You can watch this....</h5>
        </div>
        <div class="row">
            <div class="col-xl-3 col-md-6">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={p} class="p-img" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={d} class="p-img" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={b} class="p-img" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={p} class="p-img" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={d} class="p-img" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={b} class="p-img" alt=""/>
                    </a>
                </div>
            </div>
            {/* <div class="col-xl-3 col-md-6 hide-me">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={d} class="p-img" alt=""/>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 hide-me">
                <div class="p">
                    <div class="p-browser">
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                        <div class="p-circle"></div>
                    </div>
                    <a href="https://minheinproject.netlify.app/" target="_blank">
                        <img src={d} class="p-img" alt=""/>
                    </a>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Portfolio