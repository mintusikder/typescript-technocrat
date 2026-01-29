//spread operate

const friends = ["Alice", "Bob", "Charlie"];

const schoolFriends = ["Grace", "Heidi", "Ivan"];

const collageFriends = ["David", "Eve", "Frank"];

friends.push(...schoolFriends);
friends.push(...collageFriends);

console.log(friends);

//object

const user = {
  name: "Mintu Sikder",
  age: 30,
  address: "123 Main St",
};

const updatedUser = {
  age: 31,
  email: "mintu.sikder@example.com",
};

const mergedUser = { ...user, ...updatedUser };

console.log(mergedUser);

//rest operator

const sendInvitation = (...friends: string[]) => {
    friends.forEach((friend) => {
        console.log(`Invitation sent to ${friend}`);
    })
}

sendInvitation("Alice", "Bob", "Charlie","David");