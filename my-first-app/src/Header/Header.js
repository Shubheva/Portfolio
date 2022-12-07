import React, { PureComponent } from 'react'
import propic from '../../assets/propic.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className= 'header-container'>
            <div className= 'profile-container'>
                <img src={propic} alt="" />
                </div>

                <div className= 'header-content'>

                  <p>Currently I am studying my masters from Technische Universitat Kaiserslautern.</p>

                  <p>I have completed my Bachelors of Engineering in Mechanical Engineeing from India.</p>

                  <p><i>You can also find me on...</i></p>
          
                  <a href = "https://www.linkedin.com/in/shubham-yadav-031195" className='fa-brands fa-xing'></a>
                  <a href = "https://www.linkedin.com/in/shubham-yadav-031195" className='fa-brands fa-linkedin'></a>
                  <button>To the documents</button>

                        </div>

              
            
                </div>
               

        
    
  );
};

export default Header;