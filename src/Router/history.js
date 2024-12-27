const createHistory = require('history').createBrowserHistory
let publicUrl = process.env.PUBLIC_URL

let obj = {}
if (publicUrl !== 'undefined') {
  obj.basename = publicUrl
}
export default createHistory(obj)
