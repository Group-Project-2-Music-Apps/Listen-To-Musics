const jwt = require('jsonwebtoken');

function signToken(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET);
    return accessToken;
}

function verifyToken(accessToken){
    const decoded = jwt.verify(accessToken, process.env.SECRET);
    return decoded;
}

module.exports = {
    signToken, 
    verifyToken
}