const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@postgres-gadget:5432/gadget');
const Banner = require('../models').Banner;
require("dotenv").config();

exports.create = async (req, res) => {
    const { url, active, sort } = req.body;
    const image = req.file ? req.file.location : null;

    const banner = await Banner.create({
        url, 
        image, 
        is_active: active, 
        sort
    });

    return res.status(201).json({ message: 'Данные успешно загружены' });
}

exports.list = async (req, res) => {
    const banners = await Banner.findAll({
        order: [['sort', 'ASC']]
    });
    
    return res.status(200).json(banners);
}