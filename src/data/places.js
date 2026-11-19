/**
 * Places we serve. Each place gets its own page at /locations/<slug>.
 * Notes and sectors are specific to the place so no two pages say the same thing.
 * Rajasthan district list: the 41 districts in the NIC directory (checked November 2026).
 */

/** What we would build for each kind of local business. Pages pick 3 or 4 of these. */
export const sectors = {
  clinics: { name: 'Clinics, hospitals and labs', idea: 'A doctor website that ranks for "<specialty> doctor in <place>", online appointment booking, and WhatsApp reminders for follow-ups and reports.', searches: ['dentist in <place>', 'best doctor in <place>', 'pathology lab in <place>'] },
  coaching: { name: 'Coaching institutes and schools', idea: 'Admission pages for each course, enquiry forms that reach WhatsApp instantly, fee reminders and result announcements to parents.', searches: ['coaching classes in <place>', 'best school in <place>', 'NEET coaching in <place>'] },
  hotels: { name: 'Hotels, homestays and resorts', idea: 'A direct booking website so guests do not pay OTA commission, a strong Google profile with photos, and automatic booking confirmations.', searches: ['hotels in <place>', 'resort in <place>', 'homestay in <place>'] },
  restaurants: { name: 'Restaurants, cafes and sweet shops', idea: 'An online menu, WhatsApp ordering without Zomato or Swiggy commission, and festival offer posters every month.', searches: ['restaurants in <place>', 'cafe near me <place>', 'sweet shop in <place>'] },
  retail: { name: 'Shops and showrooms', idea: 'A WhatsApp catalogue, a simple online store, Google Maps listing with reviews, and billing and stock software.', searches: ['mobile shop in <place>', 'clothing store in <place>', 'electronics shop in <place>'] },
  jewellery: { name: 'Jewellers and gem traders', idea: 'A catalogue website with collections and enquiry by WhatsApp, international pages for overseas buyers, and product photo and video edits.', searches: ['jewellers in <place>', 'gemstone shop in <place>', 'silver jewellery <place>'] },
  handicrafts: { name: 'Handicraft and furniture makers', idea: 'An export-ready catalogue site with prices in dollars, buyer enquiry tracking, and product videos for Instagram and Pinterest.', searches: ['handicraft exporters <place>', 'wooden furniture <place>', 'handmade decor <place>'] },
  textiles: { name: 'Textile mills and traders', idea: 'A B2B catalogue with fabric ranges, IndiaMART and Google listings that match, and order and dispatch updates on WhatsApp.', searches: ['textile manufacturers <place>', 'fabric wholesalers <place>', 'saree suppliers <place>'] },
  stone: { name: 'Marble, granite and stone suppliers', idea: 'A product range website with photos of every variety, enquiry forms for builders and architects, and export buyer pages.', searches: ['marble suppliers <place>', 'granite dealers <place>', 'stone exporters <place>'] },
  industry: { name: 'Factories and industrial units', idea: 'A company profile website, product pages that rank on Google, and order, stock and dispatch software for the plant.', searches: ['manufacturers in <place>', 'industrial suppliers <place>', 'factory in <place>'] },
  agriculture: { name: 'Agri traders, dealers and food processors', idea: 'A website for mandi traders and dealers, WhatsApp price updates to buyers, and simple stock and billing software.', searches: ['agri traders <place>', 'mandi rates <place>', 'fertilizer dealer <place>'] },
  realestate: { name: 'Builders and property dealers', idea: 'A project website for each colony or tower, lead forms that go to WhatsApp, and automatic follow-ups so no enquiry is lost.', searches: ['property dealer in <place>', 'plots for sale <place>', 'flats in <place>'] },
  tourism: { name: 'Travel agents and tour operators', idea: 'Tour package pages that rank on Google, WhatsApp enquiry replies, and Instagram reels of the sights.', searches: ['travel agent in <place>', '<place> tour package', 'taxi service <place>'] },
  professional: { name: 'CA firms, lawyers and consultants', idea: 'A professional website, client document collection online, and reminders for filing and hearing dates.', searches: ['CA in <place>', 'lawyer in <place>', 'GST consultant <place>'] },
  events: { name: 'Wedding planners, banquets and photographers', idea: 'A portfolio website, enquiry assistant on WhatsApp, and digital and video invitations for your clients.', searches: ['wedding planner in <place>', 'banquet hall <place>', 'photographer in <place>'] },
  it: { name: 'Startups and IT companies', idea: 'Product websites, dashboards and portals, and a launch plan for Google, LinkedIn and AI search.', searches: ['software company in <place>', 'IT company <place>', 'app developer <place>'] },
}

const d = (name, slug, note, sectorKeys, near) => ({ type: 'district', name, slug, state: 'Rajasthan', note, sectors: sectorKeys, near })

export const rajasthanDistricts = [
  d('Ajmer', 'ajmer', 'Ajmer and Pushkar bring pilgrims and tourists all year, Kishangarh is a major marble market, and the city is known for its schools and colleges.', ['tourism', 'stone', 'coaching', 'hotels'], ['beawar', 'jaipur', 'nagaur', 'tonk']),
  d('Alwar', 'alwar', 'Our home district. Alwar city has a growing base of clinics, coaching centres and shops, close to Delhi NCR and the Bhiwadi and Neemrana industrial belt.', ['clinics', 'coaching', 'retail', 'industry'], ['khairthal-tijara', 'kotputli-behror', 'bharatpur', 'deeg']),
  d('Balotra', 'balotra', 'Balotra is known for textile dyeing and printing units, and Nakoda Ji draws large numbers of visitors.', ['textiles', 'industry', 'retail'], ['barmer', 'jodhpur', 'pali', 'jalore']),
  d('Banswara', 'banswara', 'Banswara, the "city of a hundred islands" on the Mahi river, has growing education, healthcare and tourism needs.', ['tourism', 'clinics', 'retail'], ['dungarpur', 'pratapgarh', 'salumbar', 'udaipur']),
  d('Baran', 'baran', 'Baran is an agricultural district with grain mandis, dealers and food processors serving the Hadoti region.', ['agriculture', 'retail', 'clinics'], ['kota', 'jhalawar', 'bundi']),
  d('Barmer', 'barmer', 'Barmer has oil and gas activity, a strong handicraft and applique tradition, and fast-growing towns.', ['handicrafts', 'industry', 'retail'], ['balotra', 'jaisalmer', 'jodhpur', 'jalore']),
  d('Beawar', 'beawar', 'Beawar is a trading town with cement, mineral and wool businesses on the Ajmer to Pali corridor.', ['industry', 'retail', 'agriculture'], ['ajmer', 'pali', 'rajsamand']),
  d('Bharatpur', 'bharatpur', 'Bharatpur is known for the Keoladeo bird sanctuary and has a busy market for mustard and agricultural trade.', ['tourism', 'agriculture', 'hotels', 'clinics'], ['deeg', 'dholpur', 'alwar', 'karauli']),
  d('Bhilwara', 'bhilwara', 'Bhilwara is one of India’s largest textile hubs, with spinning mills, weaving units and fabric traders.', ['textiles', 'industry', 'professional'], ['chittorgarh', 'rajsamand', 'ajmer', 'bundi']),
  d('Bikaner', 'bikaner', 'Bikaner is famous for its namkeen and sweets, camel heritage and Junagarh Fort, with many food businesses selling across India.', ['restaurants', 'tourism', 'retail', 'agriculture'], ['churu', 'ganganagar', 'nagaur', 'phalodi']),
  d('Bundi', 'bundi', 'Bundi’s stepwells and palaces attract tourists, and the district has a strong agricultural base.', ['tourism', 'hotels', 'agriculture'], ['kota', 'tonk', 'baran']),
  d('Chittorgarh', 'chittorgarh', 'Chittorgarh has one of India’s best-known forts and a large cement industry.', ['tourism', 'industry', 'hotels'], ['bhilwara', 'udaipur', 'pratapgarh', 'rajsamand']),
  d('Churu', 'churu', 'Churu is known for its painted havelis and the Tal Chhapar sanctuary, with many families running businesses across India.', ['retail', 'tourism', 'clinics'], ['jhunjhunu', 'sikar', 'bikaner', 'hanumangarh']),
  d('Dausa', 'dausa', 'Dausa sits on the Jaipur to Agra highway with Mehandipur Balaji nearby, and has a growing number of shops and schools.', ['tourism', 'retail', 'coaching'], ['jaipur', 'alwar', 'karauli', 'sawai-madhopur']),
  d('Deeg', 'deeg', 'Deeg is known for its water palaces and gardens, and is close to Mathura and Bharatpur.', ['tourism', 'retail', 'agriculture'], ['bharatpur', 'alwar', 'khairthal-tijara']),
  d('Dholpur', 'dholpur', 'Dholpur is known for its red sandstone, used in buildings across India, on the Chambal river.', ['stone', 'agriculture', 'retail'], ['bharatpur', 'karauli']),
  d('Didwana-Kuchaman', 'didwana-kuchaman', 'Didwana-Kuchaman includes Makrana, whose white marble is famous worldwide, and Kuchaman City’s coaching and schools.', ['stone', 'coaching', 'retail'], ['nagaur', 'ajmer', 'sikar', 'jaipur']),
  d('Dungarpur', 'dungarpur', 'Dungarpur is a tribal district with palaces and lakes, and growing schools, clinics and local trade.', ['tourism', 'clinics', 'retail'], ['banswara', 'udaipur', 'salumbar']),
  d('Ganganagar', 'ganganagar', 'Sri Ganganagar is the "food basket" of Rajasthan, with big grain and cotton mandis and agri businesses.', ['agriculture', 'retail', 'clinics', 'coaching'], ['hanumangarh', 'bikaner']),
  d('Hanumangarh', 'hanumangarh', 'Hanumangarh is an irrigated farming district with cotton, mustard and grain trade.', ['agriculture', 'retail', 'clinics'], ['ganganagar', 'churu', 'bikaner']),
  d('Jaipur', 'jaipur', 'Jaipur is the state capital, with tourism, gems and jewellery, handicrafts, IT parks in Sitapura and Mahindra World City, and thousands of clinics, coaching centres and shops.', ['jewellery', 'tourism', 'it', 'clinics'], ['dausa', 'kotputli-behror', 'tonk', 'ajmer']),
  d('Jaisalmer', 'jaisalmer', 'Jaisalmer’s golden fort and Sam sand dunes make it one of India’s top desert destinations, with hundreds of hotels and desert camps.', ['tourism', 'hotels', 'handicrafts', 'stone'], ['barmer', 'phalodi', 'jodhpur']),
  d('Jalore', 'jalore', 'Jalore is one of India’s biggest granite centres, with quarries, processing units and traders.', ['stone', 'industry', 'retail'], ['sirohi', 'balotra', 'pali', 'barmer']),
  d('Jhalawar', 'jhalawar', 'Jhalawar is known for its oranges, the Gagron fort and a large medical college.', ['agriculture', 'clinics', 'tourism'], ['kota', 'baran']),
  d('Jhunjhunu', 'jhunjhunu', 'Jhunjhunu, in Shekhawati, is known for its havelis, a strong army tradition and well-known schools in Pilani and Nawalgarh.', ['coaching', 'tourism', 'retail', 'clinics'], ['churu', 'sikar', 'kotputli-behror']),
  d('Jodhpur', 'jodhpur', 'Jodhpur is a major exporter of handicrafts and furniture, a big tourism city around Mehrangarh, and home to AIIMS and IIT Jodhpur.', ['handicrafts', 'tourism', 'clinics', 'hotels'], ['phalodi', 'balotra', 'pali', 'nagaur']),
  d('Karauli', 'karauli', 'Karauli is known for Kaila Devi and Shri Mahavir Ji temples and its red stone.', ['tourism', 'stone', 'retail'], ['sawai-madhopur', 'dholpur', 'bharatpur', 'dausa']),
  d('Khairthal-Tijara', 'khairthal-tijara', 'Khairthal-Tijara includes Bhiwadi, one of Rajasthan’s busiest industrial towns next to Delhi NCR, and the Khairthal grain market.', ['industry', 'realestate', 'agriculture', 'clinics'], ['alwar', 'kotputli-behror', 'deeg']),
  d('Kota', 'kota', 'Kota is India’s best-known coaching city for engineering and medical entrance exams, with hostels, PGs and a large industrial base.', ['coaching', 'realestate', 'restaurants', 'industry'], ['bundi', 'baran', 'jhalawar']),
  d('Kotputli-Behror', 'kotputli-behror', 'Kotputli-Behror sits on the Delhi to Jaipur highway and includes the Neemrana and Behror industrial areas.', ['industry', 'hotels', 'restaurants', 'realestate'], ['alwar', 'khairthal-tijara', 'jaipur', 'jhunjhunu']),
  d('Nagaur', 'nagaur', 'Nagaur is famous for its cattle fair, kasuri methi and spices, and its large agricultural trade.', ['agriculture', 'retail', 'industry'], ['didwana-kuchaman', 'bikaner', 'jodhpur', 'ajmer']),
  d('Pali', 'pali', 'Pali has textile processing units and the Ranakpur temple, and many Pali families run businesses across India.', ['textiles', 'tourism', 'industry'], ['jodhpur', 'balotra', 'beawar', 'rajsamand']),
  d('Phalodi', 'phalodi', 'Phalodi is known for salt production, a large solar power base and the Khichan demoiselle cranes.', ['industry', 'tourism', 'retail'], ['jodhpur', 'jaisalmer', 'bikaner']),
  d('Pratapgarh', 'pratapgarh', 'Pratapgarh is known for Thewa gold-on-glass jewellery and its forests.', ['jewellery', 'handicrafts', 'retail'], ['chittorgarh', 'banswara', 'salumbar']),
  d('Rajsamand', 'rajsamand', 'Rajsamand has a major marble industry, the Nathdwara temple and Kumbhalgarh fort.', ['stone', 'tourism', 'hotels'], ['udaipur', 'chittorgarh', 'bhilwara', 'pali']),
  d('Salumbar', 'salumbar', 'Salumbar is one of Rajasthan’s newer districts, between Udaipur and Banswara, with local trade and lake tourism near Jaisamand.', ['retail', 'tourism', 'clinics'], ['udaipur', 'dungarpur', 'banswara', 'pratapgarh']),
  d('Sawai Madhopur', 'sawai-madhopur', 'Sawai Madhopur is the gateway to Ranthambore National Park, with many resorts, safari operators and guides.', ['tourism', 'hotels', 'retail'], ['karauli', 'tonk', 'bundi', 'dausa']),
  d('Sikar', 'sikar', 'Sikar has become a large coaching and school hub for Shekhawati, with Khatu Shyam Ji drawing huge crowds.', ['coaching', 'tourism', 'clinics', 'retail'], ['jhunjhunu', 'churu', 'didwana-kuchaman', 'jaipur']),
  d('Sirohi', 'sirohi', 'Sirohi includes Mount Abu, Rajasthan’s hill station, and the Dilwara temples, with a strong hotel and tourism trade.', ['tourism', 'hotels', 'stone'], ['jalore', 'udaipur', 'pali']),
  d('Tonk', 'tonk', 'Tonk is known for its namda felt craft, Bisalpur dam and its old libraries.', ['handicrafts', 'retail', 'agriculture'], ['jaipur', 'ajmer', 'sawai-madhopur', 'bundi']),
  d('Udaipur', 'udaipur', 'Udaipur, the city of lakes, is one of India’s favourite wedding and hotel destinations, with zinc and marble industries too.', ['hotels', 'events', 'tourism', 'stone'], ['rajsamand', 'salumbar', 'chittorgarh', 'dungarpur']),
]

const s = (name, slug, note, cities, sectorKeys) => ({ type: 'state', name, slug, note, cities, sectors: sectorKeys })

export const indianStates = [
  s('Andhra Pradesh', 'andhra-pradesh', 'Andhra Pradesh has fast-growing cities, ports and pharma, aqua and agri businesses.', ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati'], ['clinics', 'industry', 'agriculture']),
  s('Arunachal Pradesh', 'arunachal-pradesh', 'Arunachal Pradesh has growing tourism, homestays and local businesses moving online.', ['Itanagar', 'Tawang', 'Pasighat'], ['tourism', 'hotels', 'retail']),
  s('Assam', 'assam', 'Assam is known for tea estates, and Guwahati is the business gateway to the North East.', ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat'], ['agriculture', 'retail', 'clinics']),
  s('Bihar', 'bihar', 'Bihar has a huge coaching and education market and fast-growing healthcare and retail.', ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'], ['coaching', 'clinics', 'retail']),
  s('Chhattisgarh', 'chhattisgarh', 'Chhattisgarh has steel, power and mining industries and growing cities like Raipur and Bhilai.', ['Raipur', 'Bhilai', 'Bilaspur', 'Korba'], ['industry', 'clinics', 'coaching']),
  s('Goa', 'goa', 'Goa runs on tourism, with hotels, villas, restaurants and event venues competing for direct bookings.', ['Panaji', 'Margao', 'Mapusa', 'Vasco da Gama'], ['hotels', 'restaurants', 'events']),
  s('Gujarat', 'gujarat', 'Gujarat is one of India’s strongest manufacturing and trading states, from Surat textiles and diamonds to Ahmedabad and Rajkot industry.', ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'], ['industry', 'textiles', 'jewellery', 'retail']),
  s('Haryana', 'haryana', 'Haryana includes Gurugram’s offices and startups, and industrial towns like Faridabad, Panipat and Manesar.', ['Gurugram', 'Faridabad', 'Panipat', 'Karnal'], ['it', 'industry', 'realestate', 'clinics']),
  s('Himachal Pradesh', 'himachal-pradesh', 'Himachal Pradesh depends on tourism, with hotels and homestays in Shimla, Manali and Dharamshala.', ['Shimla', 'Manali', 'Dharamshala', 'Solan'], ['hotels', 'tourism', 'agriculture']),
  s('Jharkhand', 'jharkhand', 'Jharkhand has steel and mining towns and a growing education and healthcare market.', ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro'], ['industry', 'coaching', 'clinics']),
  s('Karnataka', 'karnataka', 'Karnataka has Bengaluru’s tech and startup scene and strong businesses in Mysuru, Mangaluru and Hubballi.', ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi'], ['it', 'clinics', 'restaurants']),
  s('Kerala', 'kerala', 'Kerala has strong tourism, Ayurveda and healthcare, and many businesses serving the Gulf.', ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur'], ['hotels', 'clinics', 'tourism']),
  s('Madhya Pradesh', 'madhya-pradesh', 'Madhya Pradesh has Indore’s trade and startup scene, Bhopal, and big agricultural markets.', ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior'], ['retail', 'coaching', 'agriculture', 'clinics']),
  s('Maharashtra', 'maharashtra', 'Maharashtra has Mumbai and Pune, India’s largest business markets, plus Nagpur, Nashik and Aurangabad.', ['Mumbai', 'Pune', 'Nagpur', 'Nashik'], ['it', 'realestate', 'clinics', 'retail']),
  s('Manipur', 'manipur', 'Manipur has local handloom and craft businesses and a growing online market.', ['Imphal'], ['handicrafts', 'retail', 'tourism']),
  s('Meghalaya', 'meghalaya', 'Meghalaya’s tourism around Shillong and Cherrapunji is growing fast, with many homestays.', ['Shillong', 'Tura'], ['tourism', 'hotels', 'retail']),
  s('Mizoram', 'mizoram', 'Mizoram has local businesses and tourism starting to move online.', ['Aizawl', 'Lunglei'], ['retail', 'tourism', 'clinics']),
  s('Nagaland', 'nagaland', 'Nagaland is known for the Hornbill Festival and growing tourism and local crafts.', ['Kohima', 'Dimapur'], ['tourism', 'handicrafts', 'retail']),
  s('Odisha', 'odisha', 'Odisha has Bhubaneswar’s growing IT and education base, Puri tourism and industry in Rourkela and Cuttack.', ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri'], ['coaching', 'tourism', 'industry']),
  s('Punjab', 'punjab', 'Punjab has Ludhiana’s manufacturing, Amritsar’s tourism, and many families with business links abroad.', ['Ludhiana', 'Amritsar', 'Jalandhar', 'Mohali'], ['industry', 'restaurants', 'coaching', 'clinics']),
  s('Sikkim', 'sikkim', 'Sikkim depends on tourism, with hotels and travel agents in Gangtok and Pelling.', ['Gangtok', 'Pelling', 'Namchi'], ['tourism', 'hotels', 'restaurants']),
  s('Tamil Nadu', 'tamil-nadu', 'Tamil Nadu has Chennai’s IT and auto industry, Coimbatore’s textiles and Madurai’s trade.', ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'], ['it', 'textiles', 'industry', 'clinics']),
  s('Telangana', 'telangana', 'Telangana has Hyderabad, one of India’s biggest IT and pharma cities.', ['Hyderabad', 'Warangal', 'Karimnagar'], ['it', 'clinics', 'realestate']),
  s('Tripura', 'tripura', 'Tripura has Agartala’s growing retail, education and healthcare.', ['Agartala'], ['retail', 'clinics', 'coaching']),
  s('Uttar Pradesh', 'uttar-pradesh', 'Uttar Pradesh is India’s largest state, with Noida’s IT parks, Lucknow, Kanpur and Agra, and huge retail, education and healthcare markets.', ['Noida', 'Lucknow', 'Kanpur', 'Agra'], ['it', 'coaching', 'clinics', 'retail']),
  s('Uttarakhand', 'uttarakhand', 'Uttarakhand has tourism and pilgrimage in Rishikesh, Haridwar and Nainital, and industry in Dehradun and Haldwani.', ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital'], ['hotels', 'tourism', 'coaching']),
  s('West Bengal', 'west-bengal', 'West Bengal has Kolkata’s trading and retail markets, tea in Darjeeling and growing IT in Salt Lake.', ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur'], ['retail', 'clinics', 'restaurants']),
  s('Delhi', 'delhi', 'Delhi is one of India’s largest markets for clinics, shops, wholesalers, coaching and professional firms.', ['New Delhi', 'Dwarka', 'Rohini', 'Saket'], ['clinics', 'retail', 'coaching', 'professional']),
  s('Chandigarh', 'chandigarh', 'Chandigarh and the Tricity are known for clinics, immigration consultants, coaching and real estate.', ['Chandigarh', 'Mohali', 'Panchkula'], ['clinics', 'professional', 'realestate']),
  s('Jammu and Kashmir', 'jammu-and-kashmir', 'Jammu and Kashmir has tourism, handicrafts, dry fruits and saffron businesses.', ['Srinagar', 'Jammu', 'Gulmarg'], ['tourism', 'handicrafts', 'hotels']),
  s('Ladakh', 'ladakh', 'Ladakh depends on tourism, with hotels, homestays and adventure tour operators in Leh.', ['Leh', 'Kargil'], ['tourism', 'hotels']),
  s('Puducherry', 'puducherry', 'Puducherry has tourism, cafes and boutique stays, and education institutions.', ['Puducherry', 'Karaikal'], ['hotels', 'restaurants', 'coaching']),
  s('Andaman and Nicobar Islands', 'andaman-and-nicobar', 'The islands depend on tourism, with resorts, dive operators and travel agents.', ['Port Blair', 'Havelock'], ['tourism', 'hotels']),
  s('Dadra and Nagar Haveli and Daman and Diu', 'dadra-nagar-haveli-daman-diu', 'This union territory has industrial units in Silvassa and Daman and beach tourism in Diu.', ['Silvassa', 'Daman', 'Diu'], ['industry', 'hotels']),
  s('Lakshadweep', 'lakshadweep', 'Lakshadweep has island tourism starting to open up, with small resorts and operators.', ['Kavaratti', 'Agatti'], ['tourism', 'hotels']),
]

const c = (name, slug, note, cities, currency, hours, sectorKeys) => ({ type: 'country', name, slug, note, cities, currency, hours, sectors: sectorKeys })

export const countries = [
  c('United Arab Emirates', 'uae', 'Many UAE businesses are run by or serve the Indian community, and work best with a team in a close time zone.', ['Dubai', 'Abu Dhabi', 'Sharjah'], 'USD or AED', 'UAE is 1.5 hours behind India, so our working day overlaps almost fully.', ['restaurants', 'realestate', 'clinics', 'retail']),
  c('United States', 'usa', 'Small US businesses get custom websites and software at a fraction of local agency prices, with work done while they sleep.', ['New York', 'Texas', 'California', 'New Jersey'], 'USD', 'We keep morning or evening calls in US time and reply overnight.', ['clinics', 'restaurants', 'professional', 'it']),
  c('United Kingdom', 'uk', 'UK small businesses and startups use us for websites, apps and automation with clear fixed prices.', ['London', 'Birmingham', 'Manchester', 'Leicester'], 'USD or GBP', 'The UK is 4.5 to 5.5 hours behind India, so afternoons overlap.', ['restaurants', 'professional', 'retail', 'it']),
  c('Canada', 'canada', 'Canadian small businesses, including many run by the Indian community, work with us for websites, software and marketing.', ['Toronto', 'Brampton', 'Vancouver', 'Calgary'], 'USD or CAD', 'We schedule calls in your morning or evening.', ['realestate', 'restaurants', 'professional', 'retail']),
  c('Australia', 'australia', 'Australian businesses get websites, apps and automation with replies during their working day.', ['Sydney', 'Melbourne', 'Brisbane', 'Perth'], 'USD or AUD', 'Australia is 2.5 to 5.5 hours ahead of India, so mornings overlap well.', ['clinics', 'restaurants', 'retail', 'professional']),
  c('Singapore', 'singapore', 'Singapore startups and SMEs use us for product websites, dashboards and automation.', ['Singapore'], 'USD or SGD', 'Singapore is 2.5 hours ahead of India.', ['it', 'restaurants', 'professional']),
  c('Saudi Arabia', 'saudi-arabia', 'Businesses in Saudi Arabia work with us for websites, apps and WhatsApp automation.', ['Riyadh', 'Jeddah', 'Dammam'], 'USD or SAR', 'Saudi Arabia is 2.5 hours behind India.', ['retail', 'realestate', 'restaurants']),
  c('Qatar', 'qatar', 'Qatar businesses use us for websites, booking systems and WhatsApp automation.', ['Doha'], 'USD or QAR', 'Qatar is 2.5 hours behind India.', ['restaurants', 'clinics', 'retail']),
  c('Oman', 'oman', 'Oman businesses work with us for websites, stores and automation.', ['Muscat', 'Salalah'], 'USD or OMR', 'Oman is 1.5 hours behind India.', ['retail', 'restaurants', 'clinics']),
  c('Kuwait', 'kuwait', 'Kuwait businesses use us for websites, apps and marketing.', ['Kuwait City'], 'USD or KWD', 'Kuwait is 2.5 hours behind India.', ['retail', 'restaurants', 'clinics']),
  c('New Zealand', 'new-zealand', 'New Zealand small businesses get websites and software with clear fixed prices.', ['Auckland', 'Wellington', 'Christchurch'], 'USD or NZD', 'New Zealand is 6.5 to 7.5 hours ahead of India, so our mornings are your afternoons.', ['restaurants', 'retail', 'professional']),
  c('Nepal', 'nepal', 'Nepal businesses, hotels and trekking operators use us for websites and booking.', ['Kathmandu', 'Pokhara'], 'USD or INR', 'Nepal is 15 minutes ahead of India.', ['hotels', 'tourism', 'retail']),
]

export const allPlaces = [...rajasthanDistricts, ...indianStates, ...countries]

export function findPlace(slug) {
  return allPlaces.find((place) => place.slug === slug) || null
}
