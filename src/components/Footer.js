import LinkedIn from '../../public/icons/linkedin.svg'
import Github from '../../public/icons/github.svg'
import {MailIcon} from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper flex flex-row max-w-max ml-auto">
          <h3 className="mr-16"> Reach out to me </h3>
          <a href="mailto:mrnaaw98@gmail.com" target="_blank">
            <MailIcon />
          </a>
          <a href="https://www.linkedin.com/in/naveed-ahamed/" target="_blank">
            <LinkedIn />
          </a>
          <a href="https://github.com/AetheryNA" target="_blank">
            <Github /> 
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer