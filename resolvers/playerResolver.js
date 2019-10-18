const playerResolver = {
      
}
module.exports = {
    Query: {
        allPlayers: (context) => context.Players,
        Player: (args,context) => {
            return context.Players.find(Players => Players.id === args.id)
        }
    },
    Mutation: {
        createPlayer: (parent, args,context) => {
            var newPlayer = {
                id: args.id,
                ...args.input
                /*
                name: args.name,
                playedGames: args.playedGames
                */
            }
            context.Players.push(newPlayer);
            return newPlayer;
        },
        updatePlayer: (parent, args,context) => {
            //Finna á ID, update'a og returna uppfærða player
            const player = context.Player.find(c => c.id === args.id);
            player.name = args.name 
            return player;
        },
        removePlayer: (parent, args,context) => {
            //Finna á ID, merkja sem deleted
            //return True ef virkaði, annars err
            const player = context.Player.find(c => c.id === args.id);
            const index = context.Player.indexOf(player);

            if(index === -1){return false;}

            Player.splice(index,1);
            return true;
        }
    } 
};