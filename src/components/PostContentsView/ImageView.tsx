import React, { useRef } from 'react';
import { ImageBlock } from 'notion-types';
import { parseImageUrl } from '@lib/functions';
import styled from '@theme/styled';

interface Props {
  block: ImageBlock;
}

const ImageView = ({ block }: Props): JSX.Element => {
  const imageRef = useRef(null);
  const caption = block.properties?.caption?.[0] || 'react notion image';

  return (
    <StyledImageWrap>
      <StyledImage
        ref={imageRef}
        src={parseImageUrl(block)}
        alt={caption as string}
        loading="lazy"
        decoding="async"
      />
    </StyledImageWrap>
  );
};

const StyledImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  width: auto;
`;

export default ImageView;
