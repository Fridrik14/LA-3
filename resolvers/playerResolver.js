const playerResolver = {
    Query: {
        allPlayers: () => players,
        Player: (args) => {
            return players.find(players => players.id === args.id)
        }
    },
    Mutations: {
        createPlayer: (parent, args) => {
            var newPlayer = {
                id: args.id,
                name: args.name,
                playedGames: args.playedGames
            }
            players.push(newPlayer);
            return newPlayer;
        },
        updatePlayer: (parent, args) => {
            //Finna á ID, update'a og returna uppfærða player
        },
        removePlayer: (parent, args) => {
            //Finna á ID, merkja sem deleted
            //return True ef virkaði, annars err
        }
    }   
}
module.exports = {playerResolver};