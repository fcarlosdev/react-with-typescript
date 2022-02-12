import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import { Person } from "./types/personType";
import izis from "./assets/images/izis.jpeg";
import bruna from "./assets/images/bruna.jpg";
import paula from "./assets/images/paula.jpeg";
import AddToList from "./components/AddToList";

function App() {
  const [people, setPeople] = useState<Person[]>([
    {
      name: "Izis",
      url: izis,
      age: 22,
      note: "Beautiful brown eyes",
    },
    {
      name: "Bruna",
      url: bruna,
      age: 26,
      note: "Perfect combination with the landscape",
    },
    {
      name: "Paula",
      url: paula,
      age: 28,
      note: "The perfect combination between blue eyes and ginger hair",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} addPerson={setPeople} />
    </div>
  );
}

export default App;
