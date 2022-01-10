import React, { useState, useEffect } from "react";
import "./App.less";
import "./style/style.css";
import axios from "axios";

const App = () => {
  const [state, setState] = useState<any>({});

  const getList = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/")
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });

    return;
  };

  const getData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/2/");
      const posts = await res.json();
      console.log(posts);
      setState(posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getList();
    console.log("fwefwefe");
  }, []);

  return (
    <React.Fragment>
      {/* {state.posts.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.content}</span>
        </div>
      ))} */}
    </React.Fragment>
  );
};

export default App;
