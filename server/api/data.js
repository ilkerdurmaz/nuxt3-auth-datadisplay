import getData from "../../services/apiService";

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

  const paginatedData = paginate(data, size);

  return {
    status: 200,
    data: paginatedData[page],
    pageAmount: paginatedData.length,
  };
});
