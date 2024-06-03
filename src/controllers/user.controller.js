import { asyncHandler } from "../utils/asynchandler.js"



const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Aditya Raj Learning Backend"
    })
})


export { registerUser, }