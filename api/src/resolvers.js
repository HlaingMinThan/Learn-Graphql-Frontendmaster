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
    },
    /**
     * dynamic query
     * 
          query {
            shoes {
              brand,
              size
              ...on Sneaker {
                sport
              }
              ...on Boot {
                hasGrip
              }
            }
          }
     */
    shoes() {
      return [{ brand : "Nike" , sport : "Yes" , size : 10},{ brand : "Timberlank" , hasGrip : true , size : 10}]
    },
    footwear_included_shoes() {
       return [{ brand : "Nike" , sport : "Yes" , size : 10},{ brand : "Timberlank" , hasGrip : true , size : 10}]
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
  },
  //Interface Shoe
  Shoe : {
    //tell graphql how to differentiate a shoe
    __resolveType(shoe) {
       if(shoe.sport) return "Sneaker"
       return  "Boot";
    }
  },
  //Union Footwear
  Footwear : {
    //tell graphql how to differentiate a shoe
    __resolveType(shoe) {
       if(shoe.sport) return "Sneaker"
       return  "Boot";
    }
  }
}
