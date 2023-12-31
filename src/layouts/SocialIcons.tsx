import { useTranslation } from 'react-i18next'
import { Github, LinkedIn } from '../assets/socialIcons'

interface Props {
  className: string
}

export const SocialIcons = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
    <div className={`social__container ${className}`}>
      <h2 className="social__h2">
        <span className="social__span">#</span>
        {t('SocialLinks')}
      </h2>
      <div className="social__icons">
        <LinkedIn className="social__svg" />
        <Github className="social__svg" />
      </div>
    </div>
  )
}
