var moment = require('moment')
//TODO sækja PickupGames í MongoDB og setja í pickupGames
//PickupGames = []
//TODO sækja líka BasketballFields
//BasketballFields = []

const pickupGameResolver = {
    Query: {
        allPickupGames: () => PickupGames,
        pickupGame: (args) => {
            return PickupGames.find(PickupGames => PickupGames.id === args.id);
        }
    },
    Mutations: {
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
            basketballField = BasketballFields.find(BasketballFields => BasketballFields.name === args.location);
            //Check if basketballField exists
            if(!basketballField){
                //Get All pickupGames on field
                pickUpGamesOnField = basketballField.pickUpGames;
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
                    start: args.start,
                    end: args.end,
                    location: args.location,
                    //Initialize registeredPlayers with host
                    registeredPlayers: [args.host],
                    host: args.host
                }
                PickupGames.push(newPickUpGame);
                return newPickUpGame;
            }
        },
        removePickupGame: (parent, args) => {

        },
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
                name: args.name,
                playedGames: args.playedGames
            }
            //TODO setja nýjan player í PickupGame í stafrófsröð
            parent.registeredPlayers.push(playerForPickupGame);
            return parent;

        },
        removePlayerFromPickupGame: (parent, args) => {
            //Ekki hægt ef PickupGame er búinn
            //Ef Player er host, setja fyrsta Player í lista sem host
            //Ef Player er ekki skráður í leikinn, gera ekkert

        }
    }
}

module.exports = {pickupGameResolver};