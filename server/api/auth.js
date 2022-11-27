import jwt from "jsonwebtoken";
import getData from "../../services/apiService";
const secretKey = process.env.SECRET_KEY;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  const apiUser = await getData("users");
  const user = apiUser[0];

  if (email === user.email && password === user.password) {
    const token = await jwt.sign({ email }, secretKey, { expiresIn: "1h" });
    return {
      status: 200,
      token: token,
      message: "Authentication successful!",
      expire: 3600,
      userData: { email: email },
    };
  }
  return {
    status: 401,
    message: "Authentication Error!",
  };
});
