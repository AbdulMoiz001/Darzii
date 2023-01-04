import Jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        //split string space wise
        const token = authHeader.split(" ")[1];

        Jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid");
            } else {
                req.user = user;
                next();
            }
        });
    } else {
        return res.status(401).json("You are not authenticated");
    }
};
