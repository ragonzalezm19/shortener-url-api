const mongoose = require('mongoose');

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};

main()
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));
