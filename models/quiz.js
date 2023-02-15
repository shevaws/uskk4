module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        nomor: {
            type: Sequelize.INTEGER,
        },
        image: {
            type: Sequelize.STRING,
        },
        quiz: {
            type: Sequelize.STRING,
        },
        option: {
            type: Sequelize.STRING,
        },
        key: {
            type: Sequelize.STRING,
        },
    });
    return Quiz;
}