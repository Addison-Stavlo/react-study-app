const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizzes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/posts');

const { errorHandler, getUser } = require('./middleware');

module.exports = server => {
	server.use('/api/auth', authRoutes);
	server.use('/api/quizzes', getUser, quizRoutes);
	server.use('/api/users', getUser, userRoutes);
	server.use('/api/posts', getUser, postRoutes);

	server.use(errorHandler);
};
