"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getAllProducts: 'SELECT*FROM Products',
  createNewProduct: 'INSERT INTO Products (name,description,quantity) VALUES (@name,@description,@quantity)',
  getProductById: 'SELECT * FROM Products WHERE Id = @id',
  deleteProductById: 'DELETE FROM [webstore].[dbo].[Products] WHERE Id = @id ',
  getTotalProducts: 'SELECT COUNT (*) FROM Products',
  updateProductsById: 'UPDATE Products SET Name = @name, Description=@description, Quantity=@quantity WHERE Id=@Id'
};
exports.querys = querys;