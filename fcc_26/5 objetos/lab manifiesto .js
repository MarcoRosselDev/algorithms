const manifiesto = {
  containerId:0,
  destination:"Misisipi",
  weight: 122,
  unit: "lb",
  hazmat: true
}
const manifiesto_wrong_test = {
  containerId:"string",
  destination:"Misisipi",
  weight: True,
  unit: "lb",
}

// hazmat = materiales peligrosos

function normalizeUnits(manifest) {
  const new_manifest = {...manifest};
  if (new_manifest.unit === "kg"){
    return new_manifest
  } else {
    new_manifest.weight = new_manifest.weight * 0.453592;
    new_manifest.unit = "kg";
    return new_manifest;
  }
}

function validateManifest(manifest) {
  const new_manifest = {...manifest};
  const include_containerId = new_manifest.contains("containerId")
  const include_destination = new_manifest.contains("destination")
  const include_weight = new_manifest.contains("weight")
  const include_unit = new_manifest.contains("unit")
  const include_hazmat = new_manifest.contains("hazmat")

  let manifest_miss = {}
  if(!include_containerId){
    manifest_miss.containerId = "Missing"
  } else {
    const type_containerId = typeof manifest.containerId
    if (type_containerId === "string") {
      
    }
  }
  
}

console.log(validateManifest());
