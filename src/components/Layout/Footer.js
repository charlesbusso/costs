import { FaInstagram, FaLinkedin,FaGithub, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}> 
                <li >
                    <a href='https://github.com/charlesbusso' target='_blank'><FaGithub/></a> 
                
                </li>
                <li>
                    <FaWhatsapp/>
                    
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className= {styles.copy_right}>
                <span>Costs</span> &copy; 2023
                </p>
        </footer>

    )

}

export default Footer