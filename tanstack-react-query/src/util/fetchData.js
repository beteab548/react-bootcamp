export async function fetchEvents({ searchText }) {
  console.log(searchText);
  let URL = "http://localhost:3000/events";
  if (!searchText) {
    URL = URL+ "?searchText=" + searchText;
  }
  const response = await fetch(URL);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { events } = await response.json();
  return events;
}
