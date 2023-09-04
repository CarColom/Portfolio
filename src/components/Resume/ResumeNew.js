import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useTranslation } from 'react-i18next';
import CV_EN from "../../pdfs/CV_CarlaYamilaColom_en.pdf"; 
import CV_ES from "../../pdfs/CV_CarlaYamilaColom_es.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Obtén el nombre del archivo PDF según el idioma actual
  const pdfFile = currentLanguage === 'en' ? CV_EN : CV_ES;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile} 
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('resume.downloadCV')}
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfFile} className="d-flex justify-content-center">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </div>
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile}  
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('resume.downloadCV')}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
