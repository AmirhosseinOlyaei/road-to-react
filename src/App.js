import * as React from "react";

function getTitle(title) {
  return title;
}

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function List() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> by {item.author}</span>
          <span>({item.num_comments})</span>
          <span>({item.points})</span>
        </li>
      ))}
    </ul>
  );
}

function Search() {
  return (
    <>
      <lable htmlFor="search">Search: </lable>
      <input id="search" type="text"></input>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Hello, {getTitle("React")}</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

export default App;
