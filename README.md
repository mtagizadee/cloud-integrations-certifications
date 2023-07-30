# Delta Cloud's integration object for certifications

This package is dedicated to auth process of WyvernSky cloud. Before using the this package you need to enter the WyvernSky platform: [URL THAT DO NOT EXIST FOR NOW]. Signup and generate the certificate.json file. Save that json file on your local machine. Without the certificate you cannot use the cloud system as well as without the certification object that is provided by this package you cannot use other intergration packages of the cloud. But without this package you can still use the cloud using REST. But you still need the certificate.

# Code example

```javascript
import { WSCertification } from "@wyvernsky/certifications";

const certUrl = "./certificate.json"; // it can be either relative or general path to the file

const certification = new WSCertification(certUrl); // pass this object to other integrations objects of wyvernsky cloud

console.log(certification.certificate); // to check wether the certificate is imported right or not.
```

# Possible Errors

- **Provided file does not exist** if the certificate path was provided incorrectly
- **Invalid certificate** if the provided certificate do not respect the minimum rules of the certificate.
