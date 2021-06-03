const express = require('express')
const app = express()
const router = express.Router();
const dbconnection = require('./connect')
const Customer = require('./Customer')
const Counter = require('./Counter')
const pdf = require('html-pdf');
const pdfTemplate = require('./pdftemplate');
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("./User");
const Notes = require("./Notes");
const { Model, Document, Mongoose } = require('mongoose');


/* REGISTER USER */


router.post('/register', async (req, res) => {

     User.findOne({username: req.body.username}, async function (err, data) {
    if (err) throw err;
       if(data) {
       res.send('User Exists, Choose Another Username')
    }
    if (!data) {
        const hashedpassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
        username: req.body.username,
        password: hashedpassword
        });

        await newUser.save();
        res.send(`User For ${req.body.username} Created`)
  };




 })})
 


/* LOGIN USER */
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send(info.message);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).json({
          username:user.username,
          id:user._id,
          isLoggedin:true
        });
      });
    }
  })(req, res, next);
});



/* GET ALL CUSTOMERS FROM DB */

router.post('/customers', async (req, res) => {

 await Customer.find({userid:req.body.userid}, function (err, data) {

  console.log(data)
    res.json(data)
    console.log('server done!')
  });
})


/* ADD CUSTOMER */

router.post('/addcustomer',  async (req, res) => {
 await Customer.create({ name: req.body.name,userid:req.body.userid }, function (err) { });

 await Customer.find({userid:req.body.userid}, function (err, data) {
     res.json(data)
     console.log(req.body)
     res.status(200);
   });


  ;
})

/* GENERATE PDF */

router.post('/createpdf', async (req, res) => {

/*   await Counter.findOneAndUpdate({}, { $inc: { count: 1 } });
   // wait for db to update the counter
  const invoivenumber = await Counter.find({});
   // wait again for db to get the updated number */

  const data = {

    /* count: invoivenumber[0].count, */
     count: '00001', 
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

 await Customer.find({userid:req.body.userid}, function (err, data) {
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


/* DELETE PROJECT */

router.post('/deleteproject', async (req, res) => {
console.log(req.body)
/*   console.log(req.body) */

  try{
 await Customer.updateOne(
  {_id: req.body.customerid },
  { $pull: {projects:{ _id: req.body.projectid} } }   
); 
 } catch{
  console.log('error')
 };

 await Customer.find({userid:req.body.userid}, function (err, data) {
  res.json(data)

});
  
}
)




/* DELETE CUSTOMER */

router.post('/deletecustomer', async (req, res) => {
  console.log(req.body)
 await Customer.deleteOne({ _id: req.body.data }, {}, function (err, data) {

  });

await Customer.find({userid:req.body.userid}, function (err, data) {
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


//GET COUNTER NUMBER


//router.post('/getcounter', async (req, res) => {

//  const invoivenumber = await Counter.find({});
//  res.json(invoivenumber)} *#


/* ADD NOTES */


router.post('/addnote',  async (req, res) => {
  const {userid,date,noteText} = req.body
  try{
  await Notes.create({userid:userid, date:date, noteText:noteText }, function (err) {
    console.log(noteText)
    });
 
    await Notes.find({userid:userid}, function (err, data) {
      res.json(data)
      
    
    });
  }
 catch(err){

console.log(err)
 }
   ;
 })

 



 
/*  GET NOTES */


router.post('/getnotes',  async (req, res) => {
  const {userid} = req.body
try{
  await  Notes.find({userid:userid}, function (err, data) {
      res.json(data)
      console.log(req.body)

    
    });
  }
 catch(err) {

console.log(err)

 }
   ;
 })


 /* DELETE NOTES */

router.post('/deletenote',  async(req, res) => {
  const {id,userid} = req.body
 await Notes.deleteOne({ _id: id }, {}, function (err, data) {
    console.log('note deleted')
  });

 await Notes.find({userid :userid}, function (err, data) {
    res.json(data)
    
  });
  ;
  ;
})


/* UPDATE NOTE */

router.post('/updatenote',  async (req, res) => {
  const {userid,noteText,noteid} = req.body
  console.log(req.body)
  try{
   await Notes.updateOne(
    { _id: noteid},
    { $set: { noteText: noteText } },
 
  ); 
 


  await Notes.find({userid:userid}, function (err, data) {
      res.json(data)
      
    
    });
  }
 catch(err){

console.log(err)
 }
   ;
 })
