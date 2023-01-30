const { adminUser } = require("../../models/AdminUser");



async function adminUserControl(email, password) {

    let data = await adminUser.findOne({ email: email, password: password })

    if (data) {
        return true;
    }
    else {
        return false;
    }

}


module.exports = {
    adminUserControl
}