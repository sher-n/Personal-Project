module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('User', {
        username : {
            type : dataTypes.STRING(255)
        },
        password : {
            type : dataTypes.STRING(255)
        },
        email : {
            type : dataTypes.STRING(255)
        },
    },{
        tableName : 'users',
        timestamps : false
    });

    model.associate = models => {

        model.hasOne(models.Profile, { foreignKey : "user_id"});
        model.hasOne(models.Cart, { foreignKey : "user_id"});
        model.hasOne(models.Store, { foreignKey : "user_id"});
        model.hasOne(models.PendingList , { foreignKey : "user_id"});

        // model.belongsToMany(models.Product, { through : models.Interact , foreignKey : 'produt'});
        // model.hasOne(models.Buy, { foreignKey : "user_id"});

    };

    return model;
}