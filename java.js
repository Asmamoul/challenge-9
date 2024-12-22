function averageOfEvens(numbers) {
    // Filter out the even numbers from the array
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    // If there are no even numbers, return 0 to avoid division by zero
    if (evenNumbers.length === 0) {
      return 0;
    }
    
    // Use reduce to sum the even numbers
    const sumOfEvens = evenNumbers.reduce((sum, num) => sum + num, 0);
    
    // Return the average by dividing the sum by the number of even numbers
    return sumOfEvens / evenNumbers.length;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(averageOfEvens(numbers)); // Output: 4 (average of 2, 4, and 6)

  //Use the reduce() array method 
  function findLongestWord(words) {
    return words.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, "");
  }

  //Write a function that takes an array of objects representing books, with each object containing properties such as title, author, and pages. The function should return the average number of pages across all the books. Use the map() and reduce() array methods in your implementation.

  function averagePages(books) {
    // First, map to extract the number of pages from each book
    const pages = books.map(book => book.pages);
    
    // Then, use reduce to sum all the pages
    const totalPages = pages.reduce((sum, current) => sum + current, 0);
    
    // Calculate the average by dividing the total pages by the number of books
    return totalPages / books.length;
  }
  
  // Example usage:
  const books = [
    { title: "Book 1", author: "Author A", pages: 200 },
    { title: "Book 2", author: "Author B", pages: 300 },
    { title: "Book 3", author: "Author C", pages: 250 }
  ];
  console.log(averagePages(books)); // Output: 250

  //4.	Write a function that takes an array of strings and returns an object containing the frequency of each string. For example, if the input is ["hello", "world", "hello"], the output should be { hello: 2, world: 1 }. Use the reduce() array method in your implementation
  function getFrequency(arr) {
    return arr.reduce((acc, str) => {
      acc[str] = (acc[str] || 0) + 1;
      return acc;
    }, {});
  }
  
  // Example usage:
  const input = ["hello", "world", "hello"];
  const result = getFrequency(input);
  console.log(result);  // Output: { hello: 2, world: 1 }
  //Write a function that takes an array of objects representing people, with each object containing properties such as name, age, and city. The function should return an object containing the count of people by city. For example, if the input is [{ name: "Alice", age: 30, city: "New York" }, { name: "Bob", age: 40, city: "Chicago" }, { name: "Charlie", age: 50, city: "New York" }], the output should be { "New York": 2, "Chicago": 1 }. Use the reduce() array method in your implementation.

  function countPeopleByCity(people) {
    return people.reduce((cityCount, person) => {
      const city = person.city;
      cityCount[city] = (cityCount[city] || 0) + 1;
      return cityCount;
    }, {});
  }
  
  // Example usage:
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  
  const result = countPeopleByCity(people);
  console.log(result); // Output: { "New York": 2, "Chicago": 1 }