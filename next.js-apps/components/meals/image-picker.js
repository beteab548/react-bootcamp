"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ lable, name }) {
  const imagePicker = useRef();
  const [imagePicked, setImagePicker] = useState();
  function imageSubmit() {
    imagePicker.current.click();
  }
  function handleImagePicked(event) {
    const file = event.target.files[0];
    if (!file) {
      console.log('no file');
      setImagePicker(null);
      return;
    }
    console.log(file);
    const Filereader = new FileReader(file);
    Filereader.readAsDataURL(file);
    Filereader.onload = () => {
      setImagePicker(Filereader.result);
    };
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{lable}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png,image,jpeg"
          name={name}
          ref={imagePicker}
          onChange={handleImagePicked}
          required
        />
      </div>
      <button className={classes.button} onClick={imageSubmit}>
        pick image
      </button>
      <hr />
      <div className={classes.preview}>
        {!imagePicked && <p>no image picked yet!</p>}
        {imagePicked && (
          <Image src={imagePicked} fill alt="image pocked by the user" />
        )}
      </div>
      <hr />
    </div>
  );
}
