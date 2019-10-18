module.exports = `
    type Mutation {
        createPickupGame(input: PickUpGameInput): PickUpGame!
        removePickupGame(id:String!): Boolean!
        addPlayerToPickupGame(input:SignUpPlayerInput!): PickUpGame!
        removePlayerFromPickupGame(playerId:String! pickupGameId:String!): Boolean!
        createPlayer(input:PlayerInput!): Player!
        updatePlayer(id:String! name: String!): Player!
        removePlayer(id:String!): Boolean!
    }
`;