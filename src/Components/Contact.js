import React from 'react'
import linkedin from '../img/linkedin.png'
import insta from '../img/insta.png'
import github2 from '../img/github.png'

const Contact = () => {
    return (
        <div>
        <h1>
        Contact
        </h1>
            <img src={linkedin} className="linkedin" alt={linkedin}/>
            <img src={insta} className="insta" alt={insta}/>
            <img src={github2} className="github2" alt={github2}/>
        </div>
    )
}
export default Contact