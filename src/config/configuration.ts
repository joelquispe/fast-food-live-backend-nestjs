export default () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    jwt_secret: process.env.JWT_SECRET,
    encryption_key: process.env.ENCRYPTION_KEY,
  };
};
