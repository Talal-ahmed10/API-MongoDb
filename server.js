const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' });

//DB Connection
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
