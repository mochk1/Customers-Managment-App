const express = require('express')
const app = express()
const router = express.Router();
const dbconnection = require('./connect')
const Customer = require('./Customer')
const Counter = require('./Counter')
const pdf = require('html-pdf');
const pdfTemplate = require('./pdftemplate');
const { counter } = require('@fortawesome/fontawesome-svg-core');



/* GET ALL CUSTOMERS FROM DB */

router.get('/', async (req, res) => {

 await Customer.find({}, function (err, data) {
    res.json(data)
    console.log('server done!')
  });
})


/* ADD CUSTOMER */

router.post('/addcustomer',  async (req, res) => {
 await Customer.create({ name: req.body.name }, function (err) { });

 await Customer.find({}, function (err, data) {
     res.json(data)
     console.log(req.body)
     res.status(200);
   });


  ;
})

/* GENERATE PDF */

router.post('/createpdf', async (req, res) => {

  await Counter.findOneAndUpdate({}, { $inc: { count: 1 } }); // wait for db to update the counter
  const invoivenumber = await Counter.find({}); // wait again for db to get the updated number

  let data = {

    count: invoivenumber[0].count,
    id: req.body.id,
    descreption: req.body.descreption,
    amount: req.body.amount
  }
  console.log(data)

  pdf.create(pdfTemplate(data), {}).toFile('result.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});

router.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})

module.exports = router;


/* ADD PROJECT */

router.post('/addproject', async(req, res) => {
  console.log(req.body)
  await Customer.updateOne(
    { _id: req.body.id },
    { $push: { projects: [req.body.dbdata] } },
 
  );

 await Customer.find({}, function (err, data) {
    res.json(data)
    console.log('server done!')
  });
  ;;
})


/* GET PROJECT */

router.post('/getcustomer', async (req, res) => {

  console.log(req.body)

 await Customer.find({ _id: req.body.idn }, function (err, data) {
    res.json(data)
    console.log(data)
  });

  ;
}
)


/* DELETE CUSTOMER */

router.post('/deletecustomer', async (req, res) => {
  console.log(req.body)
 await Customer.deleteOne({ _id: req.body.data }, {}, function (err, data) {

  });

await Customer.find({}, function (err, data) {
    res.json(data)
    console.log('server done!')
  });
  ;
  ;
})


router.get('/test', async(req, res) => {
  const projects = await Customer.aggregate([
    {$unwind:"$projects"}
  ])

  const allProjectsArray =  projects.map((item)=> item.projects)
  const allAmountsArray =  allProjectsArray.map((item)=> item.amount)
  const TotalAmount =  allAmountsArray.reduce((total,num )=>total+num)

const statistics = {

  allProjects:allProjectsArray.length,
  totalamount:TotalAmount


}

res.json(statistics)



  /* res.json(getValue()); */
})