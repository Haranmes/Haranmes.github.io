import portrait from '../images/Ramez.jpg'
import programming from '../images/pexels-luis-gomes-546819.jpg'
import React from "react";
import Card from 'react-bootstrap/Card';
import git from '../images/Github.png';
import school from '../images/school.jpg';
function Home() {
   
   
    return(
        <div className="  bg-slate-700 Home">
            <div className="static grid gap-4 grid-cols-1 justify-items-center  ">
                <h1 className="relative top-10 text-center text-white"> I'm Ramez <span className="text-orange-600">Soliman</span></h1>
                <p className="  relative top-10 text-white">Currently a student and hobby webdeveloper</p>
                <button type="button" class="btn btn-primary relative top-10">Contact Me!</button>
                <a 
                    class='social-icon-link github'
                    href="https://github.com/Haranmes"
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='Github'
                >
                    <img src={git} alt="git" className=" relative top-10"></img>
        </a>
                <img src={portrait}  className="rounded-3xl relative top-14 w-40" alt="Ramez"></img>
                
                
            </div>
            
            <h1  className="text-white relative text-center top-72">About <span className="text-orange-600">Me</span></h1>
            <div className="static">
                
            </div>
            
                <div className="static justify-items-center grid  lg:grid-cols-3 md:grid-cols-1 ">
                <Card style={{ width: '18rem' }} className=" relative top-80 md:mt-6">
                    <Card.Img variant="top" src={programming} />
                    <Card.Body>
                        <Card.Title>Programming</Card.Title>
                        <Card.Text>
                            I have started my porgramming in the year 2019 when I got my first personal computer. Since then I've learned many different technologies and faced various issues that I've learned to overcome
                            I'm most knowledgable in these Languages: 
                        </Card.Text>
                            <ul className="list-disc list-outside text-left text-black ">
                                <li>HTML/CSS/JavaScript</li>
                                <li>React.js and Tailwind CSS</li>
                                <li>Java</li>
                                <li>Python</li>
                            </ul>
                            Still, my true passion lies within <span className="text-orange-600">Web developement</span> and <span className="text-orange-600">machine learning.</span>
                    </Card.Body>
                </Card>
                <div className="static">
                <Card style={{ width: '18rem' }} className=" relative top-80 md:mt-6">
                    <Card.Img variant="top" src={school}  />
                    <Card.Body>
                        <Card.Title>Education</Card.Title>
                            <ul className="list-disc list-outside text-left text-black ">
                                <li>Currently preparing for my "Abitur" (german equivalant of the IB (International Baccalaureat)</li>
                                <li>Attending the "Friedrich-Hecker-Schule" in Sinsheim, Germany</li>
                                <li>My specialtiy in school is Computer Science</li>
                            </ul>
                            
                    </Card.Body>
                </Card>
                </div>
                
                
                </div>
                <div className="static">
                    <h1  className="text-white relative text-center top-80 mt-36">My <span className="text-orange-600">Work</span></h1>
                </div>
                
           
        </div>
        
    )
}




export default Home;