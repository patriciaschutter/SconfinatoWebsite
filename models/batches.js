module.exports = (sequelize, DataTypes) => {
    var Batch = sequelize.define('batches', {
        batch: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        inauguration: {
            type: DataTypes.DATEONLY,
            unique: false, // ZET TERUG NAAR TRUE ALS KLAAR MET TESTING, MAAR NU PRIMA. 
            allowNull: false
        },
        batch_photo: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        }
    })
    return Batch;
}