const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.SymbolName.find(req.query)
            .then(dbModel => {
                console.log(dbModel)
                return res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
}