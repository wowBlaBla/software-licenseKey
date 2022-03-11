require('dotenv');
const SoftwareLicenseKey = require('software-license-key');
// const SoftwareLicenseKey = require('./LicenseManager.js');

// var generator = new SoftwareLicenseKey();

// var pvKey = generator.exportPrivateKey();
// var pbKey = generator.exportPublicKey();

// var licenseKeyData = {
//     "user_id": "wow2114",
//     "user_pwd": "password"
// };
// var licenseKey = generator.generateLicense(licenseKeyData);

// console.log(pvKey, pbKey, licenseKey);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var validator = new SoftwareLicenseKey(pbKey);

// var decryptedLicenseKeydata = validator.validateLicense(licenseKey);
// console.log(JSON.stringify(decryptedLicenseKeydata));


var pbKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAteRibiMNqbgbGVQvtuVN
CiwMS8lfEv38+DVlNqw/gyX7IHRimMwMQxwxksT/S2X38S5BNa63xhz/zjL4BFhL
B3dxijPpiTRrkNH0QHb/dWtaou6tZkFd05V8O3XYSIyn1Pno6f/m8pO0vP1jgFHW
Tft/mVmQg6yQ7ThPornAaQ9eacSSCLMruU0jP0ZoZ2RoxEbUDx6aplv7VV9hEZy+
hb8zUJL6+Iy+LNC3g4GndjPPTuHSnY4/fHEnB5YJ6NK6jOxnWMyZUt+7i+5T8Gd6
deMsKWFzorNO6XWEKmU/ZwPn4bu5if5myX4R0htn6VWN1PDpxr0wxBeDlpVCwJLw
EwIDAQAB
-----END PUBLIC KEY-----`

var licenseKey = `====BEGIN LICENSE KEY====
BT8KtwbIpGsojGUsGvMLfhXpsxv6bSpU802PZWpQXEQ5AhLfuFqFPHwdAfvy2FQJMseYqAGXWauH/D/JRL6TwTDZwi0/7yCvWmjUNqrrBJxY8y/VT7wSEox4yPUOaIIVERtbK9FpKr0qgszlAFyFmTtuaWd1M9sH4Gp4PR1ZwLly2yQzKP8QL1j0TnZ+v3nnBxP4TVWFXZyaf2Pg4Pfjq97m9JFKPfllEcHhTn0f1q6nIsQuTngEnUgkj2Y3TEdTBeGoTgUsi7p1r+NVMgMcsJacGS+wF6a6y4aGQsFUJDQ5oIBXieGwTFfun6pYCHQMy3faIMjnxOvmcsPO7DCisQ==||U2FsdGVkX18sskwlnaY9DsHZgtVR52pNZJCP+2spzFnkpcgzjzM7gHivfnbkN412YyCx1KAm32rlKa1JZ4G/7w==
qa6XRGz20Un+J3oz9pePRv30SPJcTanqk/qfi2oiPrQ7g4oqMSdg1QRa1OwgyfR6WqayAdL81V1hsQ77BIUeWDKoRh8Bbmhr88SrtoXPLyG31Onaw2G4pbVWRGwOrq4wCfBWAX/SQRyhqlOX0+CvKSZ0sGwsc/OvQbkar+7zbhsdQsfLffvdofhpCITw4OfSh547MbSukKjZWmzu6qrcSt4cbr9WwvKth+RaQ2Yk3Lbq2El2kpOmxfq1PvAISchXx3Pr5erkq0y5m0oth65m8djc0Sj3zllRte+rLP2/PwcuYjLaQyIOoAC9JhLeaH3fD4IRzcrvgp6AQtsgqYxa3A==
====END LICENSE KEY====`

var validator = new SoftwareLicenseKey(pbKey);

var decryptedLicenseKeydata = validator.validateLicense(licenseKey);
console.log(JSON.stringify(decryptedLicenseKeydata));
