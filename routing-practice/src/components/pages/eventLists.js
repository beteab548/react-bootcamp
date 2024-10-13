import { Await, defer, useLoaderData } from "react-router-dom";
import EventsList from "../EventsList";
import { Suspense } from "react";

function EventLists() {
  const { events } = useLoaderData();
  return (
    <Suspense
      fallback={
        <p style={{ textAlign: "center", backgroundColor: "grey" }}>
          loading...
        </p>
      }
    >
      <Await resolve={events} errorElement={<p>error occured</p>}>
        {(events) => {
          return <EventsList events={events} />;
        }}
      </Await>
    </Suspense>
  );
}
export default EventLists;
async function fetchEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "server is not working now!" }),
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
export async function Loader() {
  return defer({
    events: fetchEvents(),
  });
}
