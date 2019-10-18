const playerResolver = {
      
}
module.exports = {
    Query: {
        allPlayers: () => Players,
        Player: (args) => {
            return Players.find(Players => Players.id === args.id)
        }
    },
    Mutation: {
        createPlayer: (parent, args) => {
            var newPlayer = {
                id: args.id,
                ...args.input
                /*
                name: args.name,
                playedGames: args.playedGames
                */
            }
            Players.push(newPlayer);
            return newPlayer;
        },
        updatePlayer: (parent, args) => {
            //Finna á ID, update'a og returna uppfærða player
            const player = Player.find(c => c.id === args.id);
            player.name = args.name 
            return player;
        },
        removePlayer: (parent, args) => {
            //Finna á ID, merkja sem deleted
            //return True ef virkaði, annars err
            const player = Player.find(c => c.id === args.id);
            const index = Player.indexOf(player);

            if(index === -1){return false;}

            Player.splice(index,1);
            return true;
        }
    } 
};