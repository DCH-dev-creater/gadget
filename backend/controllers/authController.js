const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@postgres-gadget:5432/gadget');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    console.log(`email: ${email} password: ${password}`);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return res.status(200).json({ message: 'Login successful' });
}