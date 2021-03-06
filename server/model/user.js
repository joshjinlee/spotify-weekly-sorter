const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    last_song_id: String,
    refresh_token: String,
    is_premium: Boolean,
    devices: [{ ID: String }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
