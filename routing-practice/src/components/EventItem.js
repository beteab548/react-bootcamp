import { Link, useParams } from "react-router-dom";
import classes from "./EventItem.module.css";
const dummyEvents = [
  {
    id: "e1",
    title: "A dummy event",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e2",
    title: "A dummy event-2",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];

function EventItem({ event }) {
  const param = useParams();
  const eventItem = dummyEvents.filter((events) => {
    return events.id === param.eventID;
  });
  function startDeleteHandler() {
    // ...
  }
  return (
    <article className={classes.event}>
      <img src={eventItem[0].image} alt={eventItem[0].title} />
      <h1>{eventItem[0].title}</h1>
      <time>{eventItem[0].date}</time>
      <p>{eventItem[0].description}</p>
      <menu className={classes.actions}>
        <Link to={`/events/${eventItem[0].id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
