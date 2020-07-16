import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  skill: {
    margin: "0.3rem",
    fontSize: "0.9rem",
  },
  skillTop: {
    backgroundColor: "#ffd4d9",
  },
  skillTool: {
    backgroundColor: "lightcoral",
    color: "white",
  },
  isTool: { color: "#c9c9c9" },
  notTool: {color:"#ffa3ae"},
}));

export const GET_BACKENDSKILLS = gql`
  query GetSkills($skillType: SkillSkillTypeType!, $tool: Boolean) {
    allSkills(where: { skillType: $skillType, tool: $tool }, orderBy: "rank") {
      id
      name
      rank
      tool
    }
  }
`;

export default ({ skillType, tool }) => {
  const classes = useStyles();
  return (
    <Query query={GET_BACKENDSKILLS} variables={{ skillType, tool }}>
      {({ loading, data }) =>
        loading ? (
          <div
            className={clsx(
              { [classes.isTool]: tool },
              { [classes.notTool]: !tool }
            )}
          >
            Loading...
          </div>
        ) : (
          <div>
            {data &&
              data.allSkills.map((skill) => (
                <Chip
                  key={skill.id}
                  label={skill.name}
                  className={clsx(
                    classes.skill,
                    { [classes.skillTop]: skill.rank <= 3 },
                    { [classes.skillTool]: skill.tool }
                  )}
                />
              ))}
          </div>
        )
      }
    </Query>
  );
};
