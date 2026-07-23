const db = require('../config/db');

exports.register = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'inserire email e password' })
        }

        //sintassi supabase per la registrazione
        const { data, error } = await db.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error('errore:', error.message);
            return res.status(400).json({ error: "Errore di comunicazione con il server" })
        }

        res.status(201).json({ message: "registrazione effettuta con successo", user: data.user })


    } catch (error) {
        res.status(500).json({ error: "Errore di comunicazione con il server" })
    }

}

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'inserire mail e password' })
        }

        //sintassi di supabase per il login
        const { data, error } = await db.auth.signInWithPassword({ email: email, password: password })

        if (error) {
            return res.status(401).json({ message: "utente non trovato o credenziali sbagliate" })
        }

        res.status(200).json({ message: "accesso effetutato con successo", session: data.session })

    } catch (error) {
        res.status(500).json({ error: "Errore di comunicazione con il server" })
    }
}
