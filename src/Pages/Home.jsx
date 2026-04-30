import React, { useEffect } from 'react'
import Header from '../Components/Header'
import './CSS/Home.css'
import MyButton from '../Components/MyButton'
import { Check , GraduationCap , BookOpenText , NotebookPen,Globe , Goal , Camera ,BookOpenCheck , SquareBottomDashedScissors} from 'lucide-react'
import LearningCard from '../Components/LearningCard'
import StudyCards from '../Components/StudyCards'
const Home = () => {
  const handleClick  = () => {
    alert('clicked')
  }

  // useEffect(()=>{
  //   console.log(GraduationCap)
  // },[])

  return (
    <>
     <Header/>
     {/* here is the hero section  */}
      <div className='main-card'>
          <div className='main-inside'>
               <div className='box box1 '>
                  <h1>Empowering <br/> Knowledge. Shaping <br/> the Future.</h1>
                    <p>Advance your Epsilon journey through accredited online programs <br/> designed by leading educators. Learn anywhere. Achieve more.</p>
                   <div className='button-content'>
                      <MyButton 
                        text="Apply For Admission" 
                        handleClick={handleClick}
                        style={
                         {
                           bg : "red",
                           hoverBgColor : "white",
                           color : "white",
                           hoverColor : "red",
                           border : "none"
                         }
                        }
                     />
                     <MyButton
                       text="Explore Program"
                       handleClick={handleClick}
                        style={
                         {
                           bg : "transparent",
                           hoverBgColor : "red",
                           color : "white",
                           hoverColor : "white",
                           border : "1px solid white"
                         }
                        }
                      />
                   </div>
               </div>
               <div className='box box2'>

                        <img className='img-poster' src="../../public/Images/pretty-schoolgirl.webp" alt="" />
                        <div className = "inside-design">
                          <div className='inside-circle'></div>
                        </div>
                        <div className='circle-img'>
                          
                                <img src="../../public/Images/counter-img.webp" alt="" />
                        </div>
               </div>
          </div>
      </div>
      {/* here is the end of hero section */}

      <div className='about-section-outer' >
              <div className='about-section-img'>
                        <img src="../../public/Images/new-about.webp" alt="" />
              </div>
              <div className='about-section-text'>
                         <p>About us</p>
                         <h1>Where Knowledge Meets <br /> Application</h1>
                         <p>At Epsilon, we believe meaningful education comes from applying theory to practice.</p>
                         <p>Our mission is to bridge academic rigor with practical relevance — guided by expert faculty, research-backed curriculum, and global learning standards.</p>
                         <p> <Check color="green" /> Expert Faculty & Mentors</p>
                         <p> <Check color="green" /> Career & Research Development</p>
                         <p> <Check color="green" /> Project-Based Learning</p>
                         <p> <Check color="green" /> Accredited Online Programs</p>
                          <div className="about-button">
                              <MyButton 
                        text="Apply Now" 
                        handleClick={handleClick}
                        style={
                         {
                           bg : "red",
                           hoverBgColor : "blue",
                           color : "white",
                           hoverColor : "white",
                           border : "none"
                         }
                        }
                     />
                          </div>
              </div>
      </div>
 


      <div className="choose-us">
           <div className="inside-div">
                <div className="fact_left">
                    <h4>WHY CHOOSE US</h4>
                    <h2>What Makes Epsilon Different</h2>
                    <p>Our approach combines academic excellence with personalized mentorship — <br /> ensuring each learner gains both intellectual depth and professional readiness.</p>
                     <MyButton 
                        text="Apply For Admission" 
                        handleClick={handleClick}
                        style={
                         {
                           bg : "red",
                           hoverBgColor : "blue",
                           color : "white",
                           hoverColor : "white",
                           border : "none"
                         }
                        }
                     />
                </div>
                <div className="fact-right">
                  
                  <div className="fact-right-inside">
                       <LearningCard
                      heading = "Epsilon Credibility"
                      para = "Programs developed by certified institutions and recognized educators"
                      ImgC = {<GraduationCap color='red' size='50'/>}
                   />

                    <LearningCard
                      heading = "Applied Learning"
                      para = "Practical exercises, real-world case studies, and guided projects."
                      ImgC={<BookOpenText color='red' size='50' />}
                   />

                    <LearningCard
                      heading = "Flexible Study Plans"
                      para = "Learn anywhere, anytime, with full support and progress tracking."
                      ImgC={<NotebookPen color='red' size='50' />}
                   />

                    <LearningCard
                      heading = "Global Community"
                      para = "Collaborate with peers and mentors from over 30 countries."
                      ImgC={<Globe color='red' size='50' />}
                   />
                  </div>
    

                </div>
           </div>
      </div>


      <div className='feature-div'>
              <p className='pp'>Featured Online Programs</p>
              <h4>Explore Our Epsilon Programs</h4>
              <h2>Structured courses designed to help you gain expertise, earn certification, and make measurable progress in your field. </h2>
              <div className="btn-group">
                   <button>
                    <Goal />
                    <span>Passive Income</span>
                   </button>
                   <button>
                    <Camera />
                    <span>Photography</span>
                   </button>
                   <button>
                    <BookOpenCheck />
                    <span>Teacher Training</span>
                   </button>
                   <button>
                   <SquareBottomDashedScissors />
                    <span>Arts & Crafts</span>
                   </button>
              </div>

              
              <div className="cards-group">
                  <div className="inside-cards-group">
                        <StudyCards
                        srcUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wEoCjYPws3nh_PqY1e8qdJCv4Jlxz7OQoA&s'
                        title="How to teach an online course With learnpress"
                        duration=" 10 weeks "
                        lesson="14 lessons"
                        price='Free'
                        />

                         <StudyCards
                        srcUrl='https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp'
                        title="How to teach an online course With learnpress"
                        duration=" 10 weeks "
                        lesson="14 lessons"
                        price='Free'
                        />


                         <StudyCards
                        srcUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wEoCjYPws3nh_PqY1e8qdJCv4Jlxz7OQoA&s'
                        title="How to teach an online course With learnpress"
                        duration=" 10 weeks "
                        lesson="14 lessons"
                        price='Free'
                        />

                         <StudyCards
                        srcUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wEoCjYPws3nh_PqY1e8qdJCv4Jlxz7OQoA&s'
                        title="How to teach an online course With learnpress"
                        duration=" 10 weeks "
                        lesson="14 lessons"
                        price='Free'
                        />

                         <StudyCards
                        srcUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wEoCjYPws3nh_PqY1e8qdJCv4Jlxz7OQoA&s'
                        title="How to teach an online course With learnpress"
                        duration=" 10 weeks "
                        lesson="14 lessons"
                        price='Free'
                        />
                  </div>
              </div>


               <MyButton 
                        text="View All Programs" 
                        handleClick={handleClick}
                        style={
                         {
                           bg : "red",
                           hoverBgColor : "blue",
                           color : "white",
                           hoverColor : "white",
                           border : "none"
                         }
                        }
                     />
      </div>
    
    </>
  )
}

export default Home