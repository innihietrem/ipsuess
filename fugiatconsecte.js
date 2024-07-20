// Assume `scale` is a D3 scale object
let scale = d3.scaleLinear()
    .domain([0, 100])  // Example domain definition

// Assigning `scale.domain` to `domain`
let domain = scale.domain;  // Now `domain` is a reference to [0, 100]
