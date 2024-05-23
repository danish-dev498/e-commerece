'use client';

import { updateUsername } from '@/features/user/userSlice';
import useThemeToggle from '@/hooks/useThemeToggle';
import Button from '@/ui/Button';
import { Input } from '@/ui/Input';
import Row from '@/ui/Row';
import { SearchInput } from '@/ui/SearchInput';
import { Text } from '@/ui/Text';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

function App() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUsername(username));
    router.push('/menu');
  };

  return (
    <DisplayContainer>
      <Row align='center'>
        <Row>
          <Text size='3rem' weight='600' spacing='.05rem'>
            The best pizza. <br />
            <Text color='var(--color-yellow-500)'>
              Straight out of the oven, straight to you.
            </Text>
          </Text>
          <Text mt='2rem' mb='1rem'>
            👋 Welcome! Please start by telling us your name:
          </Text>
        </Row>
        <form onSubmit={handleSubmit}>
          <Input
            borderRadius='9999px'
            pl='2rem'
            height='4.5rem'
            placeholder='Your full name'
            onChange={(e) => setUsername(e.target.value)}
          />

          {username ? <Button mt='1.25rem'>Start Ordering....</Button> : null}
        </form>
      </Row>
    </DisplayContainer>
  );
}

export default App;

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

// const FormContainer = styled.form``;
