import Row from '@/ui/Row'
import { Text } from '@/ui/Text'
import React from 'react'
import { styled } from 'styled-components'
import { getTotalCardQuantity, getTotalCartPrice } from './CartSlice'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const CartOverview = () => {
    const route = useRouter()
    const totalItems = useSelector(getTotalCardQuantity)
    const totalPrice = useSelector(getTotalCartPrice)

    const clickHnadler = () => {
        route.push('/cart')
    }

    return (
        <CartOverviewContainer>
            <Row type='horizontal' gap='2rem'  >
                <Text color='var( --color-brand-50)'>  {totalItems}  {totalItems <= 1 ? 'Pizza' : 'Pizzas'}</Text>
                <Text color='var( --color-brand-50)' >${totalPrice}</Text>
            </Row>
            <div>
                <Text color='var( --color-brand-50)' onClick={clickHnadler}  >
                    Open cart →
                </Text>
            </div>
        </CartOverviewContainer>
    )
}

export default CartOverview


const CartOverviewContainer = styled.footer`
    
position: fixed;

bottom: 0;
width: 100%;
background-color: var(--color-footer);
display: flex;
justify-content: space-between;
padding: 2rem 3rem ;

`