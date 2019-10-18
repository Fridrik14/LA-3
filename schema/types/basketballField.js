module.exports = `
    type BasketballField {
        id: ID!
        name: String!
        capacity: Int!
        yearOfCreation: Moment!
        PickUpGames: [PickUpGame!]!
        status: BasketBallFieldStatus!
    }
`;