function makeDiagonalRed(table) {
  let trs = table.rows
  for (let i = 0; i < trs.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red'
  }
}
