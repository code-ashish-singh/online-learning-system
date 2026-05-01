import React, { useEffect } from 'react'
import Header from '../Components/Header'
import './CSS/Home.css'
import MyButton from '../Components/MyButton'
import { Check , GraduationCap , BookOpenText , NotebookPen,Globe , Goal , Camera ,BookOpenCheck , SquareBottomDashedScissors} from 'lucide-react'
import LearningCard from '../Components/LearningCard'
import StudyCards from '../Components/StudyCards'
import MeetCard from '../Components/MeetCard'
const Home = () => {
  const handleClick  = () => {
    alert('clicked')
  }

  // useEffect(()=>{
  //   console.log(GraduationCap)
  // },[])

  return (
    <>
       <div className="outer-div">
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
    
      <div className="purpose">
                  <div className="purpose-inside">
                       <p className='purpose-p'>Transform Your Learning Experience</p>
                       <h4>Learn with Purpose. Grow with Impact.</h4>
                       <h6>Every Epsilon course combines structured learning with hands-on practice. Experience the difference of Epsilon <br /> mentorship, interactive projects, and measurable results.</h6>
                       <MyButton 
                        text="Join the Next Intake" 
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

      
      <div className='meet-our-faculty'>
                <p className='meet-p'>
                  Study according to your progress
                </p>
                <h2>
                  Meet Our Faculty
                </h2>
                <h6>
                  Our faculty consists of scholars, researchers, and industry professionals dedicated to advancing knowledge.  They <br /> bring academic excellence, mentorship, and real-world perspective to every program.
                </h6>
                <div className='meet-card-contain'>
                     
                          <MeetCard 
                            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                            name="Mr. Aiden"
                            dignation="Course Trainer"
                          />

                            <MeetCard 
                             src="https://t4.ftcdn.net/jpg/06/45/77/79/360_F_645777959_fNnaNoeVO4qxCNPW9MWr3gQlPFSGA9yL.jpg"
                            name="Dr. Evelyn Reed"
                            dignation="Senior Instructional Designer "
                          />

                            <MeetCard 
                           src="https://www.shutterstock.com/image-photo/happy-cheerful-45-year-old-600nw-2353012797.jpg"
                            name="Aisha Khan"
                            dignation="Data Science Instructor"
                          />


                            <MeetCard 
                            src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid&w=740&q=80"
                            name="Prof. Alan Grant"
                            dignation=" Digital Marketing Expert"
                          />

                            <MeetCard 
                           src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                            name="Sarah Jenkins"
                            dignation="Professional UX/UI Educator"
                          />

                            <MeetCard 
                           src="https://www.shutterstock.com/image-photo/young-european-businessman-company-boss-260nw-2602266467.jpg"
                            name=" Liam Peterson"
                            dignation=" Cybersecurity Curriculum Lead"
                          />

                 

                </div>
                       
                 <MyButton 
                        text="See All Faculty Members" 
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

      
          
      

      <div className='learner-div'>
             <div className="inside-learner-div">
                <div className='first-learner'>
                        <p>Testimonials</p>
                        <h2>Voices from Our  <br />Learners</h2>
                        <h4>Hear from learners who’ve transformed their skills <br /> and Epsilon confidence through Epsilon.</h4>
                        <div>
                          <div className="photo-collection">

                          </div>
                          <div className="learner-number">
                            <p>99%</p>
                            <h4>Satisfaction</h4>
                          </div>
                        </div>
                </div>
               
                
             </div>
      </div>

       </div>
    </>
  )
}

export default Home