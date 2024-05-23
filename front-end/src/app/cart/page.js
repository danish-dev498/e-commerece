'use client';

import UpdateItem from '@/features/menu/UpdateItem';
import { devices } from '@/lib/CommonStyles';
import Button from '@/ui/Button';
import { Drawer } from '@/ui/Drawer';
import Row from '@/ui/Row';
import { Text } from '@/ui/Text';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const Cart = () => {
  const cart = useSelector((state) => state.cartItem);
  const route = useRouter();

  console.log('-----------------------checking the cart over here------', cart);

  return (
    <>
      <CartContainer>
        <CartSection>
          <Text
            color='var(--color-green-700)'
            style={{ hover: { textDecoration: 'underline' } }}
          >
            {' '}
            &larr; back to menu
          </Text>
          <Text size='2rem' weight='500' mb='2rem'>
            Your cart,
          </Text>
          {cart.cart.map((item) => (
            <div key={item.pizzaId}>
              <CartContent>
                <div>
                  <Text>
                    {item.quantity}x <span>{item.name}</span>
                  </Text>
                </div>
                <Row type='horizontal' gap='1.5rem'>
                  <div>
                    <Text weight='500'>$ {item.totalPrice}.00 </Text>
                  </div>
                  <ButtonContainer>
                    <UpdateItem pizzaId={item.pizzaId} />
                    {/* <Button size='small'> + </Button>
                    <span>{item.quantity}</span>
                    <Button size='small'>-</Button> */}
                  </ButtonContainer>
                  <div>
                    <Button size='medium'>Delete</Button>
                  </div>
                </Row>
              </CartContent>
            </div>
          ))}
          <Drawer />
          <ButtonContainer>
            <Button size='large' onClick={() => route.push('/order/new')}>
              Order Pizza
            </Button>
            <Button size='large' variation='secondary'>
              Clear Cart
            </Button>
          </ButtonContainer>
        </CartSection>
      </CartContainer>
    </>
  );
};

export default Cart;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 6rem; */
  padding: 2rem;
`;

const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const CartContent = styled.div`
  @media (${devices.mobileS}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (${devices.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
