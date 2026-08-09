let manifiesto = {
  containerId:0,
  destination:"chicago",
  weight: 122,
  unit: "lb",
  hazmat: true
}

let normalizeUnits = (manifest) => {
  const new_manifest = {...manifest};
  if (new_manifest.unit === "kg"){
    return new_manifest
  } else {
    new_manifest.weight = new_manifest.weight * 0.45;
    new_manifest.unit = "kg";
    return new_manifest;
  }
}

let esFlotante = (n) => {
  return Number.isFinite(n) && n % 1 !== 0;
}

let validateManifest = (manifest) => {
  const our_manifest = {...manifest}
  const {containerId = "Missing", destination = "Missing", weight = "Missing", unit = "Missing", hazmat = "Missing"} = our_manifest
  let returned_obj = {}

  let check_missing_or_invalid = (name_x, value, typeItem) => {
    let str = "";
    if (value !== "Missing") {
      if (typeof value !== typeItem) {   
        return "Invalid";
      } else {
        return false;
      }
    } else {
      return "Missing";
    }
  }
  
  const check_id = check_missing_or_invalid("containerId", containerId, "number")

  // if false do more checks
  // if something add this returned value to te obj_returned
  if (check_id) {
    returned_obj["containerId"] = check_id;
  } else {
    if (containerId <= 0) {
      returned_obj["containerId"] = "Invalid";
    } else {
      const is_float = esFlotante(containerId)
      if (is_float) {
        returned_obj["containerId"] = "Invalid";
      }
    }
  }
  const check_destination = check_missing_or_invalid("destination", destination, "string")
  if (check_destination) {
    returned_obj["destination"] = check_destination;
  } else if (destination.trim().length === 0) {
    returned_obj["destination"] = "Invalid";
  }

  const check_weight = check_missing_or_invalid("weight", weight, "number")
  if (check_weight) {
    returned_obj["weight"] = check_weight;
  } else {
    
    // Number.isNaN(weight) evalua estrictamente si el valor es NaN, porque NaN es mas complicado de verificar como valor exacto
    if (weight < 0 || Number.isNaN(weight)) {
      returned_obj["weight"] = "Invalid";
    }
  }
  const check_unit = check_missing_or_invalid("unit", unit, "string")
  if (check_unit) {
    returned_obj["unit"] = check_unit;
  } else {
    if (unit !== "kg" && unit !== "lb") {
      returned_obj["unit"] = "Invalid";    
    }
  }
  const check_hazmat = check_missing_or_invalid("hazmat", hazmat, "boolean")
  if (check_hazmat) {
    returned_obj["hazmat"] = check_hazmat;
  }
  
  if (returned_obj) {
    return returned_obj
  } else {
    return
  }
}

let processManifest = (manifest) => {
  const status_manifest = validateManifest(manifest)
  const normalized_obj = normalizeUnits(manifest)
  const {containerId, weight, unit} = normalized_obj
  //Object.keys(obj).length === 0
  if (Object.keys(status_manifest).length === 0) {
    const {containerId} = manifest
    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${weight} kg`);    
  } else {
    console.log(`Validation error: ${containerId}`);
    console.log(status_manifest);
  }
}
