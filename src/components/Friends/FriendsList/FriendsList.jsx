import React from "react";
import PropTypes from "prop-types";
import { FriendsListUl } from "./FriendsList.styles";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsList = (props) => {
  return (
    <FriendsListUl>
      <FriendsListItem {...props}></FriendsListItem>
    </FriendsListUl>
  );
};

FriendsList.propTypes = {
  props: PropTypes.any,
};

export default FriendsList;
