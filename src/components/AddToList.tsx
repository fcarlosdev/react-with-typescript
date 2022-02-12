import React, { useState } from "react";
import { Person } from "../types/personType";

interface PeopleState {
  people: Person[];
  addPerson: React.Dispatch<Person[]>;
}

const AddToList: React.FC<PeopleState> = ({ people, addPerson }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.image) {
      return;
    }
    addPerson([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        url: input.image,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      image: "",
      note: "",
    });
  };

  return (
    <div className="addto-list">
      <input
        type="text"
        placeholder="Name"
        className="addto-list-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="addto-list-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="addto-list-input"
        value={input.image}
        onChange={handleChange}
        name="image"
      />
      <textarea
        placeholder="Notes"
        value={input.note}
        onChange={handleChange}
        name="note"
      ></textarea>
      <button className="addto-list-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
