
const db = require('../config/db');


const index = async (req, res) => {
    try {

        const { data, error } = await db.from('nutrition').select('*');

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: "Errore imprevisto del server" });
    }
};

module.exports = {
    index
};