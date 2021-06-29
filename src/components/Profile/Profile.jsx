import React from "react";
import PropTypes from "prop-types";

import { GrOverview, GrLike, GrStakeholder } from "react-icons/gr";

import {
  Card,
  Photo,
  Name,
  Description,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsItemText,
} from "./Profile.styles";

const Profile = (props) => {
  console.log(props);
  const { avatar, name, tag, location, stats } = props;
  return (
    <div>
      <Card>
        <Description>
          <Photo src={avatar} alt="man-photos"></Photo>
          <Name>{name}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>
        <Stats>
          <StatsItem>
            <GrStakeholder />
            <StatsItemText>Followers</StatsItemText>
            <StatsItemText> {stats.followers}</StatsItemText>
          </StatsItem>
          <StatsItem>
            <GrOverview />
            <StatsItemText> Views </StatsItemText>
            <StatsItemText> {stats.views} </StatsItemText>
          </StatsItem>
          <StatsItem>
            <GrLike />
            <StatsItemText> Likes </StatsItemText>
            <StatsItemText>{stats.likes} </StatsItemText>{" "}
          </StatsItem>
        </Stats>
      </Card>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

// eslint-disable-next-line no-lone-blocks
{
  /* <div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>; */
}
// "followers": 5603,
//     "views": 4827,
//     "likes": 1308
