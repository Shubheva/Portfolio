import React from 'react'
import './Contact.css'
import Typical from 'react-typical'


const Contact = () => {
  return (
    <div>
      <div className='cont-det'>
      <h3><i><Typical steps={["You can contact me on...", 1000]}/></i></h3>
      </div>

      <div className='cont-cont'>
        
      <p><b>Email:</b> shubhamy.0311@gmail.com</p> 
      <p><b>Phone. No.:</b> +49 17655862699; +49 17674712946</p>
      <p><b>Birthdate:</b> 03.11.1995</p>

      </div>
        
    </div>
  )
}

export default Contact;