/**
 * @author Cleiton Tavares
 * @description HTTP Server
 */
module.exports = ({ express }) => express.listen(process.env.PORT || 8080, () => console.log(`${process.env.APP_NAME} service running in port - ${process.env.PORT || 8080}`));