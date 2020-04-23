import {
  getConnectionOptions,
  createConnection,
  ConnectionOptions,
} from "typeorm";

export const CreateTypeormCon = async () => {
  try {
    const connectiontOptions: ConnectionOptions = await getConnectionOptions(process.env.NODE_ENV);
    return createConnection(connectiontOptions);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
