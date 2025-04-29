1. Line 12 prints out 3 since in the for loop var i is incremented 3 times due to the length of prices being 3. Since i is a var and therefore function scoped and not block scoped console.log(i) will execute and print 3.
2. Line 13 prints out 150 since the last price it was given and discounted was 300 reduced by 50% resulting in 150.
3. Line 14 also prints out 14 since it was the rounded price of the discounted price printed out in line 13.
4. Returns the array discounted containing [50, 100, 150].
5. Errors since i is not defined it is using let which is block based and therefore not accessible outside of the for loop.
6. Errors since discountedPrice is declared using the let keyword and as such is not accessible outside the scope of the for loop.
7. Line 14 prints out 150 since finalPrice is declared outside of the for loop, modified in the for loop, and then printed outside where it is accessible.
8. Returns the array discounted containing [50, 100, 150].
9. Errors since i is not defined it is using let which is block based and therefore not accessible outside of the for loop.
10. Returns 3 since it is accessible and not changed.
11. Returns [50, 100, 150], does not error since const discountedPrice is never reassigning a value to that const but instead redeclaring a whole new one per iteration of the for loop.
12. 
student.name,
student['Grad Year']
student.greetings()
student['Favorite Teacher'].name    
student.courseLoad[0]
13. 
A. '32', concatenated as a char -- string concatenation
B. 1, used 3 as an int
C. null converted to 0
D. '3null', plus converts other value into a string
E. 4, true is 1 
F. 0, false is 0 and null is 0
G. '3undefined', string concatenation
H. NaN, undefined cannot become a number