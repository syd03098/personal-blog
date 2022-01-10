import { getAltMessage, parseImageUrl } from '@components/post/lazyImage/utils';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { ImageBlock } from 'notion-types';
import React from 'react';

interface Props {
  block: ImageBlock;
}

function LazyImage({ block }: Props): JSX.Element {
  const { url: src, blurDataUrl } = parseImageUrl(block);
  const alt = getAltMessage(block);
  const width = block?.format?.block_width ?? 10000;
  const height =
    block?.format?.block_height ??
    (block?.format?.block_aspect_ratio
      ? width * block?.format?.block_aspect_ratio
      : 10000);

  return (
    <ImageWrap>
      <Border>
        <NextImage
          src={src}
          alt={alt}
          title={alt}
          width={width}
          height={height}
          placeholder="blur"
          objectFit="contain"
          blurDataURL={blurDataUrl}
        />
      </Border>
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  max-width: 100%;
  margin: 1rem 0;
`;

const Border = styled.div`
  display: flex;
  border: 1px solid var(--border-image);
  border-radius: 8px;
  overflow: hidden;
`;

export default LazyImage;
