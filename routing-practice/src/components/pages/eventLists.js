import { Await, defer, useLoaderData } from "react-router-dom";
import EventsList from "../EventsList";

function EventLists() {
  const events = useLoaderData();
  console.log(events);
  <React.Suspense fallback="loading">
    <Await resolve={events}>
      {(events) => {
        return <EventsList events={events} />;
      }}
    </Await>
  </React.Suspense>;
}
export default EventLists;
export async function Loader() {
  const response = fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "server is not working!" }), {
      status: 500,
    });
  } else {
    return defer({ eventsData: response });
  }
}
