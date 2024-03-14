const Media = require("../schema/mediaSchema")

exports.getAllMedia = async (req, res) =>{
    try {
        const result = await Media.find()
        console.log(result)
        return res
        .status(200).json({success: true, message: "Get Media Successfull", data: result})
    } catch (error) {
        console.log(error.message)
        return res
        .status(500).json({success: false, message: error.message})
    }
}