import getData from "../../services/apiService";
import jwt from "jsonwebtoken";

function paginate(arr, size) {
  return arr.reduce((acc, value, index) => {
    let idx = Math.floor(index / size);
    let page = acc[idx] || (acc[idx] = []);
    page.push(value);
    return acc;
  }, []);
}

export default defineEventHandler(async (event) => {
  const data = await getData("data");
  const { page, size } = await getQuery(event);

  try {
    const token = event.node.req.headers.authorization;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const paginatedData = paginate(data, size);

    if (Date.now() > verify.exp * 1000) {
      return {
        status: 401,
      };
    }

    if (verify.email === JSON.parse(getCookie(event, "authCookie")).email) {
      return {
        status: 200,
        data: paginatedData[page],
        pageAmount: paginatedData.length,
      };
    } else {
      return {
        status: 401,
      };
    }
  } catch (e) {
    return {
      status: 401,
    };
  }
});
