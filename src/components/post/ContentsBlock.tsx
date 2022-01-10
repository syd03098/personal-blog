import { usePostContext } from '@components/post/Context';
import LazyImage from '@components/post/lazyImage';
import Page from '@components/post/Page';
import Text from '@components/post/Text';
import PrismCode from '@components/PrismCode';
import styled from '@emotion/styled';
import { Block, ImageBlock } from 'notion-types';
import React, { PropsWithChildren, ReactNode } from 'react';

interface Props {
  block: Block;
}

function ContentBlock({
  block,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const { rootRecordMap } = usePostContext();

  if (!block) {
    return <></>;
  }

  switch (block.type) {
    case 'page':
      return <Page>{children}</Page>;

    case 'header':
    case 'sub_header':
    case 'sub_sub_header': {
      if (!block?.properties) {
        return <></>;
      }

      const contents = block.properties?.title?.[0]?.[0];
      const id = contents.trim() ?? undefined;

      return (
        <h2 id={id}>
          <Text block={block} />
        </h2>
      );
    }

    case 'code': {
      if (!block?.properties?.title) {
        return <></>;
      }

      const { language, title: codes } = block.properties;
      return <PrismCode code={codes[0][0]} language={language[0][0]} />;
    }

    case 'bulleted_list': {
      const wrap = (contents: ReactNode) => <ul>{contents}</ul>;
      const parentBlockType = rootRecordMap.block[block.parent_id]?.value?.type;

      let output: JSX.Element = <></>;

      if (block.content) {
        output = (
          <>
            {block.properties && (
              <li>
                <Text block={block} />
              </li>
            )}
            {wrap(children)}
          </>
        );
      } else {
        output = block.properties ? (
          <li>
            <Text block={block} />
          </li>
        ) : (
          <></>
        );
      }

      const isTopLevel = block.type !== parentBlockType;
      return isTopLevel ? wrap(output) : output;
    }

    case 'quote': {
      if (!block.properties) return <></>;
      return (
        <BlockQuote>
          <Text block={block} />
        </BlockQuote>
      );
    }

    case 'image': {
      if (!block?.properties) {
        return <></>;
      }

      return <LazyImage block={block as ImageBlock} />;
    }

    case 'text': {
      if (!block.properties) return <></>;
      return (
        <p>
          <Text block={block} />
        </p>
      );
    }

    default: {
      if (process.env.NODE_ENV === 'development') {
        console.error(`${block.id} is not supported block type.`);
        console.log({ block });
      }
      return <></>;
    }
  }
}

const BlockQuote = styled.blockquote`
  margin: 1.275rem 0;
  padding-left: 1.275rem;
  border-left: 3px solid var(--text-plain);
`;

export default ContentBlock;
