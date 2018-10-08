greatBuilding = {
  requestId: -1,
  requiredFP: 0,
  process: function (method, data, id) {
    if (trace) {
      console.log(method, data);
    }
    switch (method) {
      case 'getConstruction':
        if (greatBuilding.requestId != id) {
          console.error('Wrong id ' + id + ', expected ' + greatBuilding.requestId);
          return;
        }

        investedFP = 0;
        userFP = 0;
        userIndex = -1;
        for (var i = 0; i < data.rankings.length; i++) {
          ranking = data.rankings[i];
          if (ranking.forge_points) {
            investedFP += ranking.forge_points;
            if (ranking.player.is_self) {
              userIndex = i;
              userFP = ranking.forge_points;
            }
          }
        }
        freeFP = (greatBuilding.requiredFP - investedFP);

        if (debug) {
          console.log('free SP: ' + freeFP + ' (' + (freeFP / 2) + ')');
          console.log('user (#' + (userIndex + 1) + '): ' + userFP);
        }

        var fpAnalysis = [];
        var rank = 0;
        var i = -1;
        while (rank <= 5 && i < data.rankings.length - 1) {
          i++;
          ranking = data.rankings[i];
          if (ranking.reward === undefined) {
            // Probably (hopefully) owner
            continue;
          }
          rank = ranking.rank;

          var investedByOthers = 0;
          var bestSpotFP = greatBuilding.requiredFP;
          var rankj = 0;
          var j = i + 1;
          while (rankj <= 5 && j >= 1) {
            j--;
            if (data.rankings[j].reward === undefined) {
              // Probably (hopefully) owner
              continue;
            }
            rankj = data.rankings[j].rank;

            // TODO Doesn't work properly with userFP != 0
            investedByOthers += (data.rankings[j].forge_points || 0);
            tmp = Math.ceil((freeFP + investedByOthers + j - i) / (i - j + 2));
            if (tmp <= data.rankings[j].forge_points) {
              tmp = data.rankings[j].forge_points + 1;
            }
            if (tmp < bestSpotFP) {
              bestSpotFP = tmp;
            }
          }

          if (bestSpotFP > freeFP) {
            fpAnalysis.push(false);
          }

          profit = (ranking.reward.strategy_point_amount || 0) - bestSpotFP;

          fpAnalysis.push({
            spotSafe: bestSpotFP,
            profit: profit,
            reward: {
              // TODO Arc bonus missing
              fp: ranking.reward.strategy_point_amount,
              blueprints: ranking.reward.blueprints,
              medals: ranking.reward.resources.medals
            }
          });
        }

        if (debug) {
          console.log(fpAnalysis);
        }

        sendMessageCache({gbFpAnalysis: fpAnalysis});
        break;
      default:
        if (trace || debug) {
          console.log(method + ' is not used');
        }
    }
  },
  storeBuildingInfo: function (requestId, requiredFP) {
    greatBuilding.requestId = requestId;
    greatBuilding.requiredFP = requiredFP;
  }
};
