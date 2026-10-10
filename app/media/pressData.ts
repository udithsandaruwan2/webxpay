import { PressProps } from "@/components/press/latestSingle";

const pressData: PressProps[] = [

  // First two items for the latest section
    {
    imagePath: "/media/hero_ryan_perera.png",
  title: "WEBXPAY bolsters Board with Ryan Perera’s appointment",
    description:
      "WEBXPAY appoints accomplished banking and business executive Ryan Perera to further strengthen its leadership and international expansion.",
    url: "https://www.ft.lk/financial-services/WEBXPAY-bolsters-Board-with-Ryan-Perera-s-appointment/42-798380",
    isNewTab: true, // Defaults to false, meaning it does not open in a new tab unless specified as isNewTab: true. Can be relative or absolute URL
  },
  {
    imagePath: "/media/google_pay.png",
    title: "Google Pay Now Live on WEBXPAY",
    description: "Accept payments from millions of Google Pay users worldwide",
    url: "https://www.ft.lk/front-page/WEBXPAY-collaborates-with-Mastercard-Seylan-for-Google-Pay-for-online-payments/44-785820",
    isNewTab: true, // This item will open in a new tab. Make sure the url is a valid
  },
  {
    imagePath: "/media/1.jpg",
    title: "Amanté customers to benefit from new XSPLIT",
    description: "Amanté customers to benefit from new XSPLIT payment scheme facilitated by WEBXPAY",
    url: "https://www.dailymirror.lk/business-news/Amant%C3%A9-customers-to-benefit-from-new-XSPLIT-payment-scheme-facilitated-by-WEBXPAY/273-296630\n",
    isNewTab: true, // This item will open in a new tab. Make sure the url is a valid
  },
  {
    imagePath: "/media/2.jpg",
    title: "Thilak Piyadigama Appointed Chairman of WEBXPAY",
    description:
      "WEBXPAY is pleased to announce the appointment of Thilak Piyadigama as Chairman, bringing leadership and vision to our next chapter.",
    url: "https://srilankabiz.lk/tag/webxpay/",
    isNewTab: true, // Defaults to false, meaning it does not open in a new tab unless specified as isNewTab: true. Can be relative or absolute URL
  },

  // Remaining items for the not latest section
  {
    imagePath: "/media/3.jpg",
    title: "Thilak Piyadigama takes the helm at WEBXPAY",
    description:
      "Thilak Piyadigama takes the helm as Chairman of WEBXPAY, guiding the company’s mission to lead digital payments in Sri Lanka and beyond.",
    url: "https://www.dailymirror.lk/business-news/Thilak-Piyadigama-takes-the-helm-at-WEBXPAY/273-288298",
    isNewTab: true,
  },
  {
    imagePath: "/media/4.jpg",
    title: "WEBXPAY appoints Thassim to Board as Non-Executive Director",
    description:
      "WEBXPAY welcomes Thassim to its Board as Non-Executive Director, strengthening governance and strategic direction for future growth.",
    url: "https://www.dailynews.lk/2025/07/22/business/820372/webxpay-appoints-thassim-to-board-as-non-executive-director/",
    isNewTab: true,
  },
  {
    imagePath: "/media/5.jpg",
    title: "HNB collabrates with WEBXPAY",
    description:
      "HNB partners with WEBXPAY to enhance digital payment solutions, driving seamless, secure transactions for merchants and customers alike.",
    url: "https://lmd.lk/hnb-collaborates-with-webxpay/",
    isNewTab: true,
  },
  // {
  //     // imagePath: '/media/pay.png', // Defaults to /media/default.png if not provided
  //     title: 'Some Recent Update from WEBXPAY',
  //     description: 'WEBXPAY continues to innovate with new features and services, enhancing the digital payment landscape in Sri Lanka.',
  //     url: '/media/online-payment-sri-lanka',
  // },
];

export default pressData;
