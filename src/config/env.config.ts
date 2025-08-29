import dotenv from "dotenv";
dotenv.config({ path: "./.env", quiet: true });
import env from "env-var";

export default {
  PORT: env.get("PORT").required().asPortNumber(),
};
