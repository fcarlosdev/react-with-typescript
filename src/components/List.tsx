import React from "react";
import { Person } from "../types/personType";

interface Props {
  people: Person[];
}

const List: React.FC<Props> = ({ people }) => {
  const listPerson = (): JSX.Element[] => {
    return people.map((person) => {
        console.log(person.url)
      return (
        <li key={person.name||people.length} className="list">
          <div className="list-header">
            <img src={person.url} alt="person" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p>{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{listPerson()}</ul>;
};

export default List;
