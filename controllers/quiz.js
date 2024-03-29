const db = require("../models");
const Quiz = db.quizzes;

//CREATE: untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {

    try {
        const data = await Quiz.create(req.body)
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
    Quiz.findAll()
        .then(data => {
            const quizzez = data.map(quiz => {
                return {
                    nomor: quiz.nomor,
                    gambar: quiz.image,
                    quiz: quiz.quiz,
                    option: [
                        {
                            a : quiz.a,
                        },
                        {
                            b : quiz.b,
                        },
                        {
                            c : quiz.c,
                        },
                        {
                            d : quiz.d,
                        }
                    ],
                    key: quiz.key,
                }
            })

            res.send(quizzez)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving quizzes.'
            })
        })
}

//Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const nomor = req.params.nomor
    try {
        const quiz = await Quiz.findByPk(nomor, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: { nomor }
        })
        res.json({
            message: "Quizzes updated successfully.",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}

//Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
    const nomor = req.params.nomor
    try {
        const quiz = await Quiz.findByPk(nomor, { rejectOnEmpty: true })

        quiz.destroy()

        res.json({
            message: "Quiz deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
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
                                a : quiz.a,
                            },
                            {
                                b : quiz.b,
                            },
                            {
                                c : quiz.c,
                            },
                            {
                                d : quiz.d,
                            }
                        ],
                key: quiz.key,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}