module.exports = (sequelize, DataTypes) => {
    var Praesidium = sequelize.define('praesidia', {
        pipa: {
            type: DataTypes.STRING,
            unique: false, 
            allowNull: true
        },
        vice: {
            type: DataTypes.STRING,
            unique: false, 
            allowNull: true
        },
        questrix: {
            type: DataTypes.STRING,
            unique: false, 
            allowNull: true
        },
        monthyear: {
            type: DataTypes.DATE,
            unique: false,
            allowNull: true,
        },
        praesidium_photo: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        }
    })
    return Praesidium;
}
