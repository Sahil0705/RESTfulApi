const express = require("express");

const router = new express.Router();

const MenRanking = require("../models/mens.js");

router.get("/",(req,res)=>
{
    res.send("<h2 align='center'><br>Please click on this link to view the API: - <a href='/mens'>Link</a></h2>");
});

router.post("/mens",async(req,res)=>
{
    try
    {
        const addingMensRecord = new MenRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecord.save();
        res.status(201).send(insertMens);
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get("/mens",async(req,res)=>
{
    try
    {
        const getMens = await MenRanking.find().sort({"ranking":1});
        res.send(getMens);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.get("/mens/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        const getMen = await MenRanking.find(_id);
        console.log(getMen);
        res.send(getMen);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

router.patch("/mens/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        const getMen = await MenRanking.findByIdAndUpdate(_id,req.body,{new:true});
        console.log(getMen);
        res.send(getMen);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.delete("/mens/:_id",async(req,res)=>
{
    try
    {
        const _id = req.params;
        const getMen = await MenRanking.findByIdAndDelete(_id);
        console.log(getMen);
        res.send(getMen);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
});

router.get("/*",(req,res)=>
{
    res.render("404_error",
    {
        errorMsg:"Oops 😖 !! Page not found ❌"
    });
});

router.get("/mens/*",(req,res)=>
{
    res.render("404_error",
    {
        errorMsg:"Oops 😖 !! Page not found ❌"
    });
});

module.exports = router;