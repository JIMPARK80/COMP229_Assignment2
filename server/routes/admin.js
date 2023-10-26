const express = require('express');
const router = express.Router();
const User = require('../models/User')

const adminLayout = '../views/layouts/admin';


/* 
    Admin page
*/
router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJS, Express & MongoDb."
        }

        res.render('admin/index', { locals, layout: adminLayout });
    } catch (error) {
        console.log(error);
    }
});

/* 
    Admin check Login page
*/

router.post('/admin', async (req, res) => {
    try {

        const{ username, password } = req.body;
        console.log(req.body);
        res.redirect('/admin');
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;