module.exports = (sequelize, Sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true, // or false, depending on your requirement
      },
      description: {
        type: Sequelize.TEXT,
      },
      ingredients: {
        type: Sequelize.TEXT,
        defaultValue: [],
        get() {
          return JSON.parse(this.getDataValue("ingredients"));
        },
        set(val) {
          this.setDataValue("ingredients", JSON.stringify(val));
        },
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      inventory_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      discount_id: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      deleted_at: {
        type: Sequelize.DATE,
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

  return Product;
};
