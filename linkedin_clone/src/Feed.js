import React, { useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          {/* Icon */}
          <form>
            <input type="text" />
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
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Jalaal Jama"
        description="This is a test"
        message="Vidication"
      />
    </div>
  );
}

export default Feed;
