var express = require('express');
var router = express.Router();
const db = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  db.find({})
    .then(function (data) {
      res.render('index', { actual_data: data });
    })
    .catch(function () {
      res.render("index", { actual_data: false });
    })
});

// req: Has the details of the route
// res: Takes you to a page

router.post('/submit', function (req, res) {
  const name_data = req.body.task

  db.create({
    name: name_data
  });
  res.redirect("/");
});


router.get("/delete/:id", function (req, res) {
  const id = req.params.id;

  db.findByIdAndRemove(id, function (err) {
    if (err) {
      throw err;
    }
    else {
      res.redirect("/")
    }
  })
})

router.get("/update/:id", function (req, res) {
  const id = req.params.id;
  db.find({})
    .then(function (data) {
      res.render('update', { actual_data: data, actual_id: id });
    })
  // res.render("update", {actual_id : id});

})

router.post("/update/:id", function (req, res) {
  const id = req.params.id

  db.findByIdAndUpdate(id, { 
    name: req.body.updated_task 
  }, function (err, data) {
    if (err) {
      throw err;
    }
    else {

      res.redirect("/");
    }
  })
})

module.exports = router;
