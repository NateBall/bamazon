var mysql = require('mysql');

var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Eldin13go',
    database : 'bamazon_DB'
  });

var results;

var chosenItem;

  connection.connect(function(err) {
    connection.query('SELECT * FROM auctions', function (error, data, fields) {
      if (error) throw error;
      results = data;
      start();
    });
    if (err) throw err;
  });
   
  function start() {
    console.log(results);
    for (i = 0; i < results.length; i++) {
    }
    inquirer
      .prompt({
        name: "selectProduct",
        type: "list",
        message: "What item number would you like to buy?",
        choices: populateArray
    })
    .then(function (choice) {
      chosenItem === choice;
      console.log(choice.choice);
    })
  };
  
  function populateArray() {
    var choiceArray = [];
    for (var i = 0; i < results.length; i++) {
      choiceArray.push(results[i].id.toString() + " " + results[i].product_name + " " + results[i].department_name + " " + results[i].customer_price.toString() + " " + results[i].stock_quantity.toString());
    }
    return choiceArray;
  };

  // The second message should ask how many units of the product they would like to buy.

  // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
  
  // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
  
  // However, if your store does have enough of the product, you should fulfill the customer's order.
  
  // This means updating the SQL database to reflect the remaining quantity.
  // Once the update goes through, show the customer the total cost of their purchase.




 