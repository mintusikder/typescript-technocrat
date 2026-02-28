interface Developer<T, X=null> {
  name: string;
  age: number;
  divice: {
    name: string;
    price: number;
    model: string;
  };
  smartwatch: T;
  bike?: X
}

interface SmartwatchFeaturesPoor {
  hartRate: string;
  stopWatch: boolean;
};
interface SmartwatchFeaturesRich {
  hartRate: string;
  callSupport?: boolean;
  calculator?: boolean;
};
interface BikePoor {
  name: string;
  price: number;
  model: string;
}

const poorDeveloper: Developer<SmartwatchFeaturesPoor,BikePoor> = {
  name: "John Doe",
  age: 30,
  divice: {
    name: "oppo",
    price: 999,
    model: "oppo 12",
  },
  smartwatch: {
    hartRate: "80 bpm",
    stopWatch: false,
  },
  bike: {
    name: "yamaha",
    price: 10000,
    model: "yamaha 125",
  }
};

const richDeveloper: Developer<SmartwatchFeaturesRich> = {
  name: "John Doe 2",
  age: 30,
  divice: {
    name: "iphone",
    price: 999,
    model: "iphone 12",
  },
  smartwatch: {
    hartRate: "50 bpm",
    callSupport: true,
    calculator: true,
  },
  bike: null
};
