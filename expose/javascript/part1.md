**Question #1**
1. Line 9 prints "values added: 20"
2. Line 13 prints "final result: 20"
3. You should never use var because it is a degraded way of declaring a variable and is function scoped instead of block-scoped, meaning it can be accessible anywhere in the function.
4. Line 9 prints "values added: 20"
5. Line 13 errors because result is not defined since it use declared using let instead of var, meaning it is block scoped within the if statement and therefore not accessible outside of it.
6. Line 9 does not print since line 4 errors due to the assignment to a constant variable. Since result is a const reassinging result to a new value such as num1 + num2 would error.
7. Similar reason to question 6.
8. 