import React from 'react'
import './Home.css';
import propic from '../assets/propic.jpg';
import Typical from 'react-typical'


const Author = () => {
  return (
    <div>
        <div className= 'header-container'>
        <div className= 'FullName'>
        <h1>Shubham Rajesh Yadav</h1>
            <h4><Typical steps={["Research and Development Engineer", 1000]}/></h4>
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
                  <button>To the documents</button>

                        </div>

              
                </div>
    </div>
  )
}

export default Author;