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
        // date_birth: {
        //     type: DataTypes.DATEONLY,
        //     unique: false,
        //     allowNull: true
        // },
        linkedin: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        pf_photo: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        batch_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'batches',
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    })
    return Member;
}
