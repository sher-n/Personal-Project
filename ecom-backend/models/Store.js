module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Store', {
        name : {
            type : dataTypes.STRING(200)
        }
    },{
        tableName : 'Stores',
        timestamps : false
    });

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey: "user_id"});
        model.belongsToMany(models.Product, { through : models.Interact , foreignKey : 'interactid'});

    };

    return model;
}