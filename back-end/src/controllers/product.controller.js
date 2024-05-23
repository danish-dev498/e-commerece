const db = require("../models");

const { asyncHandler } = require("../utils/asyncHandler");
const { ApiResponse } = require("../utils/ApiResponse");
const { ApiError } = require("../utils/ApiErrors");

const color = require("colors");
const { Op } = require("sequelize");

const Product = db.Product;

const getAllProduct = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const searchQuery = req.body.search || "";
  const sku = req.body.sku || "";
  const title = req.body.title || "";
  const description = req.body.description || "";

  try {
    let whereCondition = {};

    if (searchQuery) {
      whereCondition = {
        [Op.or]: [
          { title: { [Op.like]: `%${searchQuery}%` } },
          { description: { [Op.like]: `%${searchQuery}%` } },
          { sku: { [Op.like]: `%${searchQuery}%` } },
        ],
      };
    }

    if (sku || title || description) {
      whereCondition = {
        ...whereCondition,
        [Op.or]: [
          ...(sku ? [{ sku: { [Op.like]: `%${sku}%` } }] : []),
          ...(title ? [{ title: { [Op.like]: `%${title}%` } }] : []),
          ...(description
            ? [{ description: { [Op.like]: `%${description}%` } }]
            : []),
        ],
      };
    }

    const offset = (page - 1) * limit;
    const { count, rows } = await Product.findAndCountAll({
      where: whereCondition,
      offset,
      limit,
    });

    const totalPages = Math.ceil(count / limit);

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          products: rows,
          pagination: {
            currentPage: page,
            totalPages,
            hasNext: page < totalPages,
            hasPrevious: page > 1,
            totalItem: count,
          },
        },
        "Products fetched successfully"
      )
    );
  } catch (error) {
    throw new ApiError(404, error);
  }
});




const addToCart = asyncHandler(async (req, res, next) =>{


  

})


module.exports = {
  getAllProduct,
};
