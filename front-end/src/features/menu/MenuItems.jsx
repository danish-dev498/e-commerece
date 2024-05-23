'use client'


import { styled } from 'styled-components';
import Button from '@/ui/Button';
import { Drawer } from '@/ui/Drawer';
import Row from '@/ui/Row';
import { Text } from '@/ui/Text';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/CartSlice';
import { useRouter } from 'next/navigation';
import UpdateItem from './UpdateItem';


const MenuItems = ({ pizza }) => {

    const dispatch = useDispatch()
    const route = useRouter()

    const currenteQuantity = useSelector(getCurrentQuantityById(pizza.id))
    const isInCart = currenteQuantity > 0

    console.log('=========currenteQuantity=========', currenteQuantity)

    // cart: [
    //   {
    //     pizzaId: 12,
    //     name: 'Mediterranean',
    //     quantity: 2,
    //     unitPrice: 16,
    //     totalPrice: 32,
    //   },
    // ],

    const handleAddtoCart = () => {
        const newItem = {
            pizzaId: pizza.id,
            name: pizza.name,
            quantity: 1,
            unitPrice: pizza.unitPrice,
            totalPrice: pizza.unitPrice * 1,
        }
        // console.log(newItem)
        dispatch(addItem(newItem))
    }

    return (
        <>
            <MenuContainer>
                <InnerContainer>
                    <MenuSection>
                        <div>
                            <Image src={pizza.imageUrl} width={100} height={100} />
                        </div>
                        <Row gap='1.6rem' style={{ flexGrow: 1 }}>
                            <Row >
                                <Text weight='600' margin='.25rem'>{pizza.name}</Text>
                                <div >
                                    {
                                        pizza.ingredients.map((indredient) => (
                                            <Text color='var(--color-grey-400)' margin='.25rem'>
                                                {indredient},
                                            </Text>
                                        ))
                                    }
                                </div>
                            </Row>

                            <Row type='horizontal'>
                                <Text>${pizza.unitPrice}</Text>

                                {isInCart && <ButtonContainer>
                                    <UpdateItem pizzaId={pizza.id} currenteQuantity={currenteQuantity} />
                                    <Button>Delete</Button>
                                </ButtonContainer>}

                                {!isInCart && <Button onClick={handleAddtoCart}  >ADD TO CART</Button>}
                            </Row>
                        </Row>
                    </MenuSection>
                    <Drawer style={{ color: 'red' }} />
                </InnerContainer>
            </MenuContainer>
        </>
    )
}

export default MenuItems

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
`;


const InnerContainer = styled.div`
  width: 70rem;
`;

const MenuSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;