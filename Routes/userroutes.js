const express = require("express");
const router = express.Router();
const couponController = require("../Controller/usercontroller");


router.post("/create-coupon", couponController.create_coupon);


router.get("/get-coupons", couponController.get_all_coupons);


router.put("/update-coupon", couponController.update_coupon);

router.delete("/delete-coupon/:couponId", couponController.delete_coupon);

router.get("/get1/:one_id",couponController.get_1_coupons)

module.exports = router;
