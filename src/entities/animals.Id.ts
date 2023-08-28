export type AnimalsId = {
  id: string;
};

export type AnimalsNoId = {
  name: string;
  scienceName: string;
  zone: string[];
  family: string;
  diet: string[];
};

export type Animals = AnimalsId & AnimalsNoId;
