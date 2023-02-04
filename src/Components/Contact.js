import React from 'react'

import { FaWhatsapp, FaGithub, FaLinkedin} from "react-icons/fa"




const Contact = () => {
    return (
        <div>
            <h1>
            Contact
            </h1>
           

            <a href="https://github.com/MiguelRoaDiv"  class='github' target="_blank">
            <FaGithub size='3rem' />
            </a>

            <a href="https://www.linkedin.com/in/miguel-eduardo-garcía-roa-a0ab61203/"  target="_blank">
            <FaLinkedin size='3rem' />
            </a>


        
            
            <a href="https://api.whatsapp.com/send?phone=3142074008&text=Buen%20día,%20quisiera%20más%20información"  class="float" target="_blank">
            <FaWhatsapp size='3.1rem' />
            </a>
        </div>

    )
}
export default Contact