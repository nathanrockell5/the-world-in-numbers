import Data from "../models/Data.js";

export const getData = async (req, res) => {
    try {
        const Data = await Data.findAll();
        res.status(200).json(Data);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}   