const mongoose=require('mongoose')
const ContactSchema = mongoose.Schema({
    projectname: {
        type: String,
        required: [true, "Please add the project name"],
    },
    projectmanager: {
        type: String,
        required: [true, "Please add the manager name"],
    },
    email: {
        type: String,
        required: [true, "Please add your email"],
    },
    priority: {
        type: String,
        required: [true, "Please add your priority"],
    },
    description: {
        type: String,
        required: [true, "Please add the description"],
    },
    startdate: {
        type: Date,
        required: [true, "Please add the description"],
    },
    enddate: {
        type: Date,
        required: [true, "Please add the description"],
    }
},
 {
    timestamps: true,
});

const Contact = mongoose.model('Product', ContactSchema);
module.exports = Contact;
