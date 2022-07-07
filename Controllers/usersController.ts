import { Request, Response } from "express";
import userRepository from "../Repositories/userRepository.js";
import { updateDatabase } from "../Services/usersService.js";

export async function compareStars(req: Request, res: Response){
  const { firstStarCount, secondStarCount, result } = res.locals;
  try {
    updateDatabase(result)
    return res.send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

export async function getRanking(req: Request, res: Response){
  try {
    const rankingRequest = await userRepository.getRanking();
    res.send(rankingRequest.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
}