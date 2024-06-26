'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Provider.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Party:{
      type: DataTypes.STRING,
    },
    
    Table: {
      type: DataTypes.STRING
    },
    Guests: {
      type: DataTypes.STRING
    },
    remainder: {
      type: DataTypes.STRING
    },
   
        
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};