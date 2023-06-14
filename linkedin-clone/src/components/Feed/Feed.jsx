import React, { useState, useEffect } from "react";
import {
  FeedContainer,
  FeedForm,
  FeedInputContainer,
  Feedinput,
  FeedFormInput,
  CreatePen,
  FeedButton,
  FeedInputOptions,
} from "./Feed.elements";
import Post from "../Post/Post";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventIcon from "@mui/icons-material/Event";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { db } from "../Firebase/Firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timeStamp", "desc")
    );
    const unsubscribe = onSnapshot(postsQuery, (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsubscribe;
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      name: "Saud Alsallum",
      description: "this is a text post",
      message: input,
      photoUrl: "",
      timeStamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <FeedContainer>
      <FeedInputContainer>
        <Feedinput>
          <CreatePen />
          <FeedForm>
            <FeedFormInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="write your thoughts"
            />
            <FeedButton onClick={sendPost} type="submit">
              Send
            </FeedButton>
          </FeedForm>
        </Feedinput>
        <FeedInputOptions>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventIcon} title="Event" color="#C7CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </FeedInputOptions>
      </FeedInputContainer>
      {posts
        .reverse()
        .map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
    </FeedContainer>
  );
};

export default Feed;
