module.exports = `
    type Mutation {
        createPickupGame(input: PickUpGameInput): PickUpGame!
        removePickupGame(id:String!): Boolean!
        addPlayerToPickupGame(input:SignUpPlayerInput!): PickUpGame!
        removePlayerFromPickupGame(pid:String! puGId:String!): Boolean!
        createPlayer(input:PlayerInput!): Player!
        updatePlayer(id:String! name: String!): Player!
        removePlayer(id:String!): Boolean!
    }
`;