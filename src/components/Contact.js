import React from 'react';

const Contact = () => {
    return (
        <div className="background contact">
            <h1>Contact</h1>
            <div className="email">
                <h2>Email:</h2> 
                <a href="mailto:duellsoftwaredev@gmail.com">
                    <h2>duellsoftwaredev@gmail.com</h2>
                </a>
            </div>
            <div className="linkedin">
                <h2>LinkedIn: </h2>
                <a href="https://www.linkedin.com/in/jessicaduell/" target="blank">
                    <h2>https://www.linkedin.com/in/jessicaduell/</h2>
                </a>
            </div>
            <div className="github">
                <h2>Github: </h2> 
                <a href="https://github.com/jduell12" target="blank">
                    <h2>https://github.com/jduell12</h2>
                </a>
            </div>
            <div className="twitter">
                <h2>Twitter: </h2>
                <a href="https://twitter.com/JDuell_IT" target="blank">
                    <h2>https://twitter.com/JDuell_IT</h2>
                </a>
            </div>
        </div>
    )
}

export default Contact;