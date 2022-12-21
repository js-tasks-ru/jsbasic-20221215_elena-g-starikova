function truncate(str, maxlength) {
  if ((str.length + 1) <= maxlength ) {
    return str
  } 
  else {
      return str.slice(0, maxlength - 1) + "…"
  }
}
