const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {
    if(!req.headers.authorization) return res.status(403).json({msg: 'Pas autorisé. Aucun jeton!'})

    if(req.headers.authorization.startsWith("Bearer ")){
      const token = req.headers.authorization.split(' ')[1] //récupérez le deuxième element qui est le jeton lui-même (sans le texte "Bearer")
      jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if(err) return res.status(403).json({msg: 'Jeton erroné ou expiré.'})
        else {
            req.user = data // un objet avec uniquement l'identifiant de l'utilisateur comme propriété
            next()
        }
      })
    } else {
        return res.status(403).json({msg: 'Pas autorisé. Aucun jeton!!'})
    }
}

module.exports = verifyToken