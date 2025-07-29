import Subscriber from "../models/subscriber.js";
import { welcomeEmail } from "../services/email.service.js";

export const subscribedUser = async (req, res) => {
    const {email} = req.body
    
    try {
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'You are already subscribed' });
        }
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(201).json({ message: 'Subscription successful', subscriber: newSubscriber });
        await welcomeEmail(email)
    } catch (error) {
        console.error("Error subscribing user:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}