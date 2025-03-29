const mongoose=require('mongoose');

// Define schema for blacklisted tokens
const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, // TTL set to 24 hours (86400 seconds)
    },
});

// Create a model from the schema
const BlacklistToken = mongoose.model('BlacklistToken', blacklistSchema);

module.exports = BlacklistToken;