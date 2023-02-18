const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User  {
        id : ID!,
        username : String!
    },

    interface Shoe {
        brand : String!
        size : Int!,
    }

    type Sneaker implements Shoe {
        brand : String!
        size : Int!,
        sport : String
    }
    type Boot implements Shoe {
        brand : String!
        size : Int!,
        hasGrip : Boolean
    }

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
        pet(input : PetInput ) :  Pet,
        shoes : [Shoe]!
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
