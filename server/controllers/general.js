import Data from "../models/Data.js";

export const getData = async (req, res) => {
    try {
        const data = await Data.aggregate(
            [{ $sample: { size: 1 } }]
        )
        // const data = await Data.find()
        res.status(200).json(data);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}   