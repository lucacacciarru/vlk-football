export type Player = {
  id: string;
  name: string;
  rating: number;
  goalkeeper: boolean;
  sports?: string[];
  avatar?: string;
};

export type PlayerData = {
  allIds: string[];
  byId: Record<string, Player>;
};

export type PlayerState = {
  data: PlayerData;
  rollbackData?: PlayerData;
};
