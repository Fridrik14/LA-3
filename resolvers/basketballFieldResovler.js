const basketballFieldResolvers = {
    Query: {
        allBasketBallFields: () => basketballFields,
        basketballField: (args) => {
            return basketballFields.find(basketballFields => basketballFields.id === args.id);
        }
    },
}

module.exports = {basketballFieldResolvers};