export interface Coordinate {
  x: number;
  y: number;
}

export interface Location {
  id: string;
  name: string;
  coordinate: Coordinate;
  icon?: "bus" | "train";
}

export interface LocationResponse {
  stations: (Location | null)[];
}

export interface Stop {
  id: string;
  platform: string | null;
  departure: string;
  delay: number;
  prognosis: {
    departure: string;
  };
}

export interface StationboardEntry {
  category: string;
  number: string;
  to: string;
  stop: Stop;
}

export interface StationboardResponse {
  stationboard: StationboardEntry[];
}
