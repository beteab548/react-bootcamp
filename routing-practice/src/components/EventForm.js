import {
  useNavigate,
  useRouteLoaderData,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import classes from "./EventForm.module.css";
function EventForm() {
  const event = useRouteLoaderData("event-loader") || null;
  // console.log(event);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }
  // async function handelSaveButton(e, event) {
  // e.preventDefault();
  // console.log(event.id);
  // try {
  //   await fetch(`http://localhost:8080/events/${event.id}`, {
  //     method: "patch",
  //     body: JSON.stringify(event),
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
  // // const data = await response.json();
  // // console.log(data);
  // navigate(`/events/${event.id}`);
  // }
  return (
    <Form method="POST" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "Save"}
        </button>
      </div>
    </Form>
  );
}
export default EventForm;
export async function createEvent({ request }) {
  const response = await request.formData();
  const formData = {
    title: response.get("title"),
    image: response.get("image"),
    description: response.get("description"),
    date: response.get("date"),
  };
  const res = await fetch("http://localhost:8080/events", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    throw new Response(
      JSON.stringify({ message: "failed creating new events" }),
      { status: 500 }
    );
  } else {
    return redirect("/events");
  }
}
