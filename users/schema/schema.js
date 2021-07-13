const {
  graphql,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType,
} = require("graphql");
const _ = require("lodash");

const users = [
  {
    id: "23",
    firstName: "Bill",
    age: 20,
  },
  {
    id: "47",
    firstName: "Samantha",
    age: 21,
  },
];

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parantValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
