import { Request, Response } from "express";
import userRepository from "../Repositories/userRepository.js";
import { compareUsers, getUserStarCount, updateDatabase } from "../Services/usersService.js";

export async function compareStars(req: Request, res: Response){
  const { firstUser, secondUser } = req.body;
  const { first, second } = res.locals;
  const starCount = getUserStarCount(first, second);
  const result = compareUsers(firstUser, secondUser, starCount.firstStarCount, starCount.secondStarCount);
  updateDatabase(result)
  return res.send(result);
};

export async function getRanking(req: Request, res: Response){
  const rankingRequest = await userRepository.getRanking();
  res.send(rankingRequest.rows);
}