// // Sequelize (capital) references the standard library
module.exports = function (sequelize, Datatypes) {
    var victim = sequelize.define("victim", {
      //  ! Here are the columns of the table
     
      email: Datatypes.STRING,
      password: Datatypes.STRING,
      address: Datatypes.STRING,
      address2: Datatypes.STRING,
      city: Datatypes.STRING,
      state: Datatypes.STRING,
      zipcode: Datatypes.STRING,
    
      available: Datatypes.BOOLEAN
    });
    return victim;
  };