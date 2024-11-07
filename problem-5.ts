const getProperty = <X, Y extends keyof X>(person: X, key: Y) => {
  return person[key];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
