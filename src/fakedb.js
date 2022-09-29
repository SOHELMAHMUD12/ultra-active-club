const addToDb = id =>{
    let breakTime = {};

    const storedTime = localStorage.getItem('Break Time');
    if(storedTime){
        breakTime = JSON.parse(storedTime);
    }

    const quantity = breakTime[id];
    if(quantity){
        const newQuantity = quantity
        breakTime[id] = newQuantity;
    }
    else{
        breakTime[id] = 1;
    }
    localStorage.setItem('Break Time', JSON.stringify(breakTime));
}

const getStoreTime = () =>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Break Time');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export {
    addToDb,
    getStoreTime
}