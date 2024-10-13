import { Await, defer, useLoaderData } from "react-router-dom";
import EventsList from "../EventsList";
import { Suspense } from "react";

function EventLists() {
  const { eventsData } = useLoaderData();
  console.log(eventsData);
  return (
    <Suspense
      fallback={
        <p style={{ textAlign: "center", backgroundColor: "red" }}>
          loading...
        </p>
      }
    >
      <Await resolve={eventsData} errorElement={<p>error occured</p>}>
        {(events) => {
          return <EventsList events={events} />;
        }}
      </Await>
    </Suspense>
  );
}
export default EventLists;
export async function Loader() {
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
    return defer({ eventsData: resData.events });
  }
}
