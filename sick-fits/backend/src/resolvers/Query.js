const Query = {
  dogs: function(parent, args, context, info) {
    global.dogs = global.dogs || []
    return global.dogs;
  }
};

module.exports = Query;
