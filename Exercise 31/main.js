//  HTTP Requests GET

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Before parsing JSON", response);
    const data = await response.json();
    console.log("After parsing JSON", data);
  } catch (error) {
    console.log(error);
  }
}
getData();
