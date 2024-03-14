const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema({    
    title: {
        type : String,
        required: true,
        trim: true,
    },
    photographer: {
       type: String,
       trim: true,
       required: true
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },
    totalLike: {
       type: Number,       
    },   
    comments: {type: Array},
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
