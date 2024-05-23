module.exports = (sequelize, Sequelize, DataTypes) => {
  const UserAddress = sequelize.define(
    "user_address", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
      },
      country: {
        type: DataTypes.STRING(255),
      },
      state: {
        type: DataTypes.STRING(255),
      },
      city: {
        type: DataTypes.STRING(255),
      },
      postal_code: {
        type: DataTypes.STRING(20),
      },
      phone_number: {
        type: DataTypes.STRING(20),
      },
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return UserAddress;
};
