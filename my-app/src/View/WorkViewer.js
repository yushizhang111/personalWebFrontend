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
      company
      linkedin
      start
      end
      description
    }
  }
`;

export default () => {
  const classes = useStyles();
  return (
    <Query query={GET_BACKENDWORKS} >
      {({ loading, data }) =>
        loading ? (
          <div>Loading...</div>
        ) : (
          <div className={classes.root}>
            {data &&
              data.allWorkingExperiences.map((work) => (
                <WorkCard
                  key={work.id}
                  id={work.id}
                  position={work.position}
                  company={work.company}
                  linkedin={work.linkedin}
                  start={work.start}
                  end={work.end}
                  description={work.description}
                />
              ))}
          </div>
        )
      }
    </Query>
  );
};
