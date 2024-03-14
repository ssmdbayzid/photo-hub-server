import Media from "./mediaSchema"

const mongoose = require("mongoose")

const commentsSchema = new mongooseSchema({
    userEmail: {type: String, required: true},
    comment: {type: String, required: true},
    isLiked: {type: Boolean, required: true}

})

commentsSchema.statics.calcTotalLiked = async function(photoId){
    const stats = await this.aggregate([{
        $match: {media: photoId}
    },
    {
        $group: {
            _id:'$media',
            numOfLiked: {$sum: 1},            
        }
    }
])

await Media.findByIdAndUpdate(photoId, {
    totalLiked : stats[0].numOfLiked,
})

commentsSchema.post("save", function (){
    // this constructor.calTotalLiked
    this.constructor.calcTotalLiked(this.doctor)
})
    
}

export const Comment = mongoose.model("Comment", commentsSchema);