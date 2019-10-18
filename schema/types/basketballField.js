module.exports = `
    type BasketBallField {
        id: ID!
        name: String!
        capacity: Int!
        yearOfCreation: Moment!
        PickUpGames: [PickUpGame!]!
        status: BasketBallFieldStatus!
    }
`;