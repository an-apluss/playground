

function solution(P, C) {
    if (P <= 1 || C < 1 || P > 30000 || C > 30000) return 0;

    var playersModulus = P%2;

    switch(playersModulus) {
        case 0:
            var groupedPlayers0 = P/2;
            if (groupedPlayers0 < C) return groupedPlayers0;
            if (groupedPlayers0 > C) return C;
        case 1:
           var groupedPlayers1 = parseInt(P/2, 10);
           if (groupedPlayers1 < C) return groupedPlayers1;
           if (groupedPlayers1 > C) return C;
           if (groupedPlayers1 === C) return groupedPlayers1 || C;
    }
}

module.exports = solution;