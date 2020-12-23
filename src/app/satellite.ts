export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
//Assign object (satellite) properties. 
      this.name = name;
      this.type = type;
      this.operational = operational;
      this.orbitType = orbitType;
      this.launchDate = launchDate;
}

shouldShowWarning(){
    return this.type.toUpperCase() === "SPACE DEBRIS";
     }
}
