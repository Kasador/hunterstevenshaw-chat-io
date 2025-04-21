import mongoose from 'mongoose'
// const { Schema } = mongoose;

const usersSchema = new mongoose.Schema({
    // data: Schema.Types.Mixed
    username: String
});

const Users = mongoose.model("Users", usersSchema); // defining the 'Users' model

export default Users

/* References >>>
    1) https://www.w3schools.com/mongodb/mongodb_schema_validation.php
    2) https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    3) https://www.mongodb.com/docs/manual/core/schema-validation/
    4) https://stackoverflow.com/questions/66383516/add-mongoose-validation-for-phone-numbers
    5) https://www.geeksforgeeks.org/mongoose-schematype/
    6) https://mongoosejs.com/docs/guide.html
*/