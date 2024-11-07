const countWordOccurrences = (str: string, word: string) => {
  const regex = new RegExp(word, "gi");
  return str.match(regex)?.length || 0;
};

console.log(
  countWordOccurrences(
    "I love typescript and typescripT is TypeSCRIPt!",
    "typescript"
  )
);
