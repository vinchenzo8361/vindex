export interface Hospital {
  id: string;

  name: string;

  address: string;

  latitude: number;

  longitude: number;

  emergencyDepartment: boolean;

}



export const hospitals: Hospital[] = [
  {
    id: "brampton-civic",

    name: "Brampton Civic Hospital",

    address: "2100 Bovaird Drive East, Brampton, ON",

    latitude: 43.747292,

    longitude: -79.744431,

    emergencyDepartment: true,
  },


  {
    id: "trillium-mississauga",

    name: "Trillium Health Partners - Mississauga Hospital",

    address: "100 Queensway West, Mississauga, ON",

    latitude: 43.571640,

    longitude: -79.608280,

    emergencyDepartment: true,
  },


  {
    id: "credit-valley",

    name: "Credit Valley Hospital",

    address: "2200 Eglinton Avenue West, Mississauga, ON",

    latitude: 43.577590,

    longitude: -79.716870,

    emergencyDepartment: true,
  },


  {
    id: "oakville-trafalgar",

    name: "Oakville Trafalgar Memorial Hospital",

    address: "3001 Hospital Gate, Oakville, ON",

    latitude: 43.447890,

    longitude: -79.760690,

    emergencyDepartment: true,
  },


  {
    id: "mackenzie-health",

    name: "Mackenzie Richmond Hill Hospital",

    address: "10 Trench Street, Richmond Hill, ON",

    latitude: 43.882960,

    longitude: -79.440780,

    emergencyDepartment: true,
  },


  {
    id: "humber-river",

    name: "Humber River Hospital",

    address: "1235 Wilson Avenue, Toronto, ON",

    latitude: 43.724780,

    longitude: -79.488620,

    emergencyDepartment: true,
  },


  {
    id: "sickkids",

    name: "SickKids Hospital",

    address: "555 University Avenue, Toronto, ON",

    latitude: 43.657230,

    longitude: -79.388690,

    emergencyDepartment: true,
  },


  {
    id: "sunnybrook",

    name: "Sunnybrook Health Sciences Centre",

    address: "2075 Bayview Avenue, Toronto, ON",

    latitude: 43.722870,

    longitude: -79.376920,

    emergencyDepartment: true,
  }

];

console.log("HOSPITAL FILE LOADED");