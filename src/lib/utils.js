const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    // 确保环境变量存在
    if (!process.env.MONGO) {
      throw new Error("MONGO environment variable is not set");
    }

    // 使用现有连接
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    // 创建新连接
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error; // 直接抛出原始错误
  }
};
