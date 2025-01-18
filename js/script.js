// Function to open the popup
function openPopup(image) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = image.src;
    popup.style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

// Function to update table rows
function updateTableRows(tableName, selectedValue) {
	let table = document.getElementById(tableName);
	let rows = Array.from(table.tBodies[0].rows);

	if (selectedValue === "select") return;
	if (selectedValue === "all") {
		rows.forEach(row => (row.style.display = ""));
	} else {
		let rowCount = parseInt(selectedValue);
		rows.forEach((row, index) => {
			row.style.display = index < rowCount ? "" : "none";
		});
	}
}

// Function to search in table
function searchTable(tableName) {
	let input = document.getElementById("searchBox");
	let filter = input.value.toLowerCase();
	let table = document.getElementById(tableName);
	let rows = Array.from(table.tBodies[0].rows);

	rows.forEach(row => {
		let text = Array.from(row.cells)
			.map(cell => cell.textContent.toLowerCase())
			.join(" "); // Concatenate text of all cells in the row
		row.style.display = text.includes(filter) ? "" : "none";
	});
}

// Function to sort table based on column
function sortTable(columnIndex, id) {
	let table = document.getElementById(id);
	let rows = Array.from(table.rows).slice(1);
	let ascending = table.getAttribute('data-sort-asc') === 'true';

	rows.sort((a, b) => {
		let cellA = a.cells[columnIndex].innerText.toLowerCase();
		let cellB = b.cells[columnIndex].innerText.toLowerCase();

		if (columnIndex === 0) {
			return !ascending ? cellA - cellB : cellB - cellA;
		}
		return !ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
	});

	table.setAttribute('data-sort-asc', !ascending);

	rows.forEach((row, index) => {
		table.tBodies[0].appendChild(row);
		row.cells[0].innerText = index + 1; // Update the serial number
	});
}