import React, { useMemo } from 'react';
import styled from '@theme/styled';
import { parsePublishedTime, parseTimeFromNow } from '@lib/functions';

interface Props {
  createdAt: number;
  lastUpdatedAt: number;
}

const TimeStamp = ({ createdAt, lastUpdatedAt }: Props): JSX.Element => {
  const publishedTime = useMemo(
    () => parsePublishedTime(createdAt),
    [createdAt],
  );

  const times = useMemo(
    () => (
      <>
        📎&nbsp; Published&nbsp;{publishedTime}, Updated&nbsp;
        {parseTimeFromNow(lastUpdatedAt)}
      </>
    ),
    [lastUpdatedAt, publishedTime],
  );

  return <StyledTimeStamp>{times}</StyledTimeStamp>;
};

export default TimeStamp;

const StyledTimeStamp = styled.time`
  display: block;
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.text.smoke};
  word-break: break-word;
  margin-top: 8px;
  margin-bottom: 0;
`;
