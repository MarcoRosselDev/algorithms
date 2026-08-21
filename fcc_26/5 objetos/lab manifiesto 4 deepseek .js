let normalizeUnits = (manifest) => {
  const newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
};

let validateManifest = (manifest) => {
  const errors = {};
  
  // containerId checks
  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || !Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }
  
  // destination checks
  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }
  
  // weight checks (CAMBIO: el peso debe ser mayor a 0, por ende <= 0 es "Invalid")
  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }
  
  // unit checks
  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }
  
  // hazmat checks
  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }
  
  return errors;
};

let processManifest = (manifest) => {
  const validationErrors = validateManifest(manifest);
  if (Object.keys(validationErrors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationErrors);
  }
};