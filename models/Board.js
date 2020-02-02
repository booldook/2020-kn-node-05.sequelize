module.exports = (sequelize, Sequelize) => {
	return sequelize.define('Board', {
		title: {
			type: Sequelize.STRING(255)
		},
		writer: {
			type: Sequelize.STRING(255)
		},
		img: {
			type: Sequelize.STRING(255)
		},
		comment: {
			type: Sequelize.TEXT()
		}
	}, {
		timestamps: true,
		charset: 'utf8',
		tableName: 'boards'
	});
};