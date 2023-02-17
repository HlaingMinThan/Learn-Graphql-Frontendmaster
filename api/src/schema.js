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
        type : PetType!
    },

    enum PetType {
        CAT
        DOG
    }
    
    input PetsInput {
        type : PetType!
    }
    input PetInput {
        id : String!
    }
    type Query  {
        pets(input : PetsInput) : [Pet]!
        pet(input : PetInput ) :  Pet
    }
    input AddPetInput {
        name : String!,
        type : PetType!
    }
    type Mutation {
        addPet(input : AddPetInput) : Pet!
    }
`;

module.exports = typeDefs
