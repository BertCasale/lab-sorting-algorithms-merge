const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort numbers in descending order
const sortNumsD = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] < current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].toLowerCase();
        let j = i - 1;

        while (j >= 0 && arr[j].toLowerCase() < current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].name.toLowerCase();
        let j = i - 1;

        while (j >= 0 && arr[j].name.toLowerCase() > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].price;
        let j = i - 1;

        while (j >= 0 && arr[j].price > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort products by price, descending order
const sortProductPriceD = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].price;
        let j = i - 1;

        while (j >= 0 && arr[j].price < current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let currentPrice = arr[i].price;
        let currentName = arr[i].name
        let j = i - 1;

        while (j >= 0 && (arr[j].price > currentPrice || (arr[j].price === currentPrice && arr[j].name > currentName))){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    // sortProductNamesA(arr);
    // sortProductPriceA(arr);
    return arr;
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i].designedBy;
        let j = i - 1;

        while (j >= 0 && arr[j].designedBy > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// sort catArt by price
const catArtSortByPriceA = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let current = (typeof arr[i].price === "string" && arr[i].price.includes("♇♇")) ? Number(arr[i].price.substring(2)) * 10 : Number(arr[i].price);
        console.log(current)
        let j = i - 1;

        while (j >= 0 && ((typeof arr[j].price === "string" && arr[j].price.includes("♇♇")) ? Number(arr[j].price.substring(2)) * 10 : Number(arr[j].price)) > current){
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            j--;
        }
    }
    return arr;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr, order = "a") => {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;

        //descending
        if (order === "d"){
            while (j >= 0 && arr[j] < current){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                j--;
            }
        } else {
        //ascending
            while (j >= 0 && arr[j] > current){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                j--;
            }
        }
    }
    return arr;
};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
