function calculateTotalSpentByCategory(transactions) {
    const categoriesMap = {}; // Map to store total spent for each category
    
    // Iterate through transactions and accumulate total spent for each category
    transactions.forEach((transaction) => {
        const { category, price } = transaction;
        if (!categoriesMap[category]) {
            categoriesMap[category] = 0;
        }
        categoriesMap[category] += price;
    });
    
    // Convert categoriesMap to the desired output format
    const result = Object.keys(categoriesMap).map((category) => ({
        category,
        totalSpent: categoriesMap[category]
    }));
    
    return result;
}

// Example usage:
const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 16560768,
        price: 11,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 16560768,
        price: 200,
        category: 'Bike',
        itemName: 'Splendor',
    }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
