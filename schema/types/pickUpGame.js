module.exports = `
    type PickUpGame {
        id: ID!
        start: Moment!
        end: Moment!
        location: BasketBallField!
        registeredPlayers: [Player!]!
        host: Player!
    }
`;