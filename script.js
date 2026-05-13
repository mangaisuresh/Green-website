document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.site-nav a[href^="#"], .btn[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const chatWidget = document.querySelector('.chat-widget');
  const chatToggle = document.querySelector('.chat-toggle');
  const chatClose = document.querySelector('.chat-close');
  const chatPanel = document.querySelector('.chat-panel');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const langToggle = document.getElementById('langToggle');
  const pageLangToggle = document.getElementById('pageLangToggle');
  const assistantTitle = document.querySelector('.chat-header-title');
  const assistantSubtitle = document.querySelector('.chat-header-subtitle');
  const chatSubmit = chatForm.querySelector('button');
  const heroEyebrow = document.getElementById('heroEyebrow');
  const heroTitle = document.getElementById('heroTitle');
  const heroDescription = document.getElementById('heroDescription');
  const exploreBtn = document.getElementById('exploreBtn');
  const viewBtn = document.getElementById('viewBtn');
  const servicesEyebrow = document.getElementById('servicesEyebrow');
  const servicesTitle = document.getElementById('servicesTitle');
  const servicesDesc = document.getElementById('servicesDesc');
  const benefitsEyebrow = document.getElementById('benefitsEyebrow');
  const benefitsTitle = document.getElementById('benefitsTitle');
  const benefitsDesc = document.getElementById('benefitsDesc');
  const materialsEyebrow = document.getElementById('materialsEyebrow');
  const materialsTitle = document.getElementById('materialsTitle');
  const contactEyebrow = document.getElementById('contactEyebrow');
  const contactTitle = document.getElementById('contactTitle');
  const contactDesc = document.getElementById('contactDesc');
  const headerContactBtn = document.getElementById('headerContactBtn');
  const navServices = document.getElementById('navServices');
  const navProjects = document.getElementById('navProjects');
  const navBenefits = document.getElementById('navBenefits');
  const navMaterials = document.getElementById('navMaterials');
  const navContact = document.getElementById('navContact');

  const translations = {
    en: {
      button: 'English',
      headerTitle: 'EcoSphere AI Assistant',
      headerSubtitle: 'Ask about green buildings, materials, or certification.',
      placeholder: 'Type your question...',
      send: 'Send',
      intro: 'Hi! I’m EcoSphere’s AI assistant. How can I help you with green building consulting today?',
      switch: 'Language switched to Tamil.',
      switchBack: 'Language switched to English.',
      pageLanguageButton: 'தமிழ்',
      nav: {
        services: 'Services',
        projects: 'Projects',
        benefits: 'Benefits',
        materials: 'Materials',
        contact: 'Contact'
      },
      heroEyebrow: 'Green Building Consultant',
      heroTitle: 'Building a Sustainable Future in India',
      heroDescription: 'Expert consultancy for eco-friendly, cost-effective, and energy-efficient construction. Reduce your carbon footprint with design, compliance, and material strategy that delivers lasting value.',
      explore: 'Explore Services',
      view: 'View Projects',
      servicesEyebrow: 'What We Do',
      servicesTitle: 'Integrated Green Building Consulting',
      servicesDesc: 'We help architects, developers, and owners navigate sustainability certifications, resource-efficient design, and low-carbon construction strategies.',
      benefitsEyebrow: 'Why Choose Green Buildings?',
      benefitsTitle: 'Sustainable Outcomes That Matter',
      benefitsDesc: 'From climate resilience to occupant wellbeing, green buildings deliver measurable environmental and financial value across the full lifecycle.',
      materialsEyebrow: 'Innovating with Eco-Materials',
      materialsTitle: 'Materials for Sustainable Construction',
      contactEyebrow: 'Contact',
      contactTitle: 'Ready to start your green building project?',
      contactDesc: 'Work with EcoSphere India for compliance, design optimization, and materials strategy that supports sustainable value creation.',
      headerContact: 'Get in touch'
    },
    ta: {
      button: 'தமிழ்',
      headerTitle: 'EcoSphere AI உதவியாளர்',
      headerSubtitle: 'பச்சை கட்டிடங்கள், பொருட்கள் அல்லது சான்றிதழ் பற்றி கேளுங்கள்.',
      placeholder: 'உங்கள் கேள்வியை உள்ளிடவும்...',
      send: 'அனுப்பு',
      intro: 'வணக்கம்! நான் EcoSphere இன் AI உதவியாளர். நீல கட்டுமான ஆலோசனையில் எப்படி உதவலாம்?',
      switch: 'மொழி தமிழுக்குத் திருத்தப்பட்டது.',
      switchBack: 'மொழி ஆங்கிலத்துக்கு திரும்பியது.',
      pageLanguageButton: 'English',
      nav: {
        services: 'சேவைகள்',
        projects: 'திட்டங்கள்',
        benefits: 'நன்மைகள்',
        materials: 'பொருட்கள்',
        contact: 'தொடர்பு'
      },
      heroEyebrow: 'பச்சை கட்டிட ஆலோசகர்',
      heroTitle: 'இந்தியாவில் நிலைத்துவாழ்வு கட்டிடங்களை கட்டுதல்',
      heroDescription: 'பசுமையான, செலவுயிர்க்கக்கூடிய மற்றும் எரிசக்தி திறன் கொண்ட கட்டுமானங்களுக்கான நிபுணத்துவ ஆலோசனை. திட்டமிடல், ஒத்தி அமைப்பு மற்றும் பொருட்கள் மூலமாக கார்பன் பாதையை குறைக்கவும்.',
      explore: 'சேவைகள் இரங்கே',
      view: 'திட்டங்களை காண்க',
      servicesEyebrow: 'நாம் என்ன செய்கிறோம்',
      servicesTitle: 'ஒன்றிணைந்த பசுமை கட்டிட ஆலோசனை',
      servicesDesc: 'நாங்கள் معماراتისტarkt developers இல் நீல வடிவமைப்பு சான்றிதழ், மூலோபாய வடிவமைப்பு மற்றும் குறைந்த கார்பன் கட்டுமானத்தை வழிநடத்துகிறோம்.',
      benefitsEyebrow: 'பசுமை கட்டிடங்களை ஏன் தேர்வு செய்வது?',
      benefitsTitle: 'முக்கியமான நிலைத்த லாபங்கள்',
      benefitsDesc: 'வானிலை கடுமையான செயல்திறன் முதல் உட்புற நலத்திற்கு வரை, பசுமை கட்டிடங்கள் சுற்றுச்சூழல் மற்றும் நிதி மதிப்பை வழங்குகின்றன.',
      materialsEyebrow: 'பசுமை பொருட்களுடன் புதுமை',
      materialsTitle: 'நிலையான கட்டுமானத்திற்கான பொருட்கள்',
      contactEyebrow: 'தொடர்பு',
      contactTitle: 'உங்கள் பசுமை கட்டிடம் திட்டத்தை துவங்க தயாரா?',
      contactDesc: 'பாலினம், வடிவமைப்பு மேம்பாடு, மற்றும் பொருட்கள் மூலமாக நிலையான மதிப்பை ஆதரிக்கும் EcoSphere India உடன் பணியாற்றுங்கள்.',
      headerContact: 'தொடர்பு கொள்ளுங்கள்'
    }
  };

  let chatLanguage = 'en';
  let pageLanguage = 'en';

  function translate(language, key) {
    return translations[language][key];
  }

  function updateLanguageUI() {
    langToggle.textContent = chatLanguage === 'en' ? 'தமிழ்' : 'English';
    pageLangToggle.textContent = translate(pageLanguage, 'pageLanguageButton');
    assistantTitle.textContent = translate(chatLanguage, 'headerTitle');
    assistantSubtitle.textContent = translate(chatLanguage, 'headerSubtitle');
    chatInput.placeholder = translate(chatLanguage, 'placeholder');
    chatSubmit.textContent = translate(chatLanguage, 'send');
    navServices.textContent = translations[pageLanguage].nav.services;
    navProjects.textContent = translations[pageLanguage].nav.projects;
    navBenefits.textContent = translations[pageLanguage].nav.benefits;
    navMaterials.textContent = translations[pageLanguage].nav.materials;
    navContact.textContent = translations[pageLanguage].nav.contact;
    heroEyebrow.textContent = translate(pageLanguage, 'heroEyebrow');
    heroTitle.textContent = translate(pageLanguage, 'heroTitle');
    heroDescription.textContent = translate(pageLanguage, 'heroDescription');
    exploreBtn.textContent = translate(pageLanguage, 'explore');
    viewBtn.textContent = translate(pageLanguage, 'view');
    servicesEyebrow.textContent = translate(pageLanguage, 'servicesEyebrow');
    servicesTitle.textContent = translate(pageLanguage, 'servicesTitle');
    servicesDesc.textContent = translate(pageLanguage, 'servicesDesc');
    benefitsEyebrow.textContent = translate(pageLanguage, 'benefitsEyebrow');
    benefitsTitle.textContent = translate(pageLanguage, 'benefitsTitle');
    benefitsDesc.textContent = translate(pageLanguage, 'benefitsDesc');
    materialsEyebrow.textContent = translate(pageLanguage, 'materialsEyebrow');
    materialsTitle.textContent = translate(pageLanguage, 'materialsTitle');
    contactEyebrow.textContent = translate(pageLanguage, 'contactEyebrow');
    contactTitle.textContent = translate(pageLanguage, 'contactTitle');
    contactDesc.textContent = translate(pageLanguage, 'contactDesc');
    headerContactBtn.textContent = translate(pageLanguage, 'headerContact');
    document.documentElement.lang = pageLanguage;
  }

  function toggleChat() {
    const open = chatWidget.classList.toggle('open');
    chatPanel.setAttribute('aria-hidden', String(!open));
    if (open) {
      chatInput.focus();
    }
  }

  function addMessage(text, sender) {
    const message = document.createElement('div');
    message.className = `message ${sender}`;
    message.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function generateResponse(question) {
    const prompt = question.toLowerCase();
    const isTamil = chatLanguage === 'ta';

    const responses = {
      leed: isTamil
        ? 'LEED மற்றும் IGBC சான்றிதழ் திட்டமிடல் முதல் கமிஷனிங் வரை உதவுகிறது.'
        : 'We can support LEED and IGBC certification from planning through commissioning, including documentation and rating compliance.',
      solar: isTamil
        ? 'சூரிய PV அமைப்புகள் энергி செலவைக் குறைக்க உதவும். அளவீடு மற்றும் ஒருங்கிணைப்பில் உதவ முடியும்.'
        : 'Solar PV systems help lower energy costs and improve sustainability. We can guide you through sizing, placement, and integration.',
      water: isTamil
        ? 'மழைநீர் சேகரிப்பு தண்ணீர் தேவையை குறைக்க உதவும். சேகரிப்பு மற்றும் பயன்பாட்டிற்கு வடிவமைக்கிறோம்.'
        : 'Rainwater harvesting is a great way to reduce water demand. We design systems for collection, filtration, and reuse.',
      material: isTamil
        ? 'AAC, கூழ் பாம், பாம்பு, மரக்கட்டுகள் போன்ற இயற்கை பொருட்களை நாம் பரிந்துரைக்கிறோம்.'
        : 'We recommend eco-materials like AAC, bamboo composites, fly ash blocks and green concrete for lower embodied carbon and longer life.',
      default: isTamil
        ? 'நான் LEED, எரிசக்தி மாடலிங், நீர் சேமிப்பு மற்றும் நிலையான பொருட்களை பற்றி உதவ முடியும். உங்கள் திட்ட தேவைகளை மேலும் கூறுங்கள்.'
        : 'EcoSphere AI can help with certification, energy modeling, water efficiency, and sustainable materials. Tell me more about your project needs.'
    };

    if (prompt.includes('leed') || prompt.includes('igbc') || prompt.includes('certification')) {
      return responses.leed;
    }
    if (prompt.includes('solar') || prompt.includes('pv')) {
      return responses.solar;
    }
    if (prompt.includes('rain') || prompt.includes('water') || prompt.includes('harvest')) {
      return responses.water;
    }
    if (prompt.includes('material') || prompt.includes('aac') || prompt.includes('bamboo') || prompt.includes('concrete')) {
      return responses.material;
    }
    return responses.default;
  }

  chatToggle.addEventListener('click', toggleChat);
  chatClose.addEventListener('click', toggleChat);
  langToggle.addEventListener('click', function () {
    chatLanguage = chatLanguage === 'en' ? 'ta' : 'en';
    updateLanguageUI();
    addMessage(chatLanguage === 'en' ? translations.en.switchBack : translations.ta.switch, 'bot');
  });
  pageLangToggle.addEventListener('click', function () {
    pageLanguage = pageLanguage === 'en' ? 'ta' : 'en';
    updateLanguageUI();
  });

  chatForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userText = chatInput.value.trim();
    if (!userText) {
      return;
    }

    addMessage(userText, 'user');
    chatInput.value = '';

    setTimeout(() => {
      addMessage(generateResponse(userText), 'bot');
    }, 700);
  });

  updateLanguageUI();
});
