var moment = require('moment')

const pickupGameResolver = {
    
}

module.exports = {
    Query: {
        allPickUpGames: () => PickUpGames,
        PickUpGame: (args) => {
            return PickUpGames.find(PickUpGames => PickUpGames.id === args.id);
        }
    },
    Mutation: {
        // PICKUP GAME
        createPickupGame: (args) => {
            //TODO tékka hvort tímalengd pickUpGame sé amk 5min og í mestalagi 2 tímar
            //Check if BasketballField is closed
            if(args.status === 'CLOSED'){
                //TODO return viðeigandi error
                throw new errorMessages.BasketballFieldClosedError;
                return null;
            }
            //Check if start date is before end date
            if(args.start > args.end){
                //TODO return viðeigandi error
                throw new errorMessages.UserInputError;
                return null;
            }
            //Check if start or end date has already passed
            if(args.start > moment.format('llll') || args.end < moment.format('llll')){
                //TODO return viðeigandi error
                throw new errorMessages.PickupGameAlreadyPassedError;
                return null;
            }
            //Get basketballField
            BasketBallField = BasketBallFields.find(BasketBallFields => BasketBallFields.name === args.location);
            //Check if basketballField exists
            if(!BasketBallField){
                //Get All pickupGames on field
                pickUpGamesOnField = BasketBallField.PickUpGames;
                for (item in pickUpGamesOnField) {
                    //TODO Check if there are overlapping pickUpGames on Field
                    // WIP þurfum að tékka hvort tíminn á milli item.start og item.end falli inn á milli args.start og args.end
                    if (item.start === args.start){ 
                        throw new errorMessages.PickupGameOverlapError;
                        return null;
                        //TODO return viðeigandi error
                    }
                }
                //Create new PickupGame since no rules were broken
                var newPickUpGame = {
                    id: args.id,
                    ...args.input,
                    /*
                    start: args.start,
                    end: args.end,
                    location: args.location,
                    //Initialize registeredPlayers with host
                    registeredPlayers: [args.host],
                    host: args.host
                    */
                }
                PickUpGames.push(newPickUpGame);
                return newPickUpGame;
            }
        },
        removePickupGame: (parent, args) => {
            const pickupGame = PickUpGames.find(c=>c.id === args.id);
            const index = PickUpGames.indexOf(pickupGame);
            if(index === -1){return false;}
            PickUpGames.splice(index,1);
            return true;
        },

        // PLAYER-PICKUP GAME
        addPlayerToPickupGame: (parent, args) => {
            //Check if time of pickupGame has already passed
            if (parent.end < moment.format('llll')) {
                //TODO return viðeigandi error
                return null;
            }
            playersInPickupGame = parent.registeredPlayers;
            //Check if maximum capacity has been reached
            if (playersInPickupGame.length == parent.capacity) {
                //TODO return viðeigandi error
                return null;
            }
            for (item in playersInPickupGame) {
                //Check if Player is already signed up for game
                if (item.id === args.id) {
                    //TODO return viðeigandi error
                    return null;
                }
            }
            var playerForPickupGame = {
                id: args.id,
                ...args.input
                /*
                name: args.name,
                playedGames: args.playedGames
                */
            }
            //TODO setja nýjan player í PickupGame í stafrófsröð
            parent.registeredPlayers.push(playerForPickupGame);
            return parent;

        },
        removePlayerFromPickupGame: (parent, args) => {
            //Ekki hægt ef PickupGame er búinn
            //Ef Player er host, setja fyrsta Player í lista sem host
            //Ef Player er ekki skráður í leikinn, gera ekkert
            const pickupGame = PickUpGames.find(c=>c.id === args.puGid);
            if(pickupGame.end < moment.format('llll')){return false;}
            const player = pickupGame.registeredPlayers.find(c=> c.id === args.pid);
            const index = pickupGame.registeredPlayers.indexOf(player);
            if(index === -1){return false;}
            pickupGame.registeredPlayers.splice(index,1);
            return true;
        }
    }
};