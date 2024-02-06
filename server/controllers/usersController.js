const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const loginUser = await User.findOne({ username });
    if (!loginUser){
      return res.json({ msg: "Incorrect username or password", status: false });
    }
    const isPasswordValid = await bcrypt.compare(password, loginUser.password);
    if(!isPasswordValid) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }
    delete loginUser.password;
    return res.json({ status: true, loginUser });
  } catch (ex) {
    next(ex);
  }
};

module.exports.setProfile = async (req, res, next) => {
  try {
    /* const userId = req.params.id; // Get user ID from request parameters
    const profileImageData = req.body.profileImage; // Get profile image data from request body

    // Update user data in the database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profileImageSet: true,
        profileImage: profileImageData
      },
      { new: true } // Return the updated document
    );

    // Respond with the updated user data
    return res.json({
      status: true,
      user: updatedUser
    }); */
    const userId = req.params.id;
    const profileImageData = req.body.image;
    /* console.log(userId); */
    /* const profileImage = req.body.image; */
    console.log(req.body);
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        profileImageSet: true,
        profileImage: profileImageData,
      },
      { new: true }
    );
    return res.json({
      /* isSet: userData.profileImageSet,
      image: userData.profileImage, */
      /* profileImageSet: true,
      profileImage: userData.profileImage */
    })
  } catch(ex) {
    next(ex);
  }
}