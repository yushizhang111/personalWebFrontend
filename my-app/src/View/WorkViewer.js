import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import WorkCard from "../Component/Work/WorkCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export const GET_BACKENDWORKS = gql`
  query GetWorks {
    allWorkingExperiences(orderBy: "rank") {
      id
      position
      chinesePosition
      company
      chineseCompany
      linkedin
      start
      end
      description
      chineseDescription
    }
  }
`;

export default ({t,lng}) => {
  const classes = useStyles();
  return (
    <Query query={GET_BACKENDWORKS}>
      {({ loading, data }) =>
        loading ? (
          <div>{t("Loading")}...</div>
        ) : (
          <div className={classes.root}>
            {data &&
              data.allWorkingExperiences.map((work) => (
                <WorkCard
                  key={work.id}
                  id={work.id}
                  position={lng === "zh" ? work.chinesePosition : work.position}
                  company={lng === "zh" ? work.chineseCompany : work.company}
                  linkedin={work.linkedin}
                  start={work.start}
                  end={work.end}
                  description={
                    lng === "zh" ? work.chineseDescription : work.description
                  }
                />
              ))}
          </div>
        )
      }
    </Query>
  );
};
