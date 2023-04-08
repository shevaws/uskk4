module.exports = (sequelize, Sequelize) => {
    const Materi = sequelize.define('materi', {
        image: {
            type: Sequelize.STRING,
        },
        nama: {
            type: Sequelize.STRING,
        },
        penjelasan: {
            type: Sequelize.STRING,
        }
    });
    return Materi;
}