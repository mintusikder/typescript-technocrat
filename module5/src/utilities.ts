type product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type productSummery = Pick<product, "id" | "name" | "price">;

type productWithoutDescription = Omit<product, "description">;

type productWithColor = Required<product>;

const product1: productWithColor = {
  id: 1,
  name: "Product 1",
  price: 100,
  description: "A sample product",
  category: "Electronics",
  image: "product1.jpg",
};

type partialProduct = Partial<product>;

const product2: partialProduct = {
  id: 2,
  name: "Product 2",
};

type readonlyProduct = Readonly<product>;

const product3: readonlyProduct = {
  id: 3,
  name: "Product 3",
  price: 150,
  description: "Another sample product",
  category: "Home Appliances",
  image: "product3.jpg",
};
