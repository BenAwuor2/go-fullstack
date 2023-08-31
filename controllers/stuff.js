const Thing = require('../models/thing');

exports.createThing =  (req, res, next) => {
    /* console.log(req.body) */
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price, 
    })
    /* console.log(thing) */
    thing.save().then(() => {
        res.status(201).json({
            message: 'Post successful;'
        })
    }).catch((error) => {
        res.status(400).json({
            error
        })
    })
};

exports.getOneThing = (req,res,next) => {
    Thing.findOne({_id: req.params.id}).then(
        (thing) => {
            res.status(200).json(thing)
        }
    ).catch(
        (err) => {
            res.status(404).json({
                err
            })
        }
    )
};

exports.modifyThing = (req,res,next) => {
    const thing = new Thing({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price, 
    });
    Thing.updateOne({_id: req.params.id}, thing).then(
        () => {
            res.status(201).json({
                message: 'THing updated successfully'
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error
            })
        }
    );
};

exports.deleteThing = (req,res,next) => {
    Thing.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message:'Successfully deleted'
            });
        }
    ).catch(
        (err) => {
            res.status(400).json({
                err
            })
        }
    )
};

exports.getAllStuff = (req,res,next) => {
    Thing.find().then((things) => {
     res.status(200).json(things)
    }).catch((error) => {
     res.status(400).json({
         error
     })
    })
 };