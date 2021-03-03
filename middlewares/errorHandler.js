import pino from "pino";

const errorHandler = (error, req, res, next) => {
  let { message, status } = error;
  if (!status) {
    message = "server";
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    } else {
      const logger = pino("./error.log");
      logger.info(error);
    }
  }

  res.json({ status: status ? status : 500, message });
};

export default errorHandler;
