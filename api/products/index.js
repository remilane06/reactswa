const data = require('../shared/product-data');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res.status(200).json({
        products: [
            {
              id: 10,
              name: 'Strawberries',
              description: '16oz package of fresh organic strawberries',
              quantity: '1',
            },
            {
              id: 20,
              name: 'Sliced bread',
              description: 'Loaf of fresh sliced wheat bread',
              quantity: 1,
            },
            {
              id: 30,
              name: 'Apples',
              description: 'Bag of 7 fresh McIntosh apples',
              quantity: 1,
            },
          ]
      });
    /*if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200,  Defaults to 200 
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }*/
};