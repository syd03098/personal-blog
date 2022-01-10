import ContentBlock from '@components/post/ContentsBlock';
import { PostContextProvider, usePostContext } from '@components/post/Context';
import { ExtendedRecordMap } from 'notion-types';
import React from 'react';

interface Props {
  recordMap: ExtendedRecordMap;
}

function ContentsRenderer({ pageId }: { pageId?: string }): JSX.Element {
  const { rootRecordMap } = usePostContext();

  if (!pageId) {
    return <></>;
  }

  const block = rootRecordMap.block[pageId]?.value;

  return (
    <ContentBlock key={block.id} block={block}>
      {block.content?.map((blockId) => (
        <ContentsRenderer key={blockId} pageId={blockId} />
      ))}
    </ContentBlock>
  );
}

export function PostRenderer({ recordMap }: Props): JSX.Element {
  const rootPageId = Object.values(recordMap.block).find(
    ({ value }) => value?.type === 'page',
  )?.value?.id;

  return (
    <PostContextProvider recordMap={recordMap}>
      <ContentsRenderer pageId={rootPageId} />
    </PostContextProvider>
  );
}

export default PostRenderer;
