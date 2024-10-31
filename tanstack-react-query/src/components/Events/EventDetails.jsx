import { Link, useNavigate, Outlet, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent } from "../../util/fetchData.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { QueryClients } from "../../App.jsx";

export default function EventDetails() {
  const { id } = useParams();
  const Navigate=useNavigate()
  console.log(id);
  let content;
  const { data, isError, isFetching, error } = useQuery({
    queryFn: ({ signal }) => {
      return fetchEvent({ id, signal });
    },
    queryKey: ["events", id],
  });
  const { mutate, isSuccess } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      QueryClients.invalidateQueries({ queryKey: ["events"],refetchType:'none' });
      Navigate("/events");
    },
  });
  if (isError) {
    content = <ErrorBlock title={"event-detail not fetched correctly!"} />;
  }
  if (isFetching) {
    content = <LoadingIndicator />;
  }
  if (data) {
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.image} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {data.date}@ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.DESCRIPTION} </p>
          </div>
        </div>
      </>
    );
  }
  function handleDelete() {
    mutate({ id: id });
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
