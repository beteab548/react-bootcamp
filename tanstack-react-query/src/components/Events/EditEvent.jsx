import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, updateEvent } from "../../util/fetchData.js";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id, signal });
    },
  });
  const {
    mutate,
    error: Error,
    isError: IsError,
  } = useMutation({ mutationFn: updateEvent });
  function handleSubmit(formData) {
    mutate({ id: id, event: formData });
    navigate("../");
  }
  function handleClose() {
    navigate("../");
  }
  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
