# Express + Sequelize 셋팅

## 1. 최초 한번 설치
~~~bash
npm i -g express-generator
npm i -g sequelize-cli
~~~

## 2. 프로젝트 생성
~~~bash
# express 프로젝트 생성
express --view=pug sample(생성폴더명)

# 생성된 폴더로 이동
cd sample

# package.json의 모듈 설치
npm i

# sequelize / mysql2 설치
npm i mysql2 sequelize

# sequelize 프로젝트 생성
sequelize init
~~~

## 3. 프로젝트 마이그레이션
~~~js
// Models 폴더에 Model 생성
// models/Board.js
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

// app.js
var {sequelize} = require('./models');
sequelize.sync({force: false});
// 라우터 등록

// routes/board.js
const {Board} = require("./models");
~~~
