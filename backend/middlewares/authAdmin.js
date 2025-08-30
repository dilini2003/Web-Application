import jwt from "jsonwebtoken";

//admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const aToken = req.headers.atoken;
    if (!aToken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const decoded = jwt.verify(aToken, process.env.JWT_SECRET);
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
