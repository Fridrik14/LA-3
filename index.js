const resolvers = require('./resolvers/index');
const db = require("./data/db");
const typeDefs = require("./schema");
const errorMessage = require("./errors");
const services = require("./services/basketballFieldService");
const { ApolloServer } = require('apollo-server');




const server = new ApolloServer({
    /*
        Add typeDefs
        Add resolvers
    */
    typeDefs,
    resolvers,
    /*
        Get data here and the
        resolvers can access it from here
    */
    context: {
        errorMessages: errorMessage,
        BasketBallFields: services,
        Players: db.Player,
        PickUpGames: db.PickUpGame 
    },
   
   
});

server.listen()
    .then(({ url }) => console.log(`GraphQL Service is running on ${ url }`));
