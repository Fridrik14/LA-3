module.exports = `
    type PickUpGame {
        id: ID!
        start: Moment!
        end: Moment!
        location: BasketballField!
        registeredPlayers: [Player!]!
        host: Player!
    }
`;