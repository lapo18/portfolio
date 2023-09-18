import { useTranslation } from 'react-i18next';
import Picture from '../../assets/picture.jpg';

export const HomeImgText = () => {
  const { t } = useTranslation();

  return (
    <div className="home__imagetext">
      <picture className="imagetext__picture">
        <img loading="lazy" src={Picture} alt="Portrait of Carlo La Porta " />
      </picture>
      <div className="home__titles">
        <h1 className="titles__title">{t('IAM')}</h1>
        <div className="titles__subtitle">
          <p>#</p>
          <p className="subtitle__subtitles">
            <span className="subtitles__span">Front-end developer</span>
            <span className="subtitles__span">Cyclotourist</span>
            <span className="subtitles__span">Music-lover</span>
            <span className="subtitles__span">Anime Enthusiast</span>
            <span className="subtitles__span">Pc Gamer</span>
          </p>
        </div>
      </div>
    </div>
  );
};
