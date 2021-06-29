import styled from "@emotion/styled";

export const Card = styled.div`
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 40px;
  background-color: ;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const Tag = styled.p`
  margin: 0;
  color: #b8b8b8;
`;
export const Location = styled.p`
  margin: 10px;
  color: #b8b8b8;
`;
export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-top: 5px;
`;
export const StatsItem = styled.li`
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid;
`;
export const StatsItemText = styled.span`
  margin: 5px;
`;
