module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Cart', {
        product_name : {
            type : dataTypes.STRING(255)
        },
        price : {
            type : dataTypes.STRING(255)
        },
        link : {
            type : dataTypes.STRING(255)
        },
        description : {
            type : dataTypes.STRING(255)
        },
        category : {
            type : dataTypes.STRING(255)
        }
        
    },{
        tableName : 'carts',
        timestamps : false
    });

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey: "user_id"});
        model.belongsTo(models.Product, { foreignKey : 'product_id'});

    };

    return model;
}