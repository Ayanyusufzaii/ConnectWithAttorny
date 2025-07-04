// // emailService.js
// import emailjs from '@emailjs/browser';

// const SERVICE_ID = process.env.SERVICE_ID ;
// const ADMIN_TEMPLATE_ID = process.env.ADMIN_TEMPLATE_ID;
// const USER_TEMPLATE_ID = process.env.USER_TEMPLATE_ID;
// const PUBLIC_KEY = process.env.PUBLIC_KEY;

// emailjs.init(PUBLIC_KEY);

// export const sendAdminEmail = (formData) => {
//   const templateParams = {
//     name: formData.name,
//     email: formData.email,
//     phone: formData.phone,
//     category: formData.category,
//     message: `New legal service request from ${formData.name}`,

//   };

//   return emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
// };

// export const sendUserEmail = (formData) => {
//   const templateParams = {
//     name: formData.name,
//     email: formData.email,
//     phone: formData.phone,
//     category: formData.category,
//     date: new Date().toLocaleDateString(),
//   };

//   return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams);
// };




// // emailService.js
// import emailjs from '@emailjs/browser';

// const SERVICE_ID = 'service_azb26ks';
// const ADMIN_TEMPLATE_ID = 'template_i4yx3al';
// const USER_TEMPLATE_ID = 'template_v3x552b';
// const PUBLIC_KEY = 'DyDZ85E9uwzwSyUoD';

// emailjs.init(PUBLIC_KEY);

// export const sendAdminEmail = (formData) => {
//   const templateParams = {
//     name: formData.name,
//     email: formData.email,
//     phone: formData.phone,
//     category: formData.category,
//     streetAddress: formData.streetAddress,
//     city: formData.city,
//     state: formData.state,
//     zipCode: formData.zipCode,
//     fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
//     message: `New legal service request from ${formData.name}`,
//     submissionDate: new Date().toLocaleString(),
//   };

//   return emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
// };

// export const sendUserEmail = (formData) => {
//   const templateParams = {
//     name: formData.name,
//     email: formData.email,
//     phone: formData.phone,
//     category: formData.category,
//     streetAddress: formData.streetAddress,
//     city: formData.city,
//     state: formData.state,
//     zipCode: formData.zipCode,
//     fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
//     date: new Date().toLocaleDateString(),
//     submissionDate: new Date().toLocaleString(),
//   };

//   return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams);
// };
























// emailService.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID ;
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_ADMIN_TEMPLATE_ID;
const USER_TEMPLATE_ID =  process.env.REACT_APP_USER_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

// Function to get the initial landing URL
let initialLandingUrl = null;

const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";
  
  // If we haven't stored the initial URL yet, store it
  if (!initialLandingUrl) {
    initialLandingUrl = window.location.href;
  }
  
  return initialLandingUrl;
};

// Function to get IP address
const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "IP address not available";
  }
};

export const sendAdminEmail = async (formData) => {
  console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_ADMIN_TEMPLATE_ID, process.env.REACT_APP_USER_TEMPLATE_ID);
  
    const ipAddress = await getIPAddress();
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    category: formData.category,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
    message: `New legal service request from ${formData.name}`,
    submissionDate: new Date().toLocaleString(),
      ip_address: ipAddress,
      page_source: getSourceUrl(),

    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
  };

  return emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
};

export const sendUserEmail = async (formData) => {
    const ipAddress = await getIPAddress();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    category: formData.category,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
    date: new Date().toLocaleDateString(),
      ip_address: ipAddress,
    submissionDate: new Date().toLocaleString(),
      page_source: getSourceUrl(),

    // TrustedForm data (optional for user emails, but included for completeness)
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
  };

  return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams);
};