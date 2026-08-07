let manifiesto = {
  containerId:0,
  destination:"Misisipi",
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

  if (our_manifest.containerId === "Missing") {
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
  }
}

console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }));
console.log(validateManifest(manifiesto));
