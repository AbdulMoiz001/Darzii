import mesauremnets from "../models/meaurementSchema.js";

export const addMeasurement = async (req, res) => {
    if (req.user.id == req.params.id) {
        const newMeasurement = new mesauremnets({
            user: req.params.id,
            name: req.body.name,
            foreArms: req.body.foreArms,
            fullArmsLength: req.body.fullArmsLength,
            shoulderToShoulder: req.body.shoulderToShoulder,
            chest: req.body.chest,
            waist: req.body.waist,
            hips: req.body.hips,
            shoulderToHip: req.body.shoulderToHip,
            thigh: req.body.thigh,
            calf: req.body.calf,
            hipToFeet: req.body.hipToFeet,
            height: req.body.height,
        });
        try {
            const measurement = await newMeasurement.save();
            res.status(201).json(measurement);

        } catch (error) {
            res.status(500).json(error);
        }

    } else {
        res.status(403).json("You are not allowed");
    }
};


export const updateMeasurement = async (req, res) => {
    if (req.user.id == req.params.id) {
        try {
            const measurement = await mesauremnets.findOneAndUpdate(
                { user: req.params.id },
                {
                    $set: req.body
                },
                { new: true }
            );
            res.status(201).json(measurement);

        } catch (error) {
            res.status(500).json(error);
        }

    } else {
        res.status(403).json("You are not allowed");
    }
};

export const getMeasurement = async (req, res) => {
    if (req.user.id == req.params.id) {
        try {
            const measurement = await mesauremnets.findOne(
                { user: req.params.id }
            );
            res.status(201).json(measurement);

        } catch (error) {
            res.status(500).json(error);
        }

    } else {
        res.status(403).json("You are not allowed");
    }
}