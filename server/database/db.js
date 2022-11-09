import mongoose from "mongoose";

export const Connection = async (URL) => {
   
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

