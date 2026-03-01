type a = null;
type b = undefined;

type c = a extends number ? true : b extends undefined ? true : false;

type richPeople = {
  car: string;
  house: string;
  ship: string;
};

type chackVacle<T> = T extends keyof richPeople ? true : false;

type hasBike = chackVacle<"car">;