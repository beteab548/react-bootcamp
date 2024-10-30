export async function fetchEvents( {signal,searchedText} ) {
  console.log(searchedText);
  let URL = "http://localhost:3000/events";
  if (searchedText) {
    URL = URL+ "?search=" + searchedText;
  }
  const response = await fetch(URL,{signal:signal});
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { events } = await response.json();
  return events;
}
