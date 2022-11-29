// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const User = require('./User')


const syncAndSeed = async () => {
    try {
    await db.sync({ force: true });

    //use this area to seed your database
    await User.create({
      username: "Thomas",
      password: "hello",
    })

    console.log(`Seeding successful!`);

    } catch(err) {
      console.log("problem seeding")
    }
};



module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    User
}