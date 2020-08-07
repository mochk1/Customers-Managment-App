const express = require('express')
const app = express()
const router = express.Router();
const Datastore = require('nedb');
const db = new Datastore({ filename: 'customers.db' });
const pdf = require('html-pdf');
const pdfTemplate = require('./pdftemplate')

  /* LOAD DB */

db.loadDatabase(function (error) {   
    if (error) {
        console.log( error);
        throw error;
      }
      console.log('local database loaded successfully.');});

    /* GET ALL USER FROM DB */
      
router.get('/', (req, res) => {

    db.find({}, function (err, data) {
     res.json(data)
 console.log('server done!')
 });})


     /* ADD CUSTOMER */

 router.post('/addcustomer', (req, res) => {
  db.insert(req.body, function (err, newDoc) { 
  });

  db.find({}, function (err, data) {
    res.json(data)
  console.log(req.body)
  });

  ;})


/* router.get('/addcount', (req, res) => {
  
  db.find({ _id:"TtIsZw3ChrPfGwR2"}, function (err, data) {
const num = data.invoicecount;
console.log(num);

});
 */
 


/*   db.update({ _id:"TtIsZw3ChrPfGwR2"}, { $set: { invoicecount: num+1 } }, { multi: true }, function (err, numReplaced) {
    // numReplaced = 3
    // Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
  });
 */


db.remove({ _id: "74lruVjWmktqnhTB" }, {}, function (err, data) {

});





  /* DELETE CUSTOMER */

  router.post('/deletecustomer', (req, res) => {
    console.log(req.body)
 db.remove({ _id: req.body.data }, {}, function (err, data) {

});

db.find({}, function (err, data) {
  res.json(data)
console.log('server done!')
});
;
  ;})


  /* ADD PROJECT */

  router.post('/addproject', (req, res) => {
    console.log(req.body)
    db.update({ _id: req.body.id }, { $push: { projects: req.body.dbdata } }, {}, function () {
   
    });

db.find({}, function (err, data) {
  res.json(data)
console.log('server done!')
});
;
  ;})


  /* GET PROJECT */

  router.post('/getcustomer', (req, res) => {
    
console.log(req.body)

db.find({_id: req.body.idn}, function (err, data) {
  res.json(data)
console.log(data)
});

  ;}
  )

 
/* GENERATE PDF */

router.post('/createpdf', (req, res) => {
  console.log(req.body)
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
      if(err) {
          res.send(Promise.reject());
      }

      res.send(Promise.resolve());
      
  });
});

router.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})

 module.exports = router;




/*  db.insert({invoicecount:'0000'}, function (err, newDoc) { 
}); */