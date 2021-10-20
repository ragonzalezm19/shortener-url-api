if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
} else {
  console.log('PRODUCTION');
}
require('./../services/mongoose');
