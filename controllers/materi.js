const db = require("../models");
const Materi = db.materi;

//CREATE: untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {

    try {
        const data = await Materi.create(req.body)
        res.json({
            message: "quiz created successfully.",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//READ: menampilkan atau mengambil semua data quiz sesuai model dari database
exports.getAll = async (req, res) => {
    Materi.findAll()
        .then(data => {
            const materi = data.map(materi => {
                return {
                    image: materi.image,
                    nama: materi.nama,
                    penjelasan: materi.penjelasan
                }
            })
            res.send(materi)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving Materi.'
            })
        })
}

//Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const nama = req.params.nama
    try {
        let materi = await Materi.findAll({
            where: {
                nama: nama,
            },
        });
        let namaBody = req.body.nama
        materi[0].update(req.body, {
            where: { namaBody }
        });
        res.json({
            message: "Materi updated successfully.",
            data: materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving Materi",
            data: null,
        });
    }
}

//Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
    const nama = req.params.nama
    try {
        let materi = await Materi.findAll({
            where: {
                nama: nama,
            },
        });
        let namaBody = req.body.nama
        materi[0].destroy(req.body, {
            where: { namaBody }
        });

        res.json({
            message: "Materi deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving Materi",
            data: null,
        });
    }
}

//Mengambil data sesuai id yang dikirimkan
exports.findOne = async (req, res) => {
    const nomor = req.params.nomor
    try {
        let quiz = await Quiz.findAll({
            where: {
                nomor: nomor,
            },
        });
        quiz = quiz[0]
        res.json({
            message: `Quizzes retrieved successfully with nomor= ${nomor}.`,
            data: {
                nomor: quiz.nomor,
                image: quiz.image,
                quiz: quiz.quiz,
                option: [
                    {
                        a: quiz.a,
                    },
                    {
                        b: quiz.b,
                    },
                    {
                        c: quiz.c,
                    },
                    {
                        d: quiz.d,
                    }
                ],
                key: quiz.key,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving Materi",
            data: null,
        });
    }
}