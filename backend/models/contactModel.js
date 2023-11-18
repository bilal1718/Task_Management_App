const mongoose=require('mongoose')
const ContactSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please add the first name"],
    },
    secondname: {
        type: String,
        required: [true, "Please add the second name"],
    },
    email: {
        type: String,
        required: [true, "Please add your email"],
    },
    // priority: {
    //     type: String,
    //     required: [true, "Please add your priority"],
    // },
    // description: {
    //     type: String,
    //     required: [true, "Please add the description"],
    // }
},
 {
    timestamps: true,
});

module.exports = mongoose.model("Contact", ContactSchema);
