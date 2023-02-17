/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets : (_,{input},{models}) => {
      return models.Pet.findMany({type : input.type})
    },
    hello(){ return 'world'}
  },
  // Mutation: {
    
  // },
  Pet : {
    name : (pet) => "Mrs " +pet.name,
    type : (pet) => pet.type
  }
}
