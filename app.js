
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const date= require(__dirname+"/date.js");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items = [];
const workItems=[];
const day= date.getDate();
app.get("/", function(req,res) {
    
   
     res.render("list",{listTitle:day, newListItems: items});
});
app.get("/work", function (req,res){
  res.render("list",{listTitle:"work List", newListItems:workItems});
});
 app.get("/about", function(req,res) {
  res.render("about");
 });
app.post("/", function(req,res) {
  var item=req.body.newItem;
   if(req.body.list==="work") {
    workItems.push(item);
    res.redirect("/work");
   } else {
    items.push(item);
    res.redirect("/");
   }




 
    

});


  app.listen(process.env.PORT||3000, function(){
    console.log("server is up and running on port 3000");
  });