export interface Ambulance {

  id: string;

  name: string;

  latitude: number;

  longitude: number;

  status: string;

}


export const ambulance: Ambulance = {

  id: "ambulance-1",

  name: "Vindex Ambulance 01",

  latitude: 43.74792,

  longitude: -79.74318,

  status: "Idle"

};