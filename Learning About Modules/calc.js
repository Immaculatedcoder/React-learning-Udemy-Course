
// Lesson 1: We can export using export at the front of each things we want to export

```
export const sum = (a,b) => {
    return a + b;
}

export const sub = (a,b) => {
    return a - b
}
```

// Lesson 2: We can export at the end of the JS file
```
const sum = (a,b) => {
    return a + b;
}

const sub = (a,b) => {
    return a - b
}

export {sum, sub}

```

// Lesson 3: Default export