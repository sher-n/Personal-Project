module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Profile', {
        name : {
            type : dataTypes.STRING(200)
        },
        bio : {
            type : dataTypes.STRING(200)
        },
        address : {
            type : dataTypes.STRING(200)
        },
        balance : {
            type : dataTypes.FLOAT(2)
        },
    },{
        tableName : 'profiles',
        timestamps : false
    });

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey: "user_id"})
    };

    return model;
}