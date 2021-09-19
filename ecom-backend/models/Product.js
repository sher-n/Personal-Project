module.exports = (sequelize, dataTypes) => {
    const model = sequelize.define('Product', {
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
        tableName : 'products',
        timestamps : false
    });

    model.associate = models => {
        model.belongsTo(models.Store , { foreignKey: "store_id"});
        model.hasMany(models.Cart , { foreignKey : 'product_id'});
        model.hasMany(models.PendingList ,{ foreignKey : 'product_id'});
    }

    return model;
}