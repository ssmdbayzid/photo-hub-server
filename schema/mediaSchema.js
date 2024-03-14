const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema({    
    title: {
        type : String,
        required: true,
        trim: true,
    },
    description: {
       type: String,
       trim: true,
       required: true
    },
    thumble: {
        type: String,
        trim: true,
        required: true,
    },
    totalLiked: {
       type: Number,       
    },   
    comments: [
      {type: mongoose.Types.ObjectId, ref: "Comment"}
    ],
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
