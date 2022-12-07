import React from 'react'
import Typical from 'react-typical'
import './About.css';
const About = () => {
  return (
    <div>
    <div className='about-content'>
        <h3><i><Typical steps={["About me...", 1000]}/></i></h3>
    </div>
    <div className='para-content'>    
        <p>

        I am Shubham. I come from small city of Pune from India. Due to my interests in machines I completed my bachelors in Mechanical Engineering from University of Pune. After my Bachelors I decided to pursue my masters from Germany and did my masters in Commercial Vehicle Technology from Technische Universitat Kaiserslautern. Currently I am working as a Research Engineer in Knorr Bremse GmbH.
      </p>
        <p>  
        During my internship in Schaeffler GmbH, I have worked a lot on similar projects. I have handled MATLAB and Simulink Drivetrain Models of PHEV architecture. I had developed functions in MATLAB for particular drive cycles and control strategies. I was also involved in project of optimising the drivetrain and testing drivetrain with respect to the simulation results. To simplify and filter the useful requirements I had developed a tool using MATLAB. Moreover, I have worked Automotive department in Germany and also in India and am familiar with the environment. 
        </p>

        <p>
        I have skills and done projects in MATLAB/Simulink, Python, languages which are mainly used for software integration. Moreover, I have done research and I have knowledge in development of Electric cars. In my current Master’s program, I have worked on project in which we reduced the fuel consumption of the hybrid vehicle (PHEV) by 27% with Rule Based Strategy and optimising the use of battery. I was involved in many innovation projects where my major task was to analyse test benches, modify requirements according to customer and developing automation solution. 
        </p>
        <p>
        I am a fast learner, analytical thinker and a funny character. Speaking of my work ethic, I am a reliable person, a team player and adapt easily to new environment. I believe, I can use my skills to fullest with this opportunity. Thank you kindly for taking the time to consider my application. 

        </p>
    </div>
    </div>
  );
};

export default About;