import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../../util/fetchData";
import ErrorBlock from "../UI/ErrorBlock";
import LoadingIndicator from "../UI/LoadingIndicator";
import EventItem from "./EventItem";
export default function FindEventSection() {
  const [ searchedText, setSearchedText ] = useState();
  const searchElement = useRef();
  let content;
  const navigate = useNavigate();
  const { data, isError, error, isPending } = useQuery({
    queryFn: ({ signal }) => {
    return  fetchEvents({ searchedText, signal });
    },
    queryKey: ["events", { search: searchedText }],
  });
  if (isPending) {
    content = <LoadingIndicator />;
  }
  if (data) {
    content = (
      <ul className="events-list">
        {data.map((events) => {
          return <li key={events.id}>{<EventItem event={events} />}</li>;
        })}
      </ul>
    );
  }
  if (isError) {
    if (error.info?.message) {
      content = (
        <ErrorBlock
          message={"error occured while creating an event!"}
          title={error.info?.message}
        />
      );
    }

    navigate("/events");
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSearchedText(searchElement.current.value);
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      <p>Please enter a search term and to find events.</p>
      {content}
    </section>
  );
}
