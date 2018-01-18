module.exports = (sequelize, DataTypes) => {
    var Batch = sequelize.define('batches', {
        batch: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        },
        inauguration: {
            type: DataTypes.DATEONLY,
            unique: false, 
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        batch_photo: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        }
    })
    return Batch;
}
