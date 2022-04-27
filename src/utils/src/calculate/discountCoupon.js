export const calculateDiscountCouponAmount = (coupon, serviceAmount) => {
    if (coupon.type === "amount") {
        return coupon.amount > serviceAmount ? serviceAmount : coupon.amount;
    }
    return (serviceAmount * coupon.percent) / 100;
};
