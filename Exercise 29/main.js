//  Fetch datw from Date Json file

async function fetchData() {
  console.log("starting fetching data");
  const response = await fetch("date.json");
  const data = await response.json();
  console.log("Fetched data:", data);
  console.log("Data fetched successfully");
}

fetchData();
