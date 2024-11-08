# The significance of union and intersection types in TypeScript.

Today we will discuss about **Union** and **Intersction** in **TypeScript**. Let's learn about them in detail and let's learn about how they are making the `TypeScript` developer's life easier.

### :information_desk_person: **Union**

When we use `Union` it treat like `OR` operator which we denote in programming like this `||`. This means any items between them can be here. Have to be between them.

**For example:**

```javascript
type User = "Student" | "Teacher" | "Guest";
```

Here in the code above we can see that user can be a Student or Teacher or Guest. User must have to be between them. Let's use this type in our code so that we can see how it works.

##### Implementation

```javascript
// Correct Implementation :
const user1: User = "Student";
const user2: User = "Teacher";
const user3: User = "Guest";

// Wrong Implementation:
const user4: User = "Doctor"; // Error
```

We can see in the implementation of `Union` that, if we provide any value which is not present in our `type User` which are `"Student" | "Teacher" | "Guest"` then it is going to show error and says that to use user type from the mentioned as `Union` in tye `User` type.

### :information_desk_person: **Intersection**

When we use `Intersection` it treat like `AND` operator which we denote in programming like this `&&`. This means all items from them must be here.

**For example:**

```javascript
type User = {
  id: string,
  name: string,
};

type Credential = {
  username: string,
  password: string,
};

type RegisteredUser = User & Credential;
```

Here in the code above we can see that in the `RegisteredUser` type we are doing intersection using the `&` opoerator. This means type of `RegisteredUser` must have all the properties of both `User` and `Credential`. If we provide the `RegisteredUser` type to any variable as type then we must have to provide all the properties, otherwise it will throw error. Let's see an example below:

##### Implementation

```javascript
// Correct Implementation :
const registeredUser1: RegisteredUser = {
  id: "abc123",
  name: "John Doe",
  username: "johndoe",
  password: "123johnDoe",
};
```

_This implementation is correct, because we used intersection and we provided all the properties here._

```javascript
// Wrong Implementation:
const registeredUser2: RegisteredUser = {
  id: "abc123",
  name: "John Doe",
  username: "johndoe",
};
```

_Error: Must have all the properties(id, name, username, password), here password is missing.We used intersection and we didn't provide all the properties here._

#### Conclusion:

Both `Union` and `Intersection` is here to make the `TypeScript` developer's life easier. We have to leverage them so we get the test of `error free and clean code`. We learned using very basic examples but in real life of development we will see everyday in our life while writing code that how significantly `Union` and `Intersection` making impact in our `TypeScript` journey.

:computer: Happy Coding
