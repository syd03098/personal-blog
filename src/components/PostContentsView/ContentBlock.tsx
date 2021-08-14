import React, { ReactNode } from 'react';
import { Block, CalloutBlock, ImageBlock } from 'notion-types';
import styled from '@theme/styled';
import PrismCodeView from '@components/PrismCodeView';
import Text from '@components/PostContentsView/Text';
import ImageView from '@components/PostContentsView/ImageView';
import Callout from '@components/PostContentsView/Callout';
import { usePostContext } from '@components/PostContentsView/context';

interface Props {
  block: Block;
  children?: ReactNode;
}

const ContentBlock = ({ block, children }: Props): JSX.Element => {
  const { rootRecordMap } = usePostContext();
  if (!block) {
    return <></>;
  }

  switch (block.type) {
    case 'page':
      return <$article>{children}</$article>;

    case 'header':
    // fallthrough
    case 'sub_header':
      return (
        <$h2>
          <Text block={block} />
        </$h2>
      );

    case 'sub_sub_header':
      return (
        <$h3>
          <Text block={block} />
        </$h3>
      );

    case 'code': {
      if (block.properties.title) {
        const { language, title: codes } = block.properties;
        return <PrismCodeView code={codes[0][0]} language={language[0][0]} />;
      }

      return <></>;
    }

    case 'bulleted_list': {
      // todo: 좀 이상함
      const wrap = (contents: ReactNode) => <$ul>{contents}</$ul>;
      const parentBlockType = rootRecordMap[block.parent_id]?.value?.type;
      const output = block.content ? (
        <>
          {block.properties && (
            <$li>
              <Text block={block} />
            </$li>
          )}
          {wrap(children)}
        </>
      ) : (
        <>
          {block.properties && (
            <$li>
              <Text block={block} />
            </$li>
          )}
        </>
      );

      return parentBlockType === block.type ? output : wrap(output);
    }

    case 'callout': {
      if (!block.properties) return <></>;
      return <Callout block={block as CalloutBlock} />;
    }

    case 'quote': {
      if (!block.properties) return <></>;
      return (
        <$blockQuote>
          <Text block={block} />
        </$blockQuote>
      );
    }

    case 'image': {
      // todo: lazyImage 최적화 ratio 계산해서 layout shift 를 줄이자
      if (!block?.properties) return <></>;
      // console.log(block);
      return <ImageView block={block as ImageBlock} />;
    }

    case 'text': {
      if (!block.properties) return <></>;
      const fontColor = block.format?.block_color;
      return (
        <$paragraph className={fontColor}>
          <Text block={block} />
        </$paragraph>
      );
    }

    default:
      if (process.env.NODE_ENV === 'development') {
        console.log(block);
        return (
          <$paragraph>
            blockId: <b>{block.id}</b> is unsupported type
          </$paragraph>
        );
      }
      return <></>;
  }
};

const $article = styled.article`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const $h2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text.subHeader};
`;

const $h3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text.subHeader};
`;

const $blockQuote = styled.blockquote`
  margin: 20px 0;
  padding-left: 16px;
  border-left: 3px solid ${({ theme }) => theme.text.plain};
`;

const $ul = styled.ul`
  padding-left: 1.2em;
  margin: 0;
`;

const $li = styled.li`
  margin: 8px 0;
`;

const $paragraph = styled.p`
  margin: 16px 0;
  &.gray {
    color: ${({ theme }) => theme.text.smoke};
  }
`;

export default ContentBlock;
