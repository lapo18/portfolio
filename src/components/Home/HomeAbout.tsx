import { useTranslation } from 'react-i18next';

export const HomeAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="home__shortabout">
      <p className="shortabout__paragraph">
        {t('passionate')}
        <b className="paragraph__b"> Front-End Developer</b>{' '}
        {t('compromised')}&#10; &#10;
        {t('myStory')}
        <b className="paragraph__b">{t('passion')}</b>{' '}
        {t('on')}
      </p>
    </div>
  )
};
