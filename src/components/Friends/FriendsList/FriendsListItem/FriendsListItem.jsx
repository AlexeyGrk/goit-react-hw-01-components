import React from "react";
import PropTypes from "prop-types";
import {
  FriendsListItemCard,
  FriendsListItemStatus,
  FriendsListItemImg,
  FriendsListItemName,
} from "./FriendsListItem.styles";

const FriendsListItem = (props) => {
  const { friends } = props;
  return (
    <>
      {friends.map(({ isOnline, name, avatar, id }) => (
        <FriendsListItemCard key={id}>
          <FriendsListItemStatus status={isOnline}>☻</FriendsListItemStatus>
          <FriendsListItemImg src={avatar} />
          <FriendsListItemName>{name}</FriendsListItemName>
        </FriendsListItemCard>
      ))}
    </>
  );
};

FriendsListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendsListItem;
