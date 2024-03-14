const Media = require("../schema/mediaSchema")

exports.getAllMedia = async (req, res) =>{
    try {
        const result = await Media.find()        
        return res
        .status(200).json({success: true, message: "Get Media Successfull", data: result})
    } catch (error) {
        console.log(error.message)
        return res
        .status(500).json({success: false, message: error.message})
    }
}

exports.getMedia = async (req, res) =>{
    try {
        const id = req.params.id;

        const result = await Media.findById(id);
        return res
        .status(200).json({success: true, message: "Get Media Successfull", data: result})
    } catch (error) {
        return res
        .status(500).json({success: false, message: error.message})
    }
}
exports.postMedia = async (req, res) =>{
    try {
        console.log(req.body)
        const result = await Media.create(req.body);
        return res
        .status(200).json({success: false, message: "Upload photo successfully", data: result})
    } catch (error) {
        return res
        .status(500).json({success: false, message: error.message})
    }
}

exports.postComment = async (req, res)=> {
    try {
        console.log(req.body)
        const id = req.params.id;

        console.log(id)
        
        const comment = {
            email: req.body.email,
            comment: req.body.comment,
            liked: req.body.like
        }

        const photo = await Media.findById(id);
        console.log(photo)
        
        photo.totalLike +=  1;
        photo.comments.push(comment)

        await photo.save()        

        return res
        .status(200).json({success: true, message: "Thanks for your feedback", })
    } catch (error) {
        return res
        .status(500).json({success: false, message: error.message})
    }
}