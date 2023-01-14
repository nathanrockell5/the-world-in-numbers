import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        measurement: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        source: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Data = mongoose.model("Data", DataSchema);
export default Data;