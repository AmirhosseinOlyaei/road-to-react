import * as React from "react";

function getTitle(title) {
  return title;
}

function List(props) {
  return (
    <div>
      {/* <h2>{props.title}</h2> */}
      <ul>
        {props.list.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

const Item = ({ item }) => {
  // const { item } = props;
  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> by {item.author}</span>
      <span>({item.num_comments})</span>
      <span>({item.points})</span>
    </li>
  );
};

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };
  // const handleMouseOver = (event) => console.log(event);

  return (
    <>
      <lable htmlFor="search">Search: </lable>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        // onMouseOver={handleMouseOver}
      ></input>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </>
  );
}

function App() {
  const stories = [
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

  // const javascriptLibraries = [
  //   {
  //     title: "jQuery",
  //     url: "https://jquery.org/",
  //     author: "John Resig",
  //     num_comments: 3,
  //     points: 4,
  //     objectID: 0,
  //   },
  //   {
  //     title: "Angular",
  //     url: "https://angularjs.org/",
  //     author: "Google",
  //     num_comments: 2,
  //     points: 5,
  //     objectID: 1,
  //   },
  // ];

  return (
    <div>
      <h1>Hello, {getTitle("React")}</h1>
      <Search />
      <hr />
      <List list={stories} />
      {/* <List list={javascriptLibraries} title="JavaScript Libraries" /> */}
    </div>
  );
}

export default App;
