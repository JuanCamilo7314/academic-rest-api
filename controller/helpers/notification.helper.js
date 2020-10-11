exports.sendSMS = async (phone) => {
    let code = Math.random(10)
    console.log(`sending sms with code ${code} to phone number ${phone}`);
}