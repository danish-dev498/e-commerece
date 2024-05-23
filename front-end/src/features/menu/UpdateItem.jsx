import Button from '@/ui/Button'
import { Text } from '@/ui/Text'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { decreamentItem, getCurrentQuantityById, incrementItem } from '../cart/CartSlice'

const UpdateItem = ({ pizzaId }) => {
    const dispatch = useDispatch()
    const currenteQuantity = useSelector(getCurrentQuantityById(pizzaId))


    console.log('-----------check the PIZZA ID-------------', pizzaId)

    return (
        <Container>
            <Button size='small' onClick={() => dispatch(decreamentItem(pizzaId))}>-</Button>
            <Text> {currenteQuantity} </Text>
            <Button size='small' onClick={() => dispatch(incrementItem(pizzaId))}>+</Button>
        </Container>
    )
}

export default UpdateItem


const Container = styled.div`
display: flex ;
gap: .75rem;

`