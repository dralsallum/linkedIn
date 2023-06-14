import React from "react";
import {
  PostContainer,
  PostHeader,
  PostInfo,
  PostBody,
  PostSubHeader,
  PostSubPara,
  PostButtons,
  PostSubParaBody,
} from "./Post.elements";
import { Avatar } from "@mui/material";
import {
  ThumbUpAltOutlined,
  ChatOutlined,
  ShareOutlined,
  SendOutlined,
} from "@mui/icons-material";
import InputOption from "../InputOption/InputOption";
import MyAvatar from "../../assets/MyAvatar.png";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar src={MyAvatar} />
        <PostInfo>
          <PostSubHeader>{name}</PostSubHeader>
          <PostSubPara>{description}</PostSubPara>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <PostSubParaBody>{message}</PostSubParaBody>
      </PostBody>

      <PostButtons>
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </PostButtons>
    </PostContainer>
  );
};

export default Post;
