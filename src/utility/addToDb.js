const getCart = () => {
    const CartListStr = localStorage.getItem('cart-list');
    if (CartListStr) {
        const CartList = JSON.parse(CartListStr);
        return CartList;
    } else {
        return [];
    }
};

const addToCart = (id) => {
    const CartList = getCart();
    if (CartList.includes(id)) {
        console.log(id, 'already exists in the cart list');
    } else {
        CartList.push(id);
        const CartListStr = JSON.stringify(CartList);
        localStorage.setItem('cart-list', CartListStr);
        toast('This book is added to your cart list.');
    }
};

const removeFromCart = (id) => {
    const CartList = getCart();
    const index = CartList.indexOf(id);
    if (index !== -1) {
        CartList.splice(index, 1);  // Remove the item by index
        localStorage.setItem('cart-list', JSON.stringify(CartList));
        toast('This book is removed from your cart list.');
    } else {
        console.log(id, 'is not in the cart list');
    }
};

const getWish = () => {
    const WishListStr = localStorage.getItem('wish-list');
    if (WishListStr) {
        const WishList = JSON.parse(WishListStr);
        return WishList;
    } else {
        return [];
    }
};

const addToWish = (id) => {
    const WishList = getWish();
    if (WishList.includes(id)) {
        console.log(id, 'already exists in the wish list');
    } else {
        WishList.push(id);
        const WishListStr = JSON.stringify(WishList);
        localStorage.setItem('wish-list', WishListStr);
        toast('This book is added to your wish list.'); 
    }
};

const removeFromWish = (id) => {
    const WishList = getWish();
    const index = WishList.indexOf(id);
    if (index !== -1) {
        WishList.splice(index, 1);  // Remove the item by index
        localStorage.setItem('wish-list', JSON.stringify(WishList));
        toast('This book is removed from your wish list.');
    } else {
        console.log(id, 'is not in the wish list');
    }
};

export { addToCart, getCart, getWish, addToWish, removeFromCart, removeFromWish };
