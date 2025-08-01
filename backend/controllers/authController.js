const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@postgres-gadget:5432/gadget');
const User = require('../models').User;
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

require("dotenv").config();

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if ( !user || !(bcrypt.compareSync(password, user.password)) ) {
        res.status(403).json({ message: "Логин или пароль указан не верно"});
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
    }, process.env.JWT_SECRET, { expiresIn: '8h' });

    return res.status(200).json({ token });
}