import React from 'react';
import { ExtendedRecordMap } from 'notion-types';
import {
  PostContextProvider,
  usePostContext,
} from '@components/PostContentsView/context';
import ContentBlock from '@components/PostContentsView/ContentBlock';

interface Props {
  recordMap: ExtendedRecordMap;
}

const ContentsRenderer = ({ pageId }: { pageId: string }): JSX.Element => {
  const { rootRecordMap } = usePostContext();

  const block = rootRecordMap.block[pageId]?.value;
  if (!block) {
    return <></>;
  }

  return (
    <ContentBlock key={block.id} block={block}>
      {block.content?.map((blockId) => (
        <ContentsRenderer key={blockId} pageId={blockId} />
      ))}
    </ContentBlock>
  );
};

export const PostContentsView = ({ recordMap }: Props): JSX.Element => {
  const rootPageId = Object.values(recordMap.block).find(
    ({ value }) => value?.type === 'page',
  )?.value?.id;

  return (
    <>
      <PostContextProvider recordMap={recordMap}>
        <ContentsRenderer pageId={rootPageId} />
      </PostContextProvider>
    </>
  );
};

export default PostContentsView;
