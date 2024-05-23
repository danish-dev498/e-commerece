import Link from 'next/link'
import React from 'react'

export const EmptyCart = () => {
    return (
        <div className="px-4 py-3">
            <Link href="/menu">&larr; Back to menu</Link>

            <p className="mt-7 font-semibold">
                Your cart is still empty. Start adding some pizzas :)
            </p>
        </div>
    )
}
