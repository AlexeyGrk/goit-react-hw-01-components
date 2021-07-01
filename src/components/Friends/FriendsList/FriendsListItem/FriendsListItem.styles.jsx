import styled from "@emotion/styled";

export const FriendsListItemCard = styled.li`
  width: 120x;
  display: flex;
  align-items: center;
  background-color: #87abe3;
`;
export const FriendsListItemStatus = styled.span`
  color: ${(props) => (props.status ? "hotpink" : "turquoise")};
  margin: 10px;
`;
export const FriendsListItemImg = styled.img`
  width: 30px;
  margin: 10px;
`;
export const FriendsListItemName = styled.p`
  margin: 10px;
`;
