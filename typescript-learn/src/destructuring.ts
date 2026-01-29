const user = {
  id: 23,
  name: {
    firstName: "Mintu",
    lastName: "Sikder",
  },
  age: 30,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  favorites: ["cricket", "football", "programming"],
};

const {favorites : myFavorites,name:{firstName:myName}} = user;
console.log("Favorites:", myFavorites,myName)


const friends=["rafi","rafiuddin","rafiul","rafikhan"];

const [, ,myBestFriend] = friends
console.log("My Best Friend:", myBestFriend);