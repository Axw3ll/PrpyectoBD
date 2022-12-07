export const querys = {
    getAllProducts :'SELECT*FROM Products',
    createNewProduct:'INSERT INTO Products (name,description,quantity) VALUES (@name,@description,@quantity)',
    getProductById:'SELECT * FROM Products WHERE Id = @id',
    deleteProductById:'DELETE FROM [webstore].[dbo].[Products] WHERE Id = @id ',
    getTotalProducts:'SELECT COUNT (*) FROM Products',
    updateProductsById:'UPDATE Products SET Name = @name, Description=@description, Quantity=@quantity WHERE Id=@Id'
}