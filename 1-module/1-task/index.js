function factorial(n) {
  let c = 1
  let f = 1
  let result = 0

  if (n <= 1) result = 1
            
  for (let i = 0; i < n; i++) {
    c = (n - i)
    result = f * c
    f = result              
  }
  return result
}

factorial(5)