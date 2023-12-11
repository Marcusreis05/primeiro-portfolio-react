import style from'./Footer.module.css'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer(){
    return (
        <div className={style.footer}>
            <ul>
                <li><a href='https://www.instagram.com'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Marcusreis05'><FaGithub size={30}/></a></li>
                <li><a href='https://br.linkedin.com'><FaLinkedinIn size={30}/></a></li>
            </ul>
            <p>marcusreis05@gmail.com</p>
            <p>Marcus Reis © 2023</p>
        </div>
    )
}

export default Footer