const express = require("express");
const app=express();
app.use(express.json());


app.get("/username",(req,res)=>{

    const user= req.query.user;
    if(!user)
    {
        return res.status(400).send({Error:"Invalid username format"});
    }
    const wordArray=user.split(",");
    const finalArray=wordArray.join(" ");
    res.send({username: user})
})

app.get("/email",(req,res)=>{

    const mail= req.query.mail;
    if(mail!="example@gmail.com")
    {
        return res.status(400).send({Error:"Invalid email format"});
    }
    
    res.send({email: mail})
})

// app.get("/password",(req,res)=>{

//     const {pass}= req.body;
//     // if(pass!="example@gmail.com")
//     // {
//     //     return res.status(400).send({Error:"Invalid email format"});
//     // // }
//     const passArray=pass.split(",");
//     const finalPassArray=passArray.join(" ");
//     const finalArray=finalArray.filter(num=>finalArray[0]);
//     finalArray.pop();
//     if(pass!="a" || pass!="b")
//     {
//         return res.status(400).send({Error:" Password should be atleast 8 characters"});
//     }
    
//     res.send({password: pass})
// });




app.get("/dob",(req,res)=>{

    const year= req.query.year;
    if(year>2006)
    {
        return res.status(400).send({Error:"User must be 18 or older"});
    }
    
    res.send({dob : year}) 
})

app.get("/password",(req,res)=>{

    const pass= req.query.pass;
    if(!pass)
    {
        return res.status(400).send({Error:"Password should contain atleast one upper case, one lower case letter, one number and one special character"});
    }
    
    res.send({password: pass})
})

const PORT= 3010;
app.listen(PORT,()=>{
    console.log(`Server is running on local host ${PORT}`);
})

