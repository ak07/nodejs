const AsyncErrorHandler = (err, req, res, next) => {
    if(err.name == "ValidationError" || err.name == "CastError"){
        return res.status(400).json({"message": err.message});
    }else{
        return res.status(500).json({"message": "Some thing went wrong. More Details: "+err.message});
    }
};

module.exports = AsyncErrorHandler