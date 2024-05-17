// Generate random array
const originalDataset = Array.from({ length: 30 }, () =>
  Math.floor(Math.random() * 100)
);
let dataset = [...originalDataset]; // Copy of the original array

// Set up SVG dimensions
const width = 800;
const height = 400;
const barWidth = width / dataset.length;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Initial rendering of the dataset
function renderDataset(data) {
  svg.selectAll("*").remove(); // Clear previous elements

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d, i) => i * barWidth)
    .attr("y", (d) => height - d * 4)
    .attr("width", barWidth - 1)
    .attr("height", (d) => d * 4);

  svg
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d, i) => i * barWidth + barWidth / 2)
    .attr("y", (d) => height - d * 4 - 5)
    .attr("text-anchor", "middle")
    .text((d) => d);
}

// Render the initial dataset
renderDataset(dataset);

async function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
        await updateVisualization(array);
      }
    }
  } while (swapped);
}

async function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
      await updateVisualization(array);
    }
    array[j + 1] = key;
    await updateVisualization(array);
  }
}

async function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      await updateVisualization(array);
    }
  }
}

async function updateVisualization(array) {
  svg
    .selectAll("rect")
    .data(array)
    .transition()
    .duration(100)
    .attr("y", (d) => height - d * 4)
    .attr("height", (d) => d * 4);

  svg
    .selectAll("text")
    .data(array)
    .transition()
    .duration(100)
    .attr("y", (d) => height - d * 4 - 5)
    .text((d) => d);

  // Wait a bit before the next update
  return new Promise((resolve) => setTimeout(resolve, 100));
}

function startSorting(algorithm) {
  // Reset the dataset to the original state
  dataset = [...originalDataset];

  // Re-render the initial dataset
  renderDataset(dataset);

  // Start the selected sorting algorithm
  if (algorithm === "bubble") {
    bubbleSort(dataset);
  } else if (algorithm === "insertion") {
    insertionSort(dataset);
  } else if (algorithm === "selection") {
    selectionSort(dataset);
  }
}
