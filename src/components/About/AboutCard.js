import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();

return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('aboutCard.intro')}
            <br />{t('aboutCard.education')}
            <br />
            {t('aboutCard.passion')}
            <br />
            <br />{t('aboutCard.jobSeeking')}
            <br />
            <br />
            {t('aboutCard.activities')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.crafts')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.cooking')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.traveling')}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
