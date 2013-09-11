
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
    console.log(req.params);
    console.log(req.params.cat);
    console.log(req.params.id);
    res.send('ok');
};
