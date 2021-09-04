export const env = {
  port: process.env.PORT || 3000,
  jwt_secret: process.env.JWT_SECRET || '94b190afd9468718584c181fa1503017',
  jwt_expireIn: process.env.JWT_EXPIRESIN || '1d',
};
