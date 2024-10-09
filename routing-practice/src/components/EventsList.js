import { Link, useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";
function EventsList() {
  const events = useLoaderData();
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EventsList;
export async function Loader() {
  const response = await fetch("http://localhost:8080/eventsghjgh");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "server is not working!" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
