const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

const errorr = () => {
    throw new Error("Este es un error")
}

try {
    errorr()
} catch (error) {
    logger.log("Error", error.toSrting)
}

logger.error("ERROR")