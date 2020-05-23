const data = require('../shared/product-data');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res.status(200).json(Object.assign({
        id: 1,
        name: 'Pears',
        description: 'fresh organic',
        quantity: '42',
      }, data));
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