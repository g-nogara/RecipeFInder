import http = require("http");
const checkWebService = (service: string): http.ClientRequest => {
  return http.get(service, (res) => {
     const { statusCode } = res;
     return statusCode == 200
   });
 }
export default checkWebService