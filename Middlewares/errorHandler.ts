export default function errorHandler(error, req, res, next){
  if(error.code === 422) return res.status(error.code).send(error.message);
  if(error.code === 400) return res.status(error.code).send(error.message);
  return res.sendStatus(500);
}