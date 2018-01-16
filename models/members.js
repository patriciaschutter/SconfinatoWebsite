module.exports = (sequelize, DataTypes) => {
    var Member =  sequelize.define('members', {
        first_name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        linkedin: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        pf_photo: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        }
    })
    return Member;
}

