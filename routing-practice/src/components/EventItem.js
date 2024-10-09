import { Link, Outlet, useRouteLoaderData } from "react-router-dom";
import classes from "./EventItem.module.css";
function EventItem() {
  const  {event}  = useRouteLoaderData('event-loader');
  function startDeleteHandler() {
    // ...
  }
  return (
    <>
      <article className={classes.event}>
        <img src={event.image} alt={event.title} />
        <h1>{event.title}</h1>
        <time>{event.date}</time>
        <p>{event.description}</p>
        <menu className={classes.actions}>
          <Link to={`/events/${event.id}/edit`}>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      </article>
      <Outlet />
    </>
  );
}

export default EventItem;
export async function eventLoader({ request, params }) {
  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "this event is not available!" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
