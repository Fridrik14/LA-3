module.exports = `
    type Query {
        allBasketBallFields: [BasketBallField!]!
        allPickUpGames: [PickUpGame!]!
        allPlayers: [Player!]!
        BasketBallField(id:String!): BasketBallField!
        Player(id:String!):Player!
        PickUpGame(id:String!):PickUpGame!
    }
`;