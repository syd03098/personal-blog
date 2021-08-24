import React, { useMemo } from 'react';
import { CalloutBlock } from 'notion-types';
import Text from '@components/PostContentsView/Text';
import styled from '@theme/styled';

interface Props {
  block: CalloutBlock;
}

const Callout = ({ block }: Props): JSX.Element => {
  const icon = block.format?.page_icon;
  const calloutIcon = useMemo(() => {
    return <>{icon}</>;
  }, [icon]);

  return (
    <StyledCalloutBlock>
      <StyledIconBlock>{calloutIcon}</StyledIconBlock>
      <Text block={block} />
    </StyledCalloutBlock>
  );
};

const StyledCalloutBlock = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  padding: 16px 16px 16px 12px;
  margin: 20px 0;
`;

const StyledIconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  flex-shrink: 0;
`;

export default Callout;
