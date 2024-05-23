'use client';

import { getTotalCartPrice } from '@/features/cart/CartSlice';
import { EmptyCart } from '@/features/cart/EmptyCart';
import { fetchAddres } from '@/features/user/userSlice';
import { devices } from '@/lib/CommonStyles';
import Button from '@/ui/Button';
import { Input } from '@/ui/Input';
import Row from '@/ui/Row';
import { Text } from '@/ui/Text';
import { formatCurrency } from '@/utils/helper';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

const OrderDetails = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [withPriority, setWithPriority] = useState(false);
  const { address } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cartItem);
  const totalPrice = useSelector(getTotalCartPrice);
  const [error, setError] = useState('');

  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const finalPrice = totalPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async () => {
    const isValidatePhone = /^\d{10}$/;
    if (!isValidatePhone.test(phoneNumber)) {
      setError('Please enter a valid phone number, you might need ');
    }

    console.log(finalPrice);

    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_2OvIDl97qzw2Y4', // Enter the Key ID generated from the Dashboard
      amount: finalPrice * 100,
      currency: 'INR',
      name: 'Danish Noor.',
      description: 'Test Transaction',
      // image: { logo },
      // order_id: order_id,
      handler: async function (response) {
        const data = {
          // orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        alert(data.razorpayOrderId);
      },
      prefill: {
        name: 'Danish Alam',
        email: 'example@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Example Corporate Office',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <OrderDetailsContainer>
        <InnerContainer>
          <Row gap='2rem'>
            <Text size='2rem' weight='500' color='var( --color-grey-900)'>
              Ready to order? Let's go!
            </Text>

            <NameContainer>
              <Text
                style={{
                  whiteSpace: 'nowrap',
                }}
              >
                First Name
              </Text>
              <div style={{ width: '100%' }}>
                <Input
                  expanding
                  borderRadius='9999px'
                  height='4.5rem'
                  pl='1.5rem'
                  type='text'
                  ml='auto'
                />
              </div>
            </NameContainer>

            <NameContainer>
              <Text
                style={{
                  whiteSpace: 'nowrap',
                }}
              >
                Phone Number
              </Text>
              <div style={{ width: '100%' }}>
                <Input
                  expanding
                  borderRadius='9999px'
                  height='4.5rem'
                  pl='1.5rem'
                  ml='auto'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <p>{error}</p>
              </div>
            </NameContainer>

            <NameContainer>
              <Text
                style={{
                  whiteSpace: 'nowrap',
                }}
              >
                Address
              </Text>
              <div style={{ width: '100%', position: 'relative' }}>
                <Input
                  expanding
                  borderRadius='9999px'
                  height='4.5rem'
                  pl='1.5rem'
                  ml='auto'
                  value={address}
                />
                <ButtonPosition>
                  <Button onClick={() => dispatch(fetchAddres())}>
                    Get Direction
                  </Button>
                </ButtonPosition>
              </div>
            </NameContainer>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CheckBoxInput
                type='checkbox'
                value={withPriority}
                onClick={(e) => setWithPriority(e.target.checked)}
              />
              <Text style={{ marginLeft: '2rem' }}>
                Want to yo give your order priority?
              </Text>
            </div>
            <div>
              <Button size='large' onClick={displayRazorpay}>
                ORDER NOW FROM {formatCurrency(finalPrice)}
              </Button>
            </div>
          </Row>
        </InnerContainer>
      </OrderDetailsContainer>
    </>
  );
};

export default OrderDetails;

const OrderDetailsContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 1.5rem;
`;

const InnerContainer = styled.div`
  width: 80rem;
`;

const NameContainer = styled.div`
  @media (${devices.mobileS}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (${devices.laptop}) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    background-color: transparent;
    /* width: 100%; */
  }
`;

const ButtonPosition = styled.div`
  @media (${devices.mobileS}) {
    position: absolute;
    top: -3.2rem;
    right: 10px;
  }

  @media (${devices.tablet}) {
    position: absolute;
    top: 0.5rem;
    right: 0.625rem;
  }

  position: absolute;
  top: 5px;
  right: 10px;
`;

const CheckBoxInput = styled.input`
  width: 3rem;
  height: 3rem;

  &:focus {
    outline: 0.5rem solid var(--color-yellow-500);
  }
  &:not(:checked) {
    accent-color: var(--color-yellow-500);
    outline-offset: 2px;
  }

  &:checked {
    accent-color: var(--color-yellow-500);
    outline-offset: 2px;
  }
`;
