function showSalary(users, age) {
  let salaries = users.reduce( (acc, user) => {
    if (user.age <= age ) {
      acc.push(user.name + "," + " "+ user.balance)
    }
    return acc
  }, []).join("\n")
  return salaries
}