const express = require('express');
const router = express.Router({mergeParams:true});
const business_unit_controller = require('../../../../controllers/business_unit.controller');


// Home page route.
router.get('/', business_unit_controller.findByAddress);

router.post('/', business_unit_controller.create);

router.put('/:id', business_unit_controller.update);


router.delete('/:id', business_unit_controller.delete);
module.exports = router;
