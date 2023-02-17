const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User  {
        id : ID!,
        username : String!
    },
    type Pet  {
        id : ID!,
        createdAt : String!,
        name : String!,
        type : String!
    },
    input PetInput {
        type : String!
    }
    type Query  {
        pets(input : PetInput) : [Pet]!
        hello : String #test query is the first resolve
    }
`;

module.exports = typeDefs
