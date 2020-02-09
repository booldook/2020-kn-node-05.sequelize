module.exports = (sequelize, Sequelize) => {
	return sequelize.define('Post', {
		comment: {
			type: Sequelize.STRING(140),
			allowNull: false
		}
	}, {
		charset: 'utf8'
	})
}