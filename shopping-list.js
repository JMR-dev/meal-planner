const script = "text/javascript"
script.src = "index.html"

const dateTimeValue = new Date();
const shoppingListArray = [

]

const createfoodobj = (foodname, price, perdeim) => {
    const newOBJ = {
        name: foodname,
        foodPrice: price,
        quantityperitem: perdeim,
        dateCreated: dateTimeValue
    }
    if (shoppingListArray.length < 1) {
        newOBJ.id = 1
    } else {
        
        const lastIndex = shoppingListArray.length - 1
        const currentLastFoodItem = shoppingListArray[lastIndex]
        const maxId = currentLastFoodItem.id
        const idForNewFoodItem = maxId + 1
        newOBJ.id = idForNewFoodItem  
    }
    
    const number = newOBJ.foodPrice
    console.log(number)
    // const currencystring = number.format("$0,0.00")
    // newOBJ.foodPrice = currencystring
    
}



const milk = createfoodobj("milk", 3.00, "gallon")
const eggs = createfoodobj("eggs", 0.69, "dozen")
const pizzaRolls = createfoodobj("pizza rolls", 6.99, "6 per package")
const filetMignon = createfoodobj("filet mignon", 12.99, "per lb")
const nutchrafelCheese = createfoodobj("nutchrafel cheese", 4.00, "8 oz")
const baklava = createfoodobj("baklava", 10.00, "3 pastries")

// console.log(shoppingListArray)

expensiveGroceries = [

]

for(const fooditem of shoppingListArray) {
    if (fooditem > `$${8.00}`) {
        expensiveGroceries.push(fooditem)
        console.log(expensiveGroceries)
    }
}

