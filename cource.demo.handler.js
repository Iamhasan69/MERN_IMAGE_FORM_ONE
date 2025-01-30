import crmodel from "../models/course.model.js";

async function CreateDummycource(req,res){
    const data = req.body;
    try{

        const createCource = await crmodel.create({
            name:data.name,
            date:data.date,
            description:data.description,
            image:data.image,
            imageType:data.imageType,
        });
        return res.status(201).json({msg:"success"});
    }catch(err){
        return res.json({msg:err.message});
    }
}


async function getAllCource(req,res){
    try{

        const getCource = await crmodel.find({});
        return res.status(200).json(getCource);
    }
    catch(err){
        return res.json(err);
    }
}

export {CreateDummycource,getAllCource};

