import React from "react";
import { useQuery, gql } from "@apollo/client";
import PageSection from "../../components/page-section/PageSection";
import Image from "../../components/image/Image";
import Gallery from "../../components/gallery/Gallery";
import GridMedia from "../../components/grid-media/GridMedia";

const PageMariachis = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_MARIACHIS_QUERY, {
    variables: {
      where: { code_contains: pageCode },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const [image] = data.simplePageCollection.items;

  console.log(pageCode);
  return (
    <div style={{ margin: "40px" }}>
      <Image description={image.description} url={image.image.url} />
      <PageSection sectionCode="s1" code={pageCode}>
        <Gallery code={`gallery-${pageCode}`} />
      </PageSection>
      <PageSection sectionCode="s2" code={pageCode}>
        <GridMedia code={`${pageCode}-s2-vg`} />
      </PageSection>
    </div>
  );
};

export default PageMariachis;

const PAGE_MARIACHIS_QUERY = gql`
  query simplePageCollection($where: SimplePageFilter) {
    simplePageCollection(where: $where) {
      items {
        name
        description
        image {
          url
        }
      }
    }
  }
`;
