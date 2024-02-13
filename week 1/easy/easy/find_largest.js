function findLargestElement(numbers) {
    let max = -Infinity; // Initialize max to negative infinity to ensure any number in the array is greater
    numbers.forEach((number) => {
        if (number > max) { // Compare each number with the current maximum
            max = number; // Update max if the current number is greater
        }
    });
    console.log(max); // Print the largest number
}

const numbers = [1, 2, 3, 4, 5,19,2];
findLargestElement(numbers);