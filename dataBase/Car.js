const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    brand: {type: String, trim: true, required: true},
    model: {type: String, required: true},
    vehicle_type: {type: String, trim: true, lowercase: true, required: true},
    engine_capacity: {type: String, trim: true, lowercase: true, required: true},
    driver_included: {type: Boolean, required: true},
    no_of_seats: {type: Number, required: true},
    location: {type: String, trim: true, lowercase: true, required: true},
    min_rent_time: {type: String, trim: true, uppercase: true, required: true},
    insurance_included: {type: Boolean, required: true},
    additional_driver_insurance: {type: String, trim: true, uppercase: true, required: true},
    add_milage_charge: {type: String, trim: true, required: true},
    min_drivers_age: {type: Number, required: true},
    company_name: {type: String, required: true},
    company_number: {type: String, required: true},
    payment_mode: {type: String, lowercase: true, required: true},
    description: {type: String, trim: true, required: true}
})

module.exports = model('car', carSchema);