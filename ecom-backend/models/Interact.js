module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Interact', {
      
    },{
        tableName : 'interacts',
        timestamps : false
    })


    return model;
}