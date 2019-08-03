// // Sequelize (capital) references the standard library
module.exports = function (sequelize, Datatypes) {
    var victim = sequelize.define("victim", {
      //  ! Here are the columns of the table
      name: Datatypes.STRING,
      email: Datatypes.STRING,
      password: Datatypes.STRING,
      confirmPassword: Datatypes.STRING,
      address: Datatypes.STRING,
      city: Datatypes.STRING,
      state: Datatypes.STRING,
      zipcode: Datatypes.STRING,
      details: {
        type: Datatypes.TEXT,
        defaultValue: "none provided",
        comment: "nothing was entered here"
      },
    
      available: Datatypes.BOOLEAN
    });
    return victim;
  };