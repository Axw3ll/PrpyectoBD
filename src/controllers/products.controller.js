import {getConnection, sql,querys} from "../database";


export const getProducts = async (req,res)=>{
   try {
    const pool = await getConnection();
    const result=await pool.request().query(querys.getAllProducts)
    console.log(result);
    res.json(result.recordset)
   } catch (error) {
    res.status(500)
    res.send(error.message)
 }

};

export const createNewProduct=async (req,res)=>{
    const{name,description}=req.body
    let {quantity}=req.body
//Valida los datos para insertarlos en la bd
    if(name==null || description==null){
        return res.status(400).json({msg:'Bad Request. Por favor llena todos los campos'})

    }
    if(quantity==null) quantity=0;
//Usamos un try y catch para insertar los datos a la bd una vez validados
  try {
    const pool =await getConnection();
    await pool.request().input('name',sql.VarChar,name)
    .input('description',sql.Text,description)
    .input('quantity',sql.Int,quantity)
    .query(querys.createNewProduct);
    res.json({name,description,quantity})
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const getProductById=async(req,res)=>{
 const {id}=req.params
 const pool = await getConnection();
 const result =await pool.request().input('id',id).query(querys.getProductById)
 console.log(result); 
 res.send(result.recordset[0])
}

export const deleteProductById=async(req,res)=>{
  const {id}=req.params
  const pool = await getConnection();
  const result =await pool.request().input('id',id).query(querys.deleteProductById)
  
  res.sendStatus(204)
 }


 export const getTotalProducts =async(req,res)=>{
  
  const pool = await getConnection();
  const result =await pool.request().query(querys.getTotalProducts)
  res.json(result.recordset[0][''])
 }

 export const updateProductById = async (req,res)=>{
  const {name,description,quantity} = req.body
  const {id} =req.params
  if(name==null || description==null, quantity==null){
    return res.status(400).json({msg:'Bad Request. Por favor llena todos los campos'})

      }
      const pool =await getConnection()
     await pool.request()
     .input('name',sql.VarChar,name)
     .input('description',sql.Text,description)
     .input('quantity',sql.Int,quantity)
     .input('id',sql.Int,id)
      .query(querys.updateProductsById)
      res.json({name,description,quantity})

 }