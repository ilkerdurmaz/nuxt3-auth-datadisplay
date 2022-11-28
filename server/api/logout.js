export default defineEventHandler(async (event) => {
  deleteCookie(event, "authCookie", {});
  return {
    status: 200,
  };
});
