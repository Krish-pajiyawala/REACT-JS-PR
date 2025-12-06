import couponImg from "../../../assets/img/Home/coupon-img.webp";
const Coupon = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <a href="#">
          <img src={couponImg} alt="" className="w-100" />
        </a>
      </div>
    </>
  );
};

export default Coupon;