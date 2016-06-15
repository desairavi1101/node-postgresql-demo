module.exports = function(sequelize, DataTypes) {  

  var UserColums = {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field : 'id'
    },
    name: {
      type : DataTypes.STRING(100),
      field : 'name'
    }
    
  };

  var UserConfig = {
    classMethods: {
      associate : function(models) {
        
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