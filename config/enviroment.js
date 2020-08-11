const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');


const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});



const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'project_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'adisharma19998@gmail.com',
            pass: 'zxcvbnm,mnbvcxz123456789'
        }
    },
    google_client_id: "358479361424-afn8mnh1gqisd3s8mejkn6am2uthub6n.apps.googleusercontent.com",
    google_client_secret: "TuASRXOgsaWVrFHPkHeRRkZk",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
    morgan: {
        mode: 'dev',
        options: {stream: accessLogStream}
    }
}


const production =  {
    name: 'production',
    asset_path: process.env.PROJECT_ASSETS_PATH,
    session_cookie_key: process.env.PROJECT_SESSION_KEY,
    db: process.env.PROJECT_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.PROJECT_GMAIL_USERNAME,
            pass: process.env.PROJECT_GMAIL_PASSOWRD
        }
    },
    google_client_id: process.env.PROJECT_GOOGLE_CLIENT_ID,
    google_client_secret: process.env. PROJECT_CLIENT_SECRET,
    google_call_back_url: process.env.PROJECT_GOOGLE_CALLBACK_URL,
    jwt_secret: process.env.PROJECT_JWT_SECRET_KEY,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }
}


module.exports = eval(process.env.PROJECT_ENVIRONMENT)== undefined  ? development : eval(process.env.PROJECT_ENVIRONMENT);