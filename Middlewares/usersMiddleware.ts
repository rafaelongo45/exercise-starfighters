import axios from "axios";
import { NextFunction, Request, Response } from "express";

export async function getUserRepos(req: Request, res: Response, next: NextFunction){
  const { firstUser, secondUser } = req.body;
  let first: Object;
  let second: Object;
  try {
    await axios.get(`https://api.github.com/users/${firstUser}/repos`)
    .then(response => first = response.data)
    .catch(err => res.sendStatus(400));
    await axios.get(`https://api.github.com/users/${secondUser}/repos`)
    .then(response => second = response.data)
    .catch(err => res.sendStatus(400));

    res.locals.first = first;
    res.locals.second = second;
    next();
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
}