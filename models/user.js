module.exports = function(sequelize, DataTypes) {  

  var UserColums = {
    name: {
      type : DataTypes.STRING(100),
      field : 'name'
    }
    
  };

  var UserConfig = {
    classMethods: {
      associate : function(models) {
        User.hasMany(models.Task, {
          onUpdate : "CASCADE",
          onDelete : "CASCADE" 
        });
      }
    },
    tableName : 'user',
		timestamps : true,
		paranoid: true, //Won't delete object, add colums deleted_at to table
		underscored : true,
		freezeTableName : true,
  };

  var User = sequelize.define("User", UserColums, UserConfig);

  return User;
};