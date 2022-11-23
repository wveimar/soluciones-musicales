import React from "react";
import PageSection from "../../components/page-section/PageSection";

const Mariachis = ({ pageCode }) => {
  return (
    <div>
      <PageSection sectionCode="s1" code={pageCode}>
        contenido interno
      </PageSection>
      <PageSection sectionCode="s2" code={pageCode}>
        contenido interno 2
      </PageSection>
    </div>
  );
};

export default Mariachis;
