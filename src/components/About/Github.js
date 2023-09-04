import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next'; 

function Github() {
  const { t } = useTranslation(); 

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {t('github.daysICode')}
        <strong className="purple"> {t('github.Code')}</strong>
      </h1>
      <GitHubCalendar
        username="carcolom"
        blockSize={15}
        blockMargin={5}
        color="#f82c81"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

