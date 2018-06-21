'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendConfirmationEmail = sendConfirmationEmail;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = require('../../config/index');

function setup() {
    return _nodemailer2.default.createTransport({
        host: env.EMAIL.HOST,
        port: env.EMAIL.PORT,
        auth: {
            user: env.EMAIL.USER,
            pass: env.EMAIL.PASS
        }
    });
}

function sendConfirmationEmail(user) {
    var transport = setup();
    var email = {
        from: '"Boilerplate" <info@boilerplate.com.au>',
        to: user.email,
        subject: 'Confirm your Email',
        text: '\n        Welcome to Boilerplate. Please, confirm your email.\n        \n        ' + user.generateConfirmationUrl() + '\n        '
    };
    transport.sendMail(email);
}