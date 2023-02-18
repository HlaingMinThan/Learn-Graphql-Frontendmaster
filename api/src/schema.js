const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User  {
        id : ID!,
        username : String!
    },

    #unions are same as interface, the only difference is unions doesn't  have to exists common fields, but interface does so when we query a union return type, we can't add common fields and we can just use ... conditiontal retrieving
    # query {
    # 	footwear_included_shoes {
    #     ...on Sneaker {
    #       	size
    #       brand
    # 			sport
    #     }
    #    ...on Boot {
    #       size
    #       brand
    # 			hasGrip
    #     }
    #   }
    # }
    union Footwear = Sneaker | Boot

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
        footwear_included_shoes : [Footwear]!
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
