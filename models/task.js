module.exports = function(sequelize, DataTypes) {  

  var TaskColumns = {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
  };

  var TaskConfig = {
    classMethods: {
    }
  };

  var Task = sequelize.define("Task", TaskColumns, TaskConfig);

  return Task;
};