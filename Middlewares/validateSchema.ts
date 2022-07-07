import { NextFunction, Request, Response } from "express";
import { ObjectPropertiesSchema } from "joi";

export function validateSchema(schema:ObjectPropertiesSchema){
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {abortEarly: false});
    if(error){
      throw {type: "schemaError", message: "Invalid Schema", code: 422}
    }
    next();
  } 
};