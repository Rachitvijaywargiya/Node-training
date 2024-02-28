const express=require("express");
const obj=[{
    id:1,task:"fresh up"
},{id:2,task:"have breakfast"},
{id:3,task:"study"},
{id:4,task:"music"},
{id:5,task:"Dsa"},
{id:6,task:"sports"}
];
const app=express();
app.use(express.json());
app.get("/",function(req,res){
    res.send(obj);
});
app.post("/:id",function(req,res){
    const id=req.params.id;
    const todo=obj.find(todo=>todo.number===parseInt(id));
   const st=req.body;
   obj.push(st);
    res.send(todo);
})
app.put("/ok/:id",(req,res)=>{
    const {id,task}=req.body;
    const todo = obj.find(todo => todo.id === parseInt(req.params.id));

    todo.id=id;
    todo.task=task;
    res.send(obj);
});
app.delete('/delete/:id', (req, res) => {
   
    const todo = obj.find(todo => todo.id === parseInt(req.params.id));
    // obj.splice(obj.indexOf(todo), 1);
    res.send(todo);
    delete obj[todo.id-1];
    
  });

app.listen(3000,()=>{
    console.log("hey");
});