import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ProjectCard from "../Component/Project/ProjectCard";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export const GET_BACKENDPROJECTS = gql`
  query GetProjects($projectType: ProjectProjectTypeType!) {
    allProjects(where: { projectType: $projectType }, orderBy: "rank") {
      id
      name
      projectType
      rank
      skills {
        id
        name
      }
      brandImage
      link
      body
    }
  }
`;

export default ({ projectType }) => {
  const classes = useStyles();
  return (
    <Query query={GET_BACKENDPROJECTS} variables={{ projectType }}>
      {({ loading, data }) =>
        loading ? (
          <div>Loading...</div>
        ) : (
          <div className={classes.root}>
            {data &&
              data.allProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  skills={project.skills}
                  body={project.body}
                  image={project.brandImage}
                  link={project.link}
                  project={project.projectType}
                />
              ))}
          </div>
        )
      }
    </Query>
  );
};
