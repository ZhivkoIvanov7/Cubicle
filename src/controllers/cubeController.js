const Cube = require('../models/Cube_Old');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    let cube = new Cube(...Object.values(req.body));
    cube.save();
    
    res.redirect('/');
};

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);
    if(!cubeId) {
        return res.redirect('/404');
    }

    let cube = db.cubes.find(x => x.id === cubeId);

    if(!cube){
        return res.redirect('/404');
    }

    res.render('details', {cube});
}