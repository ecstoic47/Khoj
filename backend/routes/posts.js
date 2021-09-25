const router = require("express").Router();
const Post = require("../models/Post");
const dayjs = require("dayjs"); /// using this library for formatting date

//saving the input into database

router.post("/", async (req, res) => {

    try {

        const newPost = new Post({
            user_Id: req.body.id,
            input_values: req.body.inputString

        });

        const post = await newPost.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});



//// Section 3 GET API 


router.get("/", async (req, res) => {
    const id = req.query.id;
    const start_datetime = req.query.start_datetime; /// Getting data from paramas of postman
    const end_datetime = req.query.end_datetime;

    try {
        const data = await Post.find({
            user_Id: id,
            createdAt: { $gte: dayjs(start_datetime).toDate(), $lte: dayjs(end_datetime).toDate() }  ///finding data from mongoDB using the parameters
        },
            { _id: 0, createdAt: 1, input_values: 1 });

        const newData = data.map(item => ({ timestamps: dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss"), input_Values: item.input_values })); /// formatting the data retrieved from database as per instructions

        newData.length != 0 ? (
            res.status(200).json({      /// if data found then sending response as per requirements
                "Id": id,
                "Status": "Success",
                "Payload": newData
            })) : res.status(400).json("No Data Found for This User!"); /// if data not found then sending no data found as response
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;