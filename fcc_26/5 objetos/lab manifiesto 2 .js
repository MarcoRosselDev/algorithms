let manifiesto = {
  containerId:0,
  destination:"chicago",
  weight: 122,
  unit: "lb",
  hazmat: true
}
/* let manifiesto_wrong_test = {
  containerId:"string",
  destination:"Misisipi",
  weight: 12,
  unit: "lb",
} */

// hazmat = materiales peligrosos

function normalizeUnits(manifest) {
  const new_manifest = {...manifest};
  if (new_manifest.unit === "kg"){
    return new_manifest
  } else {
    new_manifest.weight = new_manifest.weight * 0.45;
    new_manifest.unit = "kg";
    return new_manifest;
  }
}

function validateManifest(manifest) {
  const our_manifest = {...manifest}
  const {containerId = "Missing", destination = "Missing", weight = "Missing", unit = "Missing", hazmat = "Missing"} = our_manifest
  const returned_obj = {}

  function check_missing_or_invalid(name_x, value, typeItem) {
    //const obj = {}
    let str = ""
    if (value !== "Missing") {
      if (typeof value !== typeItem) {   
        return "Invalid"     
        //obj[name_x] = "Invalid"
        //returned_obj.containerId = "Invalid"
      } else {
        return false
      }
      
      /* else {
        obj[name_x] = value
        //correct_obj.containerId = containerId
      } */
    } else {
      //obj[name_x] = "Missing"
      //returned_obj.containerId = "Missing"
      return "Missing"
    }
  }
  
  const check_id = check_missing_or_invalid("containerId", containerId, "number")
  if (check_id) {
    returned_obj["containerId"] = check_id;
  }
  const check_destination = check_missing_or_invalid("destination", destination, "string")
  if (check_destination) {
    returned_obj["destination"] = check_destination;
  }
  const check_weight = check_missing_or_invalid("weight", weight, "number")
  if (check_weight) {
    returned_obj["weight"] = check_weight;
  }
  const check_unit = check_missing_or_invalid("unit", unit, "string")
  if (check_unit) {
    returned_obj["unit"] = check_unit;
  }
  const check_hazmat = check_missing_or_invalid("hazmat", hazmat, "boolean")
  if (check_hazmat) {
    returned_obj["hazmat"] = check_hazmat;
  }

  console.log({
    check_id,
    check_destination,
    check_weight,
    check_unit,
    check_hazmat,
  });
  
  return returned_obj


/*   if (containerId !== "Missing") {
    if (typeof containerId !== Number) {
      returned_obj.containerId = "Invalid"
    } else {
      correct_obj.containerId = containerId
    }
  } else {
    returned_obj.containerId = "Missing"
  }

  if (our_manifest.destination === "Missing") {
    returned_obj.destination = "Missing"
  }
  if (our_manifest.weight === "Missing") {
    returned_obj.weight = "Missing"
  }
  if (our_manifest.unit === "Missing") {
    returned_obj.unit = "Missing"
  }
  if (our_manifest.hazmat === "Missing") {
    returned_obj.hazmat = "Missing"
  }

  if (typeof containerId !== Number) {
    console.log("tipe of containerid: ",  typeof containerId);
    returned_obj.containerId = "Invalid"
  }
  if (typeof destination !== String) {
    console.log("tipe of destination: ",  typeof containerId);
    returned_obj.destination = "Invalid"
  }
  if (typeof weight !== Number) {
    console.log("tipe of weight: ",  typeof containerId);
    returned_obj.weight = "Invalid"
  }
  if (unit !== "lb" || unit !== "kg") {
    console.log("tipe of unit: ",  typeof containerId);
    returned_obj.weight = "Invalid"
  }
  if (typeof hazmat !== Boolean) {
    console.log("tipe of hazmat: ",  typeof containerId);
    returned_obj.hazmat = "Invalid"
  }
  if (returned_obj.length === 0) {
    return our_manifest
  } else{
    return returned_obj
  } */
}

console.log(validateManifest(manifiesto));
console.log(validateManifest({}));
console.log(validateManifest({ containerId: null, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));
console.log(validateManifest({ containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" }));



/* console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }));
console.log(validateManifest(manifiesto)); */
