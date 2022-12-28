// @ts-nocheck
import express from 'express';
import url from 'url';
import bodyParser from 'body-parser';
import next from 'next';

require('dotenv').config();
 
const server = express();
 
const port = process.env.PORT || 2020;
const NODE_ENV = process.env.NODE_ENV;

const nextApp = next({ dir: '.', dev:true });
const nextHandler = nextApp.getRequestHandler();

if (NODE_ENV === 'production') {
  server.set('trust proxy', 1);
}

// enabling cors in development
// if (NODE_ENV !== 'production') {
//   server.use(
//     cors({
//       credentials: true,
//       origin: [
//         'http://localhost:3000',
//         'http://localhost:2020',
//       ],
//     }),
//   );
//   curlirize(axios); // log curls in development
// }

// if (IS_TELEGRAF_ENABLED && NODE_ENV === 'production') {
//   server.use(telegraphMiddleware());
// }

server.use((req, res, next) => {
  if (NODE_ENV !== 'production') {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials','true');
  }
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload',
  );
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

nextApp.prepare().then(() => {
  server
    .disable('x-powered-by')
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/api', (req,res) => res.json({message:'data 123'}))
    .get('*', (req, res) => {
      const parsedUrl = url.parse(req.url, true);
      nextHandler(req, res, parsedUrl);
    });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on http://localhost:${port}`);
  });
});

export default server;
