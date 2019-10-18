module.exports = {
    Query: {
        allBasketBallFields: () => BasketBallFields,
        BasketBallField: (args) => {
            return BasketBallFields.find(BasketBallFields => BasketBallFields.id === args.id);
        }
    }
};