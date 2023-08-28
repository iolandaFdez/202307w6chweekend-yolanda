export type WithId = {
  id: string;
};

export type AnimalsNoId = {
  title: string;
  owner: string;
  isCompleted: boolean;
};

export type Animals = WithId & AnimalsNoId;
