import joi from "joi";

const usersSchema = joi.object({
  firstUser: joi.string().required(),
  secondUser: joi.string().required()
});

export default usersSchema;