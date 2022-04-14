const cors = require('cors');
const helmet = require('helmet');
const methodOverride = require('method-override');
const compression = require('compression');
const uuid = require('uuid');

module.exports = ({ express }) => {

  express.set('port', __ENV__.PORT);
  express.set('json spaces', __ENV__.JSON_SPACES || 4);
  if(__ENV__.PRODUCTION) express.use(helmet());
  express.use(cors());
  express.use(compression());
  express.use(methodOverride());
  express.use((req, res, next) =>{
    req.traceID = uuid.v4();
    if(req.originalUrl !== '/healthcheck') console.log(`[${req.method}][${req.originalUrl}] INCOME REQUEST`, req.traceID);
    return next();
  });
  express.use('/healthcheck', (req, res) => {
    return res.json({
      "message":"This service is available!",
      "meta":{
        "totalRecords":1,
        "totalPages":1,
        "requestDateTime": new Date().toISOString()
      }
    })
  });
};