const exp = require("express");

const app = exp();
const port = 4050;




app.get('/', (req,res)=>{
  res.send('arham')
})

app.listen(port,() => {
    console.log("Server Running...");
  })
module.exports = app