import React from "react";
import { useQuery, gql } from "@apollo/client";
import PageSection from "../../components/page-section/PageSection";
import Image from "../../components/image/Image";

const PageChirimias = ({ pageCode }) => {
  const { error, data } = useQuery(PAGE_CHIRIMIAS_QUERY, {
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
  

  console.log(data);
  return (
    <div style={{ margin: "40px" }}>
      {/* <Image description={image.description} url={image.image.url} /> */}
      <PageSection sectionCode="s1" code={pageCode}>
        contenido interno
      </PageSection>
      <PageSection sectionCode="s2" code={pageCode}>
        contenido interno 2
      </PageSection>
    </div>
  );
};

export default PageChirimias;

const PAGE_CHIRIMIAS_QUERY = gql`
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