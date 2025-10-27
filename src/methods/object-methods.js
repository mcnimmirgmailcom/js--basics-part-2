// lös uppgifterna med olika objektmetoder. titta på förväntat testresultat om du behöver ledtrådar

export const getKeys = (object) => {
  return Object.keys(object);
};

export const getValues = (object) => {
  return Object.values(object);
};
console.log(getValues({ Hero: "Sonic", Ugh: "Mario", Nobody: "Zelda" }));

export const getEntries = (object) => {
  return Object.entries(object);
};
console.log(getEntries({ Cha: "Sonic", Age: "15", Hobby: "Running" }));

export const fromEntriesToObject = (entriesArray) => {};

export const mergeObjects = (objectA, objectB) => {};

// avancerad
export const pick = (object, keys) => {};

// avancerad
export const invertObject = (object) => {};
