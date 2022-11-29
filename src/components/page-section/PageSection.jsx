import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./page-section.css";

const PageSection = ({ sectionCode, code, children }) => {
  const { error, data } = useQuery(PAGE_SECTION_QUERY, {
    variables: {
      where: { code_contains: `${code}-${sectionCode}` },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }
  const [pageSection] = data.pageSectionCollection.items;
  return (
    <section >
      {pageSection && pageSection.hideTitle && (
        <h1>{pageSection.title}</h1>
      )}
      {pageSection && !pageSection.hideDescription && (
        <p>{pageSection.description}</p>
      )}
      <div>{children}</div>
    </section>
  );
};

export default PageSection;

const PAGE_SECTION_QUERY = gql`
  query pageSectionCollection($where: PageSectionFilter) {
    pageSectionCollection(where: $where) {
      items {
        name
        title
        description
        hideTitle
        hideDescription
      }
    }
  }
`;
