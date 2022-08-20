import React from 'react'
import './Expericence.css'

const Expericence = () => {
  return (
    <div className='Experience' id='experience'>
      <h1 className='text-center my-3'>My Skill</h1>
      <div class="container mt-5">
        <div class="row d-flex justify-content-between align-items-center g-3">
            <div class="col-xl-5 col-12 col-md-12 ftend-skill">
              <div className="text-center title-intro">
                <h2>
                  Frontend Web Development
                </h2>
              </div>
                <div class="skill-area p-3">
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            HTMl
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="html skill-fill">
                            <span class="skill-percent">60%</span>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            CSS
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="css skill-fill">
                            <span class="skill-percent">75%</span>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            Javascript
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="js skill-fill">
                            <span class="skill-percent">78%</span>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            React Js
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="react skill-fill">
                            <span class="skill-percent">70%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 col-sm-12 col-md-12 bkend-skill">
            <div className="text-center title-intro">
                <h2>Backend Web Development</h2>
              </div>
                <div class="skill-area p-3">
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            Python/Django
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="python skill-fill">
                            <span class="skill-percent">85%</span>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            PHP
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="php skill-fill">
                            <span class="skill-percent">40%</span>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            PostgreSQL
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="postgre skill-fill">
                            <span class="skill-percent">82%</span>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill-title">
                          <h4>

                            MySQL
                          </h4>
                        </div>
                        <div class="skill-bar">
                        </div>
                        <div class="mysql skill-fill">
                            <span class="skill-percent">58%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Expericence