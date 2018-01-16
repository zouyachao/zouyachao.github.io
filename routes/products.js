let express = require('express');
let router = express.Router();

let processXingye = require('./xingye');
let processMinsheng = require('./minsheng');


/* GET users listing. */
router.get('/xingye', function (req, res, next) {
    // axios.get('http://wealth.cib.com.cn/retail/onsale/index.html')
    //      .then((response) => {
    // const data =
        processXingye(req, res, next);
    // res.send(data);
    // });

});

router.get('/minsheng', function (req, res, next) {
    const data = processMinsheng(req, res, next);
    res.send(data);
});

module.exports = router;

