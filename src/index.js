import "./database";
import express from 'express';
import queryRoutes from './routes/query.route';
import authRoutes from './routes/auth.route';
import blogRoutes from './routes/blog.route';

const server = express();
// default route
server.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "You successfully landed on My Portfolio API" })
});



server.use(express.json());

server.use('/api/v1/queries', queryRoutes);
server.use('/api/v1/auth', authRoutes);
server.use('/api/v1/blogs', blogRoutes);


const port = process.env.port||5000;

server.listen(port, () => { console.log("Server listening on port " + port) });