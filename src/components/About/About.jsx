import React from 'react'
import './About.css'
import team from '../../assets/creative-profile-card-images/team-3.jpg'
import teamdec from '../../assets/creative-profile-card-images/team-decoration-2.jpg'

function About() {
  return (
    // <div id='about' className='about'>About</div>
    <div className="About-me" id='about'>
      <h2 className='text-center mt-3'>About Me</h2>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-5 col-12">
                    <div className="d-flex justify-content-center align-items-center pt-5 profile">
    
                        <div className="profile-card">
                            <img src={teamdec} alt="" className="profile-card-image" />
                            <div className="card-head">
                                <img src={team} className="card-head-image" alt=""/>
        
                                <div className="hover-content">
                                    <h4>Hello & Welcome</h4>
                                    <p>
                                        Hello , I'm Min Hein Ko Ko . I'm 19 years old. And a Backend Web Developer.
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4>Min Hein Ko Ko</h4>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-12 about">
                    <div className="row justify-content-center align-items-center g-3 mt-5">
                        <div className="col-xl-6 col-md-6 mb-3">
                            <div className="box">
                                <div className="content">
                                    <h2><i class="fa-solid fa-m"></i></h2>
                                    <h3>Age</h3>
                                    <p>I 'm 19 years old. And I wanna to be a good Backend Web Developer....</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-3">
                            <div className="box">
                                <div className="content">
                                    <h2><i class="fa-solid fa-h"></i></h2>
                                    <h3>Education</h3>
                                    <p>I'm undergraduate student. So I'm have no Degree but I believe my own mind..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-3">
                            <div className="box">
                                <div className="content">
                                    <h2><i class="fa-solid fa-k"></i></h2>
                                    <h3>For Future</h3>
                                    <p>As I mentioned above .. I want to be a Professional Backend Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 mb-3">
                            <div className="box">
                                <div className="content">
                                    <h2><i class="fa-solid fa-k"></i></h2>
                                    <h3>My Skill</h3>
                                    <p>My coding skill isn't good . But I'm happy while I'm coding and debugging. And I like learning new Things that forced me to be a Developer...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About