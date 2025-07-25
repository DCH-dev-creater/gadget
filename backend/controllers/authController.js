exports.login = async (req, res) => {
    const { email, password } = req.body;

    console.log(`email: ${email} password: ${password}`);

    return res.status(200).json({ message: 'Login successful' });
}