var jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser")   // to read cookie for jwt

function verifyjsontoken(req, res, next)
{
    // we need cookieParser here so that it can read cookie here , so install it
    let token = req.cookies.authToken
    if (token)
    {
        try
        {
            const decoded = jwt.verify(token, process.env.JWT_SKEY)
            console.log(decoded)
            req.utype = decoded.role
            req.id = decoded.id
            return next()
        }
        catch (e)
        {
            return res.send({ statuscode: -5, msg: "Invalid Token" })
        }
    }

    const refreshtoken = req.cookies.refreshToken;
    if (!refreshtoken)
    {
        return res.send({ statuscode: -5, msg: "Session expired. Please log in again." })
    }
    try
    {
        const decoded = jwt.verify(refreshtoken, process.env.JWT_REFRESH_SKEY)
        const newauthToken = jwt.sign({ id: decoded.id, role: decoded.role }, process.env.JWT_SKEY, { expiresIn: "15m" })

        res.cookie("authToken", newauthToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000,
        });

        req.utype = decoded.role
        req.id = decoded.id
        return next()
    }
    catch (e)
    {
        return res.send({ statuscode: -5, msg: "Invalid refresh Token" })
    }
}

function verifyadmin(req, res, next)
{
    console.log(req.utype)
    if (req.utype === "admin")
    {
        return next();
    }
    else
    {
        return res.send({ statuscode: -5, msg: "Only Admin can access" })
    }
}

module.exports = { verifyjsontoken, verifyadmin };
