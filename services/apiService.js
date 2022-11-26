const url = "https://my-json-server.typicode.com/ilkerdurmaz/database/";

const getData = async (endpoint) => {
  const result = await $fetch(url + endpoint);
  return result;
};

export default getData;
