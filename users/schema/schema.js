const { graphql, GraphQLString, GraphQLInt } = require("graphql");
const { GraphQLObjectType } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});
