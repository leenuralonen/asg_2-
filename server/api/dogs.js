export default defineEventHandler((event) => {
  async function getDogData() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all")
    const dogData = await res.json();
    const rawData = await dogData.message;
    const data = Object.keys(rawData);
    return data;
  }
  const data = getDogData();
  return data;
});