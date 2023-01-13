const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
	  connection: {
	        host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'alessia_strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'wolftone14'),
	  },
//#connection: {
		  //      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //  },
    useNullAsDefault: true,
  },
});
