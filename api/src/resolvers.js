/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets : (_,{input},{models}) => {
      return models.Pet.findMany(input ? {type : input.type} : null)
    },
    pet(_,{input},{models}){ 
      return models.Pet.findOne({id : input.id})
    }
  },
  Mutation: {
    addPet(_,{input} , {models})  {
      return models.Pet.create(input)
    }
  },
  Pet : {
    name : (pet) => "Mrs " +pet.name,
    type : (pet) => pet.type.toUpperCase()
  }
}
