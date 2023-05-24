const { gql } = require("apollo-server-express");


// Construct schema using GraphQL schema language
const typeDefs = gql`

  type Canine {
     id: ID
     name: String!
     dateOfBirth: String
     breed: String
  }
  type Query {
    getAllCanines: [Canine]
    getCanine(name: String): Canine
  }

  input canineInput {
     name: String!
     dateOfBirth: String
     breed: String
  }

  type Mutation {
    createCanine(canine: canineInput): Canine
    updateCanine(id: ID, canine: canineInput): Canine
  }
`;

module.exports = typeDefs;