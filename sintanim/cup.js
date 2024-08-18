// Example object to modify
let changes = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

// Example values object
let values = {
  key2: 'new value for key2',
  key3: 'new value for key3'
};

// Function to modify changes object based on values
function modifyChanges(changes, key, newValue) {
  if (changes.hasOwnProperty(key)) {
    changes[key] = newValue;
  }
}

// Applying modifications based on values object
for (let key in values) {
  if (values.hasOwnProperty(key)) {
    modifyChanges(changes, key, values[key]);
  }
}

console.log(changes); // Output: { key1: 'value1', key2: 'new value for key2', key3: 'new value for key3' }
