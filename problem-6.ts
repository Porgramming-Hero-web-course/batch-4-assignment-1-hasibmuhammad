interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  profile: Profile,
  updateDoc: Partial<Profile>
): Profile => {
  return { ...profile, ...updateDoc };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(updateProfile(myProfile, { age: 0 }));
