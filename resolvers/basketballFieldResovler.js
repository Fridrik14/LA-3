module.exports = {
    Query: {
        allBasketBallFields: (context) => context.BasketBallFields,
        BasketBallField: (args,context) => {
            return context.BasketBallFields.find(BasketBallFields => BasketBallFields.id === args.id);
        }
    }
};