const resolvers = require('./resolvers/index');
const db = require("./data/db");
const typeDefs = require("./schema/index");
const errorMessage = require("./errors");
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
    /*
        Add typeDefs
        Add resolvers
    */
    typeDefs,
    resolvers,
    
    context: {
        errorMessages: errorMessage,
        basketballFields: ()=>{
            return fetch(" https://basketball-fields.herokuapp.com/api/basketball-fields");
        },
        players: ()=>{return db.player},
        pickupGames: ()=>{return db.pickupGame}
    },
   
   
});

server.listen()
    .then(({ url }) => console.log(`GraphQL Service is running on ${ url }`));
