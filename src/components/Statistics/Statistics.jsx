import React from "react";
import PropTypes from "prop-types";
import {
  Section,
  StatsList,
  Title,
  StatsItemTextStatistics,
  StatsItemStatistics,
} from "./Statistics.styles";

const Statistics = (props) => {
  const { title = "", stats } = props;
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItemStatistics
            key={id}
            style={{
              backgroundColor:
                "#" +
                (Math.random().toString(16) + "000000")
                  .substring(2, 8)
                  .toUpperCase(),
            }}
          >
            <StatsItemTextStatistics>{label}</StatsItemTextStatistics>
            <StatsItemTextStatistics>{percentage}</StatsItemTextStatistics>
          </StatsItemStatistics>
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
