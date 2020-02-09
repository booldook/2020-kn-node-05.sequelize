module.exports = (sequelize, Sequelize) => {
	return sequelize.define('Member', {
		username: {
			type: Sequelize.STRING(255)
		},
		userpw: {
			type: Sequelize.STRING(16)
		},
		email: {
			type: Sequelize.STRING(255),
			unique: true
		}
	}, {
		charset: 'utf8'
	});
}
