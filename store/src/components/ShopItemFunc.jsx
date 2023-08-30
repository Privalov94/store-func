import React from 'react'

export default function ShopItemFunc(props) {
    const { item } = props
    return (
        <>
            <div>
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className='description'>{item.descriptionFull}</div>
                <div className='price'>{item.currency}{`${item.price} ,00`}</div>
                <button>Добавить в корзину</button>
            </div>
        </>
    )
}
