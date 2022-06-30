const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      //compute the total amount of the cart
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "INCREASE") {
    const cart = state.cart;
    let increased = cart.map((item) => {
      //increase the amount of the item using the map fct and id
      if (item.id === action.payload)
        item = { ...item, amount: item.amount + 1 };

      return item;
    });
    return {
      ...state,
      cart: increased,
    };
  }

  if (action.type === "DECREASE") {
    const cart = state.cart;
    let increased = cart
      .map((item) => {
        //increase the amount of the item using the map fct and id
        if (item.id === action.payload && item.amount > 0)
          item = { ...item, amount: item.amount - 1 };
        return item;
      })
      .filter((item) => item.amount > 0);

    return {
      ...state,
      cart: increased,
    };
  }
};

export default reducer;
