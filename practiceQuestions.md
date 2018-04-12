##Algorithms
**Thiefs Knapsack**
```
Use dynamic programming.
Save 'Max weight' along the x axis
Y axis is the items that we're considering
Check one item, then keep adding items onto that
For the first row you find the max value based on the max weight
Then, you constant time check if including the new item is better than not including it. If you include it you check right above it
If you don't include you check the remaining max value for the weight you currently put
```
*tip: use .range() to create tables*