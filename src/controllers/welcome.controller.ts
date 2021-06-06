import { Handler } from "src/types/handler";

export const Wel: Handler = async (req, res) => {
  try {
    return res.status(200).send("Express + Typescript serversss");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
