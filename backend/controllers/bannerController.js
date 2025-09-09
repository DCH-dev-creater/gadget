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

exports.edit = async (req, res) => {
    const { id } = req.params;
    const { url, is_active, sort } = req.body;
    const image = req.file ? req.file.location : null;

    const banner = await Banner.findByPk(id);

    if (!banner) {
        return res.status(404).json({ error: 'Баннер не найден' });
    }

    banner.url = url;
    banner.is_active = is_active;
    banner.sort = sort;
    if (image) {
        banner.image = image;
    }

    await banner.save();

    return res.status(200).json(banner);
}

exports.delete = async (req, res) => {
    const { id } = req.params;

    const banner = await Banner.findByPk(id);

    if (!banner) {
        return res.status(404).json({ error: 'Баннер не найден' });
    }

    await banner.destroy({force: true});

    return res.status(200).json({ message: 'Баннер успешно удален' });
}
