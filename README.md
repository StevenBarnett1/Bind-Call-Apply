git # Bind

- returns a new function, when invoked, has its this sets to a specific value.

## Practice

- Add properties `name` and `occupation` to the `Employee` class
- Add a function to the `Employee` class called `sayName` that will `console.log` their name
- Add a function to the `Employee` class called `sayOccupation` that will `console.log` their occupation

- Try calling `employee.sayName()` inside of a `setTimeout` after 2 seconds
- Use `bind` to preserve the the context for `employee.sayName()` and `person.sayOccuption()`
  - Call the binded functions in their own `setTimeouts` of 2 seconds and 3 seconds respectively.
  