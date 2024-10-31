import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImagePicker from "../ImagePicker.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNewEvent, fetchSelectableImages } from "../../util/fetchData.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { QueryClients } from "../../App.jsx";
export default function EventForm({ inputData, onSubmit, children }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(inputData?.image); 
  const { data, isLoading, isError } = useQuery({
    queryFn: fetchSelectableImages,
    queryKey: ["images"],
  });
  const { mutate, isPending, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
QueryClients.invalidateQueries({queryKey:['events']})
      navigate("../");
    },
  });
  let content;
  if (isError) {
    content = <ErrorBlock title={"error occured while fetching images!"} />;
  }

  function handleSelectImage(image) {
    setSelectedImage(image);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit({ ...data, image: selectedImage });
    mutate({ event: { ...data, image: selectedImage } });
  }

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      <p className="control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={inputData?.title ?? ""}
        />
      </p>
      <div className="control">
        {content}
        <ImagePicker
          images={data ? data : []}
          onSelect={handleSelectImage}
          selectedImage={selectedImage}
        />
      </div>

      <p className="control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={inputData?.description ?? ""}
        />
      </p>

      <div className="controls-row">
        <p className="control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={inputData?.date ?? ""}
          />
        </p>

        <p className="control">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={inputData?.time ?? ""}
          />
        </p>
      </div>

      <p className="control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={inputData?.location ?? ""}
        />
      </p>

      <p className="form-actions">{children}</p>
    </form>
  );
}
