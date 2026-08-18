import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import './SocialIcons.css'

const socials = [
  { icon: <FiGithub />, url: 'https://github.com/Chetanya-Kaushal', label: 'GitHub' },
  { icon: <FiLinkedin />, url: 'https://linkedin.com/in/chetanyakaushal', label: 'LinkedIn' },
  { icon: <FiTwitter />, url: 'https://twitter.com/chetanyak', label: 'Twitter' },
  { icon: <FiMail />, url: 'mailto:chetanyakaushal@gmail.com', label: 'Email' },
]

export function SocialIcons() {
  return (
    <div className="socialicons">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="socialicons__icon"
          data-hoverable
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
      <div className="socialicons__line" />
    </div>
  )
}
