import React from 'react'
import propic from '../assets/propic.jpg';
import "./Home.css";
import Typical from 'react-typical'



const Home = () => {
  const onButtonClick = () =>{
    fetch ('Lebenslauf.pdf').then(response => {
      response.blob().then(blob => {

        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Lebenslauf.pdf';
        alink.click();
      })
    })
  }
  
  return (
   
        <div className= 'header-container'>
           <div className= 'FullName'>
            <h2><i>Shubham Rajesh Yadav</i></h2>
            <h4><i><Typical steps={["Research and Development Engineer", 1000]}/></i></h4>
        </div>
            <div className= 'profile-container'>
                <img src={propic} alt="" />
                </div>

                <div className= 'header-content'>

                  <p>Currently I am studying my masters from Technische Universitat Kaiserslautern.</p>

                  <p>I have completed my Bachelors of Engineering in Mechanical Engineeing from India.</p>

                  <p><i>You can also find me on...</i></p>
          
                  <a href = "https://www.linkedin.com/in/shubham-yadav-031195" className='fa-brands fa-xing'></a>
                  <a href = "https://www.linkedin.com/in/shubham-yadav-031195" className='fa-brands fa-linkedin'></a>
    
                  <button onClick={onButtonClick}>
                    Download CV  </button>
                 

                        </div>

              
            
                </div>
               

        
    
  );
};
export default Home;