export const groupTransactionsByMonth = (transactions) => {
  return transactions.reduce((groups, transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', {
      month: 'long'
    })
    const year = new Date(transaction.date).getFullYear()
    const key = `${month} ${year}`

    if (!groups[key]) {
      groups[key] = []
    }

    groups[key].push(transaction)
    return groups
  }, {})
}
/*
  Returns an array grouped by month
{
  "March 2023": [
    {
      "expense": "0",
      "uid": "rWOSYt7I98RV8XuRRoW9VcCZ9t42",
      "income": "30",
      "description": "Luz",
      "date": "2023-03-08T04:23:27.754Z"
    },
    {
      "expense": "12",
      "description": "almuerzo",
      "income": 0,
      "uid": "rWOSYt7I98RV8XuRRoW9VcCZ9t42",
      "date": "2023-03-07T00:56:51.286Z"
    }
  ],
  "April 2023": [
    {
      "uid": "rWOSYt7I98RV8XuRRoW9VcCZ9t42",
      "description": "pollo",
      "income": "23",
      "expense": 0,
      "date": "2023-04-07T23:48:51.778Z"
    },
    {
      "expense": "20",
      "uid": "rWOSYt7I98RV8XuRRoW9VcCZ9t42",
      "date": "2023-04-06T00:45:28.924Z",
      "description": "almuerzo",
      "income": 0
    }
  ],
  "February 2023": [
    {
      "uid": "rWOSYt7I98RV8XuRRoW9VcCZ9t42",
      "income": "60",
      "expense": 0,
      "description": "Camion",
      "date": "2023-02-07T00:50:52.483Z"
    }
  ]
}
 */
