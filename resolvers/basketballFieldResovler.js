const basketballFieldResolvers = {
    Query: {
        allBasketBallFields: () => BasketBallFields,
        basketballField: (args) => {
            return BasketBallFields.find(BasketBallFields => BasketBallFields.id === args.id);
        }
    },
}

module.exports = {basketballFieldResolvers};