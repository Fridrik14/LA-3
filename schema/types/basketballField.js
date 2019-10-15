module.exports = `
    type BasketballField {
        id: ID!
        name: String!
        capacity: Int!
        yearOfCreation: Moment!
        pickUpGames: [pickUpGame!]!
        status: BasketballFieldStatus!
    }
`;