import userRepository from "../Repositories/userRepository.js";

export function getUserStarCount(first, second){
  let firstStarCount = 0;
  let secondStarCount = 0;

  for(let i = 0; i < second.length; i++){
    if(second[i].stargazers_count){
      secondStarCount += second[i].stargazers_count
    }
  }
  
  for(let i = 0; i < first.length; i++){
    if(first[i].stargazers_count){
      firstStarCount += first[i].stargazers_count
    }
  }
  
  return {
    firstStarCount,
    secondStarCount
  }
};

export function compareUsers(firstUser, secondUser, firstStarCount, secondStarCount){
  let result: Object;

  if(firstStarCount > secondStarCount){
    result = {
      "winner": firstUser,
      "loser": secondUser,
      "draw": false
    }
  }
  
  if(firstStarCount < secondStarCount){
    result = {
      "winner": secondUser,
      "loser": firstUser,
      "draw": false
    }
  };

  if(firstStarCount === secondStarCount){
    result = {
      "winner": null,
      "loser": null,
      "draw": true
    }
  }

  return result;
};

export async function updateDatabase(result){
  if(result.draw){
    await userRepository.updateFighter(result.winner, 'draws');
    await userRepository.updateFighter(result.loser, 'draws');
  };

  const winnerRequest = await userRepository.findFighter(result.winner);

  if(winnerRequest.rows.length === 0){
    await userRepository.insertFighter(result.winner);
  }

  const loserRequest = await userRepository.findFighter(result.loser);

  if(loserRequest.rows.length === 0){
    await userRepository.insertFighter(result.loser);
  }

  await userRepository.updateFighter(result.winner, 'wins');
  await userRepository.updateFighter(result.loser, 'losses');
};