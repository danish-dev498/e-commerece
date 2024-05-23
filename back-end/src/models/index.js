const Sequelize = require("sequelize");
const DataTypes = require("sequelize");
const colors = require("colors");

const sequelize = new Sequelize("coffee-shop-management", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log(colors.blue("Models synchronized successfully."));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Synchronize models with the database

const db = {};

db.Sequelize = Sequelize;
db.Op = Sequelize.Op;
db.sequelize = sequelize;

db.User = require("./user.models.js")(sequelize, Sequelize, DataTypes);
db.Order = require("./order.models.js")(sequelize, Sequelize, DataTypes);
db.ShoppingSession = require("./shopping-session.models.js")(
  sequelize,
  Sequelize,
  DataTypes
);
db.Product = require("./product.models.js")(sequelize, Sequelize, DataTypes);
db.ShoppingSession = require("./shopping-session.models.js")(
  sequelize,
  Sequelize,
  DataTypes
);
db.Category = require("./category-models.js")(sequelize, Sequelize, DataTypes);
db.Payment = require("./payment.models.js")(sequelize, Sequelize, DataTypes);
db.Cart = require("./cart.models.js")(sequelize, Sequelize, DataTypes);
db.UserAddress = require("./user-address.models.js")(
  sequelize,
  Sequelize,
  DataTypes
);

//

db.User.hasMany(db.Order, { foreignKey: "user_id" });
db.Order.belongsTo(db.User, { foreignKey: "user_id" });

db.User.hasMany(db.UserAddress, { foreignKey: "user_id" });
db.UserAddress.belongsTo(db.User, { foreignKey: "user_id" });

db.User.hasMany(db.Cart, { foreignKey: "user_id" });
db.Cart.belongsTo(db.User, { foreignKey: "user_id" });

db.Product.belongsToMany(db.Cart, {
  through: "cart_product",
  foreignKey: 'product_id',
  otherKey : "cart_id"
});

db.Cart.belongsToMany(db.Product, {
  through: "cart_product",
  foreignKey: 'cart_id',
  otherKey : "product_id"
});

db.Product.belongsTo(db.Category, { foreignKey: "category_id" });
db.Category.hasMany(db.Product, { foreignKey: "category_id" });

db.Product.belongsTo(db.Order, { foreignKey: "product_id" });
db.Order.hasMany(db.Product, { foreignKey: "product_id" });

db.Order.belongsTo(db.Payment, { foreignKey: "payment_id" });
db.Payment.hasMany(db.Order, { foreignKey: "payment_id" });

// db.ShoppingSession.hasMany(db.Cart, { foreignKey: "session_id" });
// db.Cart.belongsTo(db.ShoppingSession, { foreignKey: "session_id" });

// db.Product.belongsToMany(db.ShoppingSession, {
//   through: db.Cart,
//   foreignKey: "product_id",
// });
// db.ShoppingSession.belongsToMany(db.Product, {
//   through: db.Cart,
//   foreignKey: "session_id",
// });

(async () => {
  try {
    await sequelize.sync({ force: false }); // Set force to true for development, false for production
    console.log("Models synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize models with the database:", error);
  }
})();

module.exports = db;
