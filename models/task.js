module.exports = function(sequelize, DataTypes) {  

  var TaskColumns = {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field : 'id'
    },
    title: {
      type : DataTypes.STRING(100),
      field : 'title'
    }
    
  };

  var TaskConfig = {
    classMethods: {
      associate : function(models) {
        Task.belongsTo(models.User, {
          onUpdate : "CASCADE",
          onDelete : "CASCADE" 
        });
      }
    },
    tableName : 'task',
		timestamps : true,
		paranoid: true, //Won't delete object, add colums deleted_at to table
		underscored : true,
		freezeTableName : true,
  };

  var Task = sequelize.define("Task", TaskColumns, TaskConfig);

  return Task;
};