const db = require("../models");
const Quiz = db.quizzes;

//CREATE: untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {

    try {
        const data = await Quiz.create(req.body)
        req.json({
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
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully.",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
    const nomor = req.params.nomor
    try {
        const quiz = await Quiz.findByPk(nomor, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: {nomor}
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
        const quiz = await Quiz.findByPk(nomor, { rejectOnEmpty: true })
        res.json({
            message: `Quizzes retrieved successfully with nomor=${nomor}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}