var express=require('express');
var mysql=require('mysql2');
var fileupload=require('express-fileupload');
var path=require('path');
var fs=require('fs');
const { resolveSoa } = require('dns');

var app=express();

app.use(fileupload());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'crud_operation'
});

app.get('/',(req,res)=>{
    res.redirect('/form');
})
app.get('/form',(req,res)=>{
    res.render('form.ejs');
})
app.post('/save',(req,res)=>{
    var {student_name,email,mobile,course,city}=req.body;
    const img=req.files.photo;
    var imgname=Date.now()+img.name;
    var imgpath=path.join(__dirname,'public',imgname);
    img.mv(imgpath,(err)=>{ 
        var sql=`insert into student(student_name,email,mobile,course,city,photo)
        values('${student_name}','${email}','${mobile}','${course}','${city}','${imgname}')`;
        conn.query(sql,(err1,result)=>{
            res.redirect('/table');
        })
    })
})
app.get('/table',(req,res)=>{
    var sql=`select * from student`;
    conn.query(sql,(err,result)=>{
        res.render('table.ejs',{stud:result});
    })
})
app.get('/delete/:id/:img',(req,res)=>{
    var id=req.params.id;
    var img=req.params.img;
    // res.send(img);
    var imgpath=path.join(__dirname,'public',img);
    fs.unlink(imgpath,(err)=>{ });
    
    var sql=`delete from student where stud_id='${id}'`;
    conn.query(sql,(err1,result)=>{
        // res.send(result);
        res.redirect('/table');
    })
})
app.get('/edit/:id',(req,res)=>{
    var id=req.params.id;
    var sql=`select * from student where stud_id='${id}'`;
    conn.query(sql,(err,result)=>{
        res.render('update_form.ejs',{stud:result[0]});
    })
})
app.post('/update/:id/:img',(req,res)=>{
    var id=req.params.id;
    var oldimg=req.params.img;
    // res.send(oldimg)
    if(req.files){
        // res.send(req.files);
        const img=req.files.photo;
        var imgname=Date.now()+img.name;
        // res.send(imgname);
        var imgpath=path.join(__dirname,'public',imgname);
        img.mv(imgpath,(err)=>{ })

        var imgpath1=path.join(__dirname,'public',oldimg);
        fs.unlink(imgpath1,(err)=>{ })
    }else{
        var img=oldimg;
    }
    // res.send(imgname);
    var {student_name,email,mobile,course,city,photo}=req.body;
    var sql=`update student set
    student_name='${student_name}',
    email='${email}',
    mobile='${mobile}',
    course='${course}',
    city='${city}',
    photo='${imgname}'
    where stud_id='${id}'`;
    // res.send(sql);
    conn.query(sql,(err10,result10)=>{
        res.redirect('/table');
    })
})

app.listen(3000);