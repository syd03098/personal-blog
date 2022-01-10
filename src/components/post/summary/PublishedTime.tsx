import { css } from '@emotion/react';
import { parsePublishedTime, parseTimeFromNow } from '@lib/time/functions';
import React, { useMemo } from 'react';

interface Props {
  createdAt: number;
  lastUpdatedAt: number;
}

function PublishedTime({ createdAt, lastUpdatedAt }: Props): JSX.Element {
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

  return (
    <time
      css={css`
        display: block;
        font-size: 14px;
        color: var(--text-smoke);
        letter-spacing: normal;
        word-break: break-word;
        margin-top: 0.875rem;
        margin-bottom: 0;
      `}
    >
      {times}
    </time>
  );
}

export default PublishedTime;
