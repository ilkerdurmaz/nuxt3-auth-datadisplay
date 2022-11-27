import getData from "../../services/apiService";

export default defineEventHandler(async (event) => {
  const data = await getData("data");

  return {
    status: 200,
    data,
  };
});
