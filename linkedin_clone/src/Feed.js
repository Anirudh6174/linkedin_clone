import SelectInput from "@mui/material/Select/SelectInput";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Sigmeyer of Catarina",
      description: "stuck",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          {/* Icon */}
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption /* Icon={ImageIcon} */ title="Photo" color="70B5F9" />
          <InputOption
            /* Icon={SubscriptionIcon} */ title="Video"
            color="E7A33E"
          />
          <InputOption
            /* Icon={EventNoteIcon} */ title="Event"
            color="C0CBCD"
          />
          <InputOption
            /* Icon={CalenderViewDayIcon} */ title="Write Article"
            color="7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          mssage={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
