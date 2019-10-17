module.exports = `
    type Mutation {
        createPickupGame(input: pickupGameInput): PickUpGame!
        removePickupGame(id:String!): Boolean!
        addPlayerToPickupGame(input:signupPlayerInput!): PickUpGame!
        removePlayerFromPickupGame(playerId:String! pickupGameId:String!): Boolean!
        createPlayer(input:playerInput!): Player!
        updatePlayer(id:String! name: String!): Player!
        removePlayer(id:String!): Boolean!
    }
`;