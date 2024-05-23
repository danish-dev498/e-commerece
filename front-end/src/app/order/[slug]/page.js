'use client';

import Row from '@/ui/Row';
import { Tag } from '@/ui/Tag';
import { Text } from '@/ui/Text';
import React from 'react';
import { styled } from 'styled-components';

const OrderStatus = () => {
  return (
    <StatusContainer>
      <InnerContainer>
        <Row type='horizontal'>
          <Text> Order #E0W9OR status </Text>
          <Row type='horizontal' gap='1rem'>
            <Tag backgroundColor='var(--color-green-700)'> PREPARING ORDER</Tag>
            <Tag backgroundColor='var(--color-red-700)'> PRIORITY </Tag>
          </Row>
        </Row>
      </InnerContainer>
    </StatusContainer>
  );
};

export default OrderStatus;

const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const InnerContainer = styled.div`
  width: 80rem;
`;
