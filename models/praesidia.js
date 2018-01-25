module.exports = (sequelize, DataTypes) => {
    var Praesidium = sequelize.define('praesidia', {
        month: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false,
            values: ['Sep', 'Feb']
        },
        year: {
            type: DataTypes.STRING,
            unique: false, 
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
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
        ques: {
            type: DataTypes.STRING,
            unique: false, 
            allowNull: true
        },
        batch_photo: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        }
    })
    return Praesidium;
}

