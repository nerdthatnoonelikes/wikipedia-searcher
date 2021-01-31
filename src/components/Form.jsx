import React from "react";
import { useForm } from "react-hook-form";

import Button from "./Button";

import fetch from "node-fetch";

import Result from "./Result";

let title;
let text;

const Form = ({ message }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${data.query}&gsrlimit=20&prop=pageimages|extracts&exchars=65&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const response = await fetch(encodeURI(url));
    const res = await response.json();
    const values = Object.values(res.query.pages)[0];
    title = values.title;
    text = values.extract;
    console.log(title);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ textAlign: "center" }}>{message}</p>
        <input name="query" ref={register({ required: true })} />
        <Button type="submit" label="Search!" />
      </form>

      <Result title={title} text={text} />
    </>
  );
};

export default Form;
