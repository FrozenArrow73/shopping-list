import React from 'react'

const ShoppingList = (props) => {
    const ShoppingListDisplay = props.shoppingList.map((item) => {
        return (
            <div>{item.item} - bought at - {item.store}</div>
        )
    })

  return (
    <div>{ShoppingListDisplay}</div>
  )
}

export default ShoppingList