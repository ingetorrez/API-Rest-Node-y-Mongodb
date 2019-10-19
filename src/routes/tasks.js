const Router = require('express');
const router = Router();

const connect = require('../database');
const { ObjectID } = require('mongodb');

router.get('/', async(req, res) => {
    const db = await connect();

    const result = await db.collection('tasks').find({}).toArray();

    res.send(result);
});

router.post('/', async(req, res) => {
    const db = await connect();
    const { title, description } = req.body;
    const task = {
        title,
        description
    }

    const r = await db.collection('tasks').insertOne(task);

    res.json(r.ops[0]);
});

router.get("/:id", async(req, res) => {
    const db = await connect();
    const { id } = req.params;

    // await db.collection("tasks").findOne({ _id: ObjectID(id) }).then((r) => {
    //     res.json(r);
    // }).catch((e) => {
    //     console.log(e);
    // })

    const r = await db.collection("tasks").findOne({ _id: ObjectID(id) });

    res.json(r);
});

router.delete('/:id', async(req, res) => {
    const db = await connect();
    const { id } = req.params;

    await db.collection('tasks').deleteOne({ _id: ObjectID(id) });

    res.json({
        msg: `Task ${id} deleted`
    })
});

router.put('/:id', async(req, res) => {
    const db = await connect();
    const { id } = req.params;
    const { title, description } = req.body;
    const task = {
        title,
        description
    }

    await db.collection('tasks').updateOne({ _id: ObjectID(id) }, { $set: task });

    res.json({
        msg: `Task ${id} Updated`
    })
})


module.exports = router;