export function getTournaments(){
    var data = require('./data/tournaments.json');
    return  data["tournaments"];
}