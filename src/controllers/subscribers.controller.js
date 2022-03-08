import Subscriber from "../database/model/subscriber.model";
import { subscribersValidation } from "../helpers/validation_schema";

export const subscribe = async (req, res) => {

    const { error } = subscribersValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }
    const sub = req.body;
    const newSub = new Subscriber(sub);
    await newSub.save();
    res.status(201).json({ success: true, data: newSub });

}
export const unsubscribe = async (req, res) => {
    const { email } = req.body;
    const sub = await Subscriber.findOne(email);
    if (!sub) return res.status(404).json({ success: false, message: "User not found" });
    await Subscriber.findOneAndDelete(email);
    res.status(200).json({ success: true, message: "Subscription Removed", data: null });

}
export const getAllSubscribers = async (req, res) => {
    const subscribers = await Subscriber.find();
    res.status(200).json({ success: true, data: subscribers })
}