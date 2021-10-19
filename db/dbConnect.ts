import mongoose from "mongoose";

const connection: { isConnected: mongoose.Connection["readyState"] } = { isConnected: 0 };

async function dbConnect() {
    if (connection.isConnected) return;

    const db = await mongoose.connect(
        "mongodb://mongodb:27017/some_db"
        // process.env.DB_HOST!,
        // const db = await mongoose.connect("mongodb://localhost:27017/NoSQL_t1",
        // const db = await mongoose.connect(process.env.DB_HOST!,
    );
    // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
