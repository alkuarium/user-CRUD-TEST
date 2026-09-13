import { PrismaClient } from "@prisma/client";
import { stat } from "fs";

const prisma = new PrismaClient();


//get all users
export const getallUser = async (req, res) => {
    try {
        const result = await prisma.user.findMany();
        res.status(200).json({
            success: true,
            data: result
    })

}catch (error) {
    console.log (error);
    res.status(500).json({
        success: false,
        message: `Failed to fetch users ${error}`
    });
 }
  

}



//find user by id
export const getUserById = async (req, res) => {

    try{
            const result = await prisma.user.findUnique({
                where: {
                    id: Number(req.params.id)

    }
})
res.status(200).json({
    success: true,
    data: result
})      


} catch (error) {
    console.log (error);
    res.status(500).json({ 
        success: false,
        message: `Failed to find user by id ${error}`
    });
 }

}





//create user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const result = await prisma.user.create({
        data: { name,
                email,
                password
            }   
    })
        res.status(200).json({
            success: true,
            data: result
        });
  }
  catch (error) { console.log(error);
                res.status(500).json({
                    success: false,
                    message: `Failed to create user${error}`
                });
   }
} 




//update user
export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const result = await prisma.user.update({
        where: {
            id: Number(req.params.id)
        },

        data: { name,
                email,
                password
            }   
    })
        res.status(200).json({
            success: true,
            data: result
        });
  }
  catch (error) { console.log(error);
                res.status(500).json({
                    success: false,
                    message: `Failed to update user${error}`
                });
   }
} 



//Delete user
export const deleteUser = async (req, res) => {
    try {
        const result = await prisma.user.delete({  
            where: {
                id: Number(req.params.id)
            }
            
        })
        res.status(200).json({
            success: true,
            data: result
        });
    }

 catch (error) {
    console.log (error);
    res.status(500).json({
        success: false,
        message: `Failed to delete user ${error}`
    });
    }      

}
