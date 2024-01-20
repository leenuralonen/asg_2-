export default defineEventHandler((event) => {
  async function getDogData() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    // parse the data so JS can read it
    const dogData = await res.json();
    return dogData;
  }
  const data = getDogData();
  return data;
});