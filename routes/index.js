
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {});
};

exports.contact = function(req, res){
  res.render('contact', {});
};

exports.bookInfo = function(req, res){
    res.send({
        status: 'ok',
        name: 'Andy',
        title: 'hgeiwgewg'
    });
};

exports.author = function(req, res){
    res.send({
        status: 'ok',
        name: 'Jollen Chen',
        hash: '400c529007e2242ac7132c78fc772e91'
    });
};
