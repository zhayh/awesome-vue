const allData = {
  totalRegister: 2020,
  totalActiver: 2008,
  topMouthActiver: 520,
  todayLogin: 200
}

export function getAll () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, allData)
  })
}