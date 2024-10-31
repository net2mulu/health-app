import { PricingPagePlan } from "./types";

export const app_name = "LOGO";

export const navLinks = [
  { name: "Service", href: "/service" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimony", href: "/testimony" },
  { name: "Contact", href: "/contact" },
];

export const heroData = {
  title: "Where Technology Meets Well-Being",
  subtitle:
    "Experience the future of healthcare with our innovative platform that seamlessly integrates cutting-edge technology with personalized care, empowering you to take control of your health journey.",
  ctaText: "Get Started",
};

export const footerData = {
  name: "Product Name",
  description:
    " We are dedicated providing comprehensive and compassionate healthcare service tailored to meet your unique needs",
  links: [
    {
      title: "Menu",
      items: ["Service", "Features", "Pricing", "Testimony", "Contact us"],
    },

    {
      title: "Contact us",
      items: ["support@ProductName.com", "+12345678", "Building 6th"],
    },
  ],
  company: "PRODUCTNAME. All right reserved.",
  privacy: "Privacy and terms",
};

export const experienceData = {
  title: "Experience Unparalleled Healthcare Excellence",
  stats: [
    { value: "1M+", label: "Users" },
    { value: "24/7", label: "Support" },
    { value: "4.8/5", label: "User Rating" },
  ],
};

export const faqData = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our mobile app or website by selecting your preferred doctor and available time slot.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Yes, we use state-of-the-art encryption and follow strict privacy guidelines to ensure your medical data is always secure and confidential.",
  },
  // Add more FAQ items as needed
];

export const TabData = [
  {
    label: "Scheduling and Appointments",
    value: "Scheduling and Appointments",
    title: "Scheduling and Appointments",
    imageSrc: "/assets/phone.png",
  },
  {
    label: "Health",
    value: "Health",
    title: "Health",
    imageSrc: "/assets/girl.png",
  },
  {
    label: "Payment and Insurance",
    value: "Payment and Insurance",
    title: "Payment and Insurance",
    imageSrc: "/assets/girl.png",
  },
  {
    label: "Messaging",
    value: "Messaging",
    title: "Messaging",
    imageSrc: "/assets/phone.png",
  },
];

export const pricingPlans: PricingPagePlan[] = [
  {
    name: "Basic Plan",
    price: "290",
    description:
      "Includes 1 clinician & 50 patients with a limit of 1000 patients +250/mo per clinical",
    features: [
      { text: "Include 1 provider" },
      { text: "Rate per additional provider $250" },
      { text: "Max of 10 providers" },
      { text: "Includes 50 patients" },
      { text: "Rate per additional 50 patients $40" },
      { text: "Max of 1000 patinets" },
    ],
  },
  {
    name: "Medium Plan",
    price: "420",
    description:
      "Includes 1 clinician & 250 patients with a limit of 1000 patients +250/mo per clinical",
    features: [
      { text: "Include 1 provider" },
      { text: "Rate per additional provider $240" },
      { text: "Max of 50 providers" },
      { text: "Includes 250 patients" },
      { text: "Rate per additional 50 patients $40" },
      { text: "Max of 1000 patinets" },
    ],
  },
  {
    name: "Unlimited Plan",
    price: "300",
    description:
      "Includes 1 clinician & unlimited members +$300/mo per clinician",
    features: [
      { text: "Include 1 provider" },
      { text: "Rate per additional provider $240" },
      { text: "Unlimited providers" },
      { text: "Unlimited patients" },
      { text: "+$300/mo per clinician" },
    ],
    isRecommended: true,
  },
];

export const PRODUCT_NAME = "PRODUCTNAME";

export const COMPANY_DESCRIPTION = {
  intro: `Our ${PRODUCT_NAME} app`,
  description: `Our ${PRODUCT_NAME} app is a cloud-based electronics health record(${PRODUCT_NAME}) and practice management solution for medical practices of all sizes. it offers appointment scheduling, charting, billing, telemedicine, and e-prescribing with an integrated suite, The solution is ONC-ATCB certified and HIPAA compliant.`,
  weekday: "Monday - Friday: 08:00 - 17:00",
  weekend: "Saturday & Sunday: 08:00 - 12:00",
  address: "1 Road New York,EEUU",
  mobile: "+1(123) -7890",
  email: "tailnext@gmail.com",
  heading: "Ready to Get Started",
  subheading: "Get in Touch",
};
