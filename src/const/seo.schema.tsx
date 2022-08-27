const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'iBUYPOWER®',
  alternateName: 'i buy power',
  parentOrganization: 'American Future Technology',
  numberofEmployees: '200 - 500',
  url: 'https://www.ibuypower.com/',
  logo: 'https://content.ibuypower.com/Images/Logos/ibp-logo.png',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '888-462-3899',
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '529 N. Baldwin Park Blvd',
      addressLocality: 'City of Industry',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'ContactPoint',
      email: 'support@ibuypower.com',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    {
      '@type': 'ContactPoint',
      telephone: '888-618-6040',
      contactOption: 'TollFree',
      contactType: 'technical support',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    {
      '@type': 'ContactPoint',
      telephone: '888-462-3899',
      contactOption: 'TollFree',
      contactType: 'Sales',
      areaServed: 'US',
      availableLanguage: 'en',
    },
  ],
  sameAs: [
    'https://www.facebook.com/iBUYPOWERPC/',
    'https://twitter.com/iBUYPOWER',
    'https://www.instagram.com/ibuypowerpc/',
    'https://www.youtube.com/user/ibuypower',
    'https://www.linkedin.com/company/ibuypower',
    'https://www.ibuypower.com/',
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.ibuypower.com/Config/Search/{search_term_string}?type=0',
    'query-input': 'required name=search_term_string',
  },
};

const website = {
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  url: 'https://www.ibuypower.com',
  name: 'iBUYPOWER',
  alternateName: 'ibuypower',
  sameAs: [
    'https://www.facebook.com/iBuypowerPC',
    'https://twitter.com/iBUYPOWER',
    'https://www.youtube.com/user/ibuypower',
    'https://plus.google.com/+ibuypower',
    'https://www.instagram.com/ibuypowerpc/',
  ],
};

export const all_structure = (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}></script>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}></script>
  </>
);

export namespace google_faq {
  const gaming_pcs = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What Is a Gaming PC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A gaming PC is a computer built with powerful components to elevate the gaming experience. Gaming PCs typically have improved CPU, GPU, RAM, and storage units versus ordinary computers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What Is the Best Gaming PC for My Budget?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We have an extensive range of solutions that sell between $679 to $5,000 for high-performance apparatus. The best gaming PC is the one that meets your needs, so make a list of non-negotiables before purchasing one.',
        },
      },
      {
        '@type': 'Question',
        name: 'What Is the Most Important Component in a Gaming PC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While essential components depend on preferences, we recommend following this order: CPU, GPU, RAM, motherboard, and storage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What Is the Best Setup for Gaming?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best gaming setup is one that matches your style. At iBUYPOWER, we offer customized solutions with the help of the industry’s top brands like MSI, ASUS, EVGA, and more.',
        },
      },
    ],
  };

  const prebuilt_gaming_pcs = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a prebuilt PC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A prebuilt PC is a pre-assembled and packaged desktop with its parts and components QA tested in advance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a prebuilt PC right for you?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend prebuilt PCs to those who have little to no experience building a PC, or if you’re in need of a system ASAP.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the primary advantage of going prebuilt over DIY?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Since building a computer from scratch requires thorough knowledge of the latest generation of motherboards, processors, graphics cards, power supplies, cabling, and the many other pieces of hardware that constitute a desktop, customers who go with a prebuilt gaming PC are guaranteed to receive a system whose parts and components are optimized to work together effectively.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best gaming setup for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maybe you’re more a PC gamer than a DIY enthusiast, and prefer to rely on the expertise of a lab team who designs custom PCs or a living?\n\nPerhaps you’re just looking for a prebuilt desktop that can chew up ultra settings with an NVIDIA GeForce RTX 2080 Ti GPU and an Intel 9th Gen CPU?\n\nOr maybe you’re looking for a more affordable gaming pc without sacrificing performance?\n\nOur weekly prebuilt pc deals will help you find the best gaming pc under 1000, as well as the best gaming desktops packed with top tier pc parts.',
        },
      },
    ],
  };

  const gaming_laptops = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a gaming laptop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A key characteristic that defines a gaming laptop is a dedicated GPU and a higher-end CPU. A gaming laptop is a laptop able to run the latest and greatest AAA games on its hardware without the huge form factor of a gaming desktop.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I get a gaming laptop or gaming desktop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gaming laptops have the advantage of gaming on the go. If you’re an individual who loves to game while travelling, then a gaming laptop is the ideal gaming system. If you’re an individual who tends to game in one location, a gaming desktop is the more affordable and long-term choice.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are some advantages of a gaming laptop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobility without sacrificing performance is the key advantage of a gaming laptop. Gaming laptops are designed to fit in a backpack for easy transport to your favorite LAN parties. And since gaming laptops are meant to play AAA games in high settings, that also means they’re capable of running hardware-dependent software like Photoshop or Final Cut.',
        },
      },
    ],
  };

  const easy_pc_builder = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best gaming setup for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best gaming setups for beginners usually come in prebuilt PCs or easy to build systems. Our RDY solutions, as well as our EasyBuilder tool, are designed with beginners in mind. If you want a high performance PC without the hassle, iBUYPOWER offers solutions that fit your budget, and your favorite games.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Easy PC Builder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Easy PC Builder module is designed to give PC gamers the opportunity to build a PC based on their favorite PC games, budget range, and preferred platform between desktop and laptop.\n\nAfter answering these questions, a custom PC aligned with the user’s criteria will be suggested, along with a lower-end and higher-end system for price-to-performance comparison.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize my PC Builder results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Definitely! Simply click the ‘Customize’ button to modify the specs and build your own PC.\n\nThe resulting systems in Easy PC Builder can also be purchased as-is, with the parts and components specifically designed to work together to achieve the highest performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to understand computer hardware to build a PC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Easy PC Builder makes building a gaming PC simple, efficient, and budget-friendly.\n\nNo knowledge of computer hardware is required, simply select your favorite games and define your budget to view a list of gaming PCs.',
        },
      },
    ],
  };

  export const google_faq_map: { [key: string]: JSX.Element } = {
    '/gaming-pcs': (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gaming_pcs) }}></script>
    ),
    '/gaming-pcs/prebuilt-gaming-pcs': (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prebuilt_gaming_pcs) }}
      ></script>
    ),
    '/gaming-laptops': (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gaming_laptops) }}></script>
    ),
    '/gaming-pcs/easy-pc-builder': (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(easy_pc_builder) }}></script>
    ),
  };
}

export const productSchema = (
  name: string,
  imageUrl: string,
  description: string,
  ratingValue: number = 0,
  reviewTotal: number = 0,
  link: string,
  price: number,
  inStock: boolean
) => {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: name,
    image: imageUrl,
    description: description,
    brand: 'iBUYPOWER',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviewTotal,
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.ibuypower.com/store/' + link,
      priceCurrency: 'USD',
      price: price.toString(),
      availability: `${inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'}`,
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}></script>;
};

export const breadcrumbSchema = (pathName: string[]) => {
  const itemListElement = [] as any;
  pathName.map((path: string, key: number) => {
    const to = `/${pathName.slice(0, key + 1).join('/')}`.replaceAll('//', '/');
    const name = path == '' ? 'home' : path.split('?')[0].replaceAll('-', ' ');
    itemListElement.push({
      '@type': 'ListItem',
      position: key + 1,
      name: name,
      item: `https://www.ibuypower.com${to}`,
    });
  });

  let schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}></script>;
};
