let express = require('express');
var bodyParser = require ('body-parser');


let router = express.Router();

router.use(bodyParser.json());

function Calculator() {

    var methods = {
      "-": function(a, b) {
        return a - b;
      },
      "+": function(a, b) {
        return a + b;
      },
      "*": function(a, b) {
        return a * b;
      },
      "/": function(a, b) {
        return a / b;
      }
    };
  
    this.calculate = function(str) {
  
      var split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return methods[op](a, b);
    }
  }
  
  var calc = new Calculator;
  

//Получение постов
router.get('/', function (req, res, next) {
    //res.json({status: "ok", breed: "1"});
    res.send('Super Calculator')
});

router.post('/', function (req, res, next) {
    //console.log(req.query);
    //let result = req.body.id;
    //console.log(req.body);    
    let result = calc.calculate(req.body.id);
    //alert( result ); 
    //res.json({status: "ok", result: '100'});
    res.json({result:result});
    //res.send('hello, world!')
});

module.exports = router;