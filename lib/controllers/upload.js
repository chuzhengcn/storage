exports.index = function (req, res) {
    req.on('data', function(chunk) {
        console.log(chunk)
    })
}