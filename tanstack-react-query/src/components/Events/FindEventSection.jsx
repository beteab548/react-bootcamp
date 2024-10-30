import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../../util/fetchData";
import ErrorBlock from "../UI/ErrorBlock";
export default function FindEventSection() {
  const searchElement = useRef();
  const { searchedText, setSearchedText } = useState();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    let custom;
    setSearchedText(searchElement.current.value);
    const { data, isError, error, isPending } = useQuery({
      queryFn: () => {
        fetchEvents(searchedText);
      },
      queryKey: ["events", { search: searchedText }],
    });
    if (data) {
      custom = (
        <ui>
          {data.map((events) => {
            return <li key={events}>{events}</li>;
          })}
        </ui>
      );
    }
    if (isError) {
      custom = () => {
      };
    if(error.info?.message){
      custom=()=>{return           <ErrorBlock message={"error occured while creating an event!"} title={ErrorBlock.info?.message}/>
    }
    }
    navigate("/events");
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
      {custom}
    </section>
  );
}}
