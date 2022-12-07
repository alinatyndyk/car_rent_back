const {Schema, model} = require('mongoose');

const orderTokenSchema = new Schema({
    order_token: {type: String, required: true},
    car: {
        type: Schema.Types.ObjectId,
        ref: 'car'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true
})

module.exports = model('order_token', orderTokenSchema);