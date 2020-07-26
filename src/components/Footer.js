import React from 'react';

//icons
import github from '../imgs/footer/GitHub-Mark-64px.png';
import linkedIn from '../imgs/footer/linkedin.png';
import twitter from '../imgs/footer/twitter.png';

const Footer = () => {
    return(
        <footer id = "footer">
            <a href="https://github.com/jduell12" target="blank"><img src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/jessicaduell/" target="blank"><img src={linkedIn} alt="linkedIn" /></a>
            <a href="https://twitter.com/JDuell_IT" target="blank"><img class="twitter" src={twitter} alt="twitter" /></a>
        </footer>
    )
}

export default Footer;