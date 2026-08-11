import type { NavItem, PageContent, SiteMeta } from './types';
import { f } from './filler';

export const siteMeta: SiteMeta = {
	coupleNames: 'Carolina & Fred',
	brandNames: 'Fred & Caro',
	date: 'July 3, 2027',
	location: 'Villa de Leyva, Boyacá, Colombia',
	titleSuffix: 'Carolina & Fred',
	countdownTarget: '2027-07-03T15:00:00'
};

const storyCarousel = [
	{ src: '/images/carousel-1.jpg', alt: 'Fred and Caro', aspect: 'portrait' as const },
	{ src: '/images/carousel-2.jpg', alt: 'Fred and Caro', aspect: 'portrait' as const },
	{ src: '/images/carousel-3.jpg', alt: 'Fred and Caro', aspect: 'portrait' as const },
	{ src: '/images/carousel-4.jpg', alt: 'Fred and Caro', aspect: 'portrait' as const },
	{ src: '/images/carousel-5.jpg', alt: 'Fred and Caro', aspect: 'portrait' as const }
];

export const navigation: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Our Story', href: '/our-story/' },
	{ label: 'RSVP', href: '/rsvp/' },
	{ label: 'Schedule', href: '/schedule/' },
	{ label: 'Travel Information', href: '/travel-information/' },
	{ label: 'About Colombia', href: '/about-colombia/' },
	{
		label: 'Recommendations',
		href: '/food-and-drink/',
		children: [
			{ label: 'Food and Drink', href: '/food-and-drink/' },
			{ label: 'Things to do', href: '/things-to-do/' },
			{ label: 'Hotels', href: '/hotels/' },
			{ label: 'Restaurants', href: '/restaurants/' }
		]
	},
	{ label: 'FAQs', href: '/faqs/' }
];

export const navigationEs: NavItem[] = [
	{ label: 'Inicio', href: '/es/' },
	{ label: 'Nuestra Historia', href: '/es/our-story/' },
	{ label: 'RSVP', href: '/es/rsvp/' },
	{ label: 'Horario', href: '/es/schedule/' },
	{ label: 'Viaje', href: '/es/travel-information/' },
	{ label: 'Preguntas', href: '/es/faqs/' }
];

export const pages: Record<string, PageContent> = {
	'/': {
		type: 'home',
		title: 'HOME',
		hero: {
			src: '/images/hero.jpg',
			alt: 'Fred and Caro',
			aspect: 'landscape'
		},
		carousel: storyCarousel,
		paragraphs: [
			'We are so excited to share this weekend with you, and greatly appreciate you for the impact on our journies that lead us to each other.',
			'We have detailed information about the wedding location, travel, and accommodations [here](/travel-information/). Please reach out to us if you have any questions.',
			'Given the location and logistics of the wedding, we kindly request your RSVP by ' + f('May 15, 2027') + ' through the RSVP tab.',

			'Fred and Caro'
		],
		countdownTarget: siteMeta.countdownTarget,
		details: {
			date: 'July 3, 2027',
			time: '3:00 PM',
			venue: 'Casa de Buganvilias, Villa de Leyva'
		}
	},
	'/our-story/': {
		type: 'story',
		title: 'Our Story',
		sections: [
			{
				heading: '',
				paragraphs: [
					'Fred and Caro met for the first time in March 2024 at a board game bar in Washington DC for a bumble date.',
					'REST OF STORY HERE...'			],
				images: storyCarousel
			}
		]
	},
	'/rsvp/': {
		type: 'rsvp',
		title: 'RSVP',
		intro: [
			'Please let us know if you will be able to attend the wedding by filling out the form below. We look forward to celebrating with you!',
			'MORE RSVP INSTRUCTIONS HERE...'
		],
		fields: [
			{ name: 'name', label: 'Name', type: 'text', placeholder: 'Name', required: true },
			{ name: 'email', label: 'Email', type: 'email', placeholder: 'Email', required: true },
			{
				name: 'phone',
				label: 'Phone number (+country code)',
				type: 'tel',
				placeholder: 'Phone number',
				required: true
			},
			{
				name: 'attendWedding',
				label: 'Can you attend the Wedding?',
				type: 'select',
				options: ['Yes', 'No'],
				required: true
			},
			{
				name: 'attendWelcome',
				label: 'Will you attend the welcome night?',
				type: 'select',
				options: ['Yes', 'No'],
				required: true
			},
			{
				name: 'transportBogota',
				label: 'Will you need transportation from Bogot\u00e1 to Villa de Leyva and returning?',
				type: 'select',
				options: ['Yes', 'No'],
				required: true
			},
			{
				name: 'transportCeremony',
				label: 'Will you need transportation from Villa de Leyva to the ceremony site: Casa Buganvilia?',
				type: 'select',
				options: ['Yes', 'No'],
				required: true
			},
			{
				name: 'dietary',
				label: 'Any dietary restrictions?',
				type: 'textarea',
				required: true
			},
			{
				name: 'songs',
				label: 'Song requests for dancing?',
				type: 'textarea',
				required: true
			}
		],
		submitLabel: 'Send',
		submitMessage: 'Thank you! Your RSVP has been received.'
	},
	'/schedule/': {
		type: 'schedule',
		title: 'Schedule',
		mapNote: 'A map will be added closer to the date.',
		days: [
			{
				date: 'Friday, July 2, 2027',
				events: [
					{
						title: 'Welcome Dinner',
						paragraphs: [
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
							`Time: ${f('7:00 PM')} · Location: ${f('Plaza Mayor area, Villa de Leyva')}.`
						]
					}
				]
			},
			{
				date: 'Saturday, July 3, 2027',
				events: [
					{
						title: 'Wedding Ceremony, Dinner and Party | 3:00 PM',
						paragraphs: [
							'Location: Casa de Buganvilias, Villa de Leyva',
							'Attire: Formal Attire',
							'Ladies, please refrain from wearing white, nudes, light pinks, lavender, metallics (gold or silver) and any glitter / shinny attire. Thank you for your cooperation!',
						]
					}
				]
			}
		]
	},
	'/travel-information/': {
		type: 'sections',
		title: 'Travel Information',
		intro: [
			"We're so excited to celebrate with you in Colombia! To help make your journey as smooth as possible, we've put together some helpful travel information below."
		],
		sections: [
			{
				heading: 'Flying to Colombia',
				level: 4,
				paragraphs: [
					"If you're traveling internationally, please book your flight to El Dorado International Airport (BOG) in Bogotá, Colombia. Bogotá is the country's largest international gateway and offers direct flights from many cities across North America, Europe, and Latin America."
				]
			},
			{
				heading: 'Passport & Visa Information',
				level: 4,
				paragraphs: [
					'Please ensure your passport is valid for at least six months beyond your date of entry into Colombia.',
					'Many nationalities, including travelers from the United States, Ireland, the United Kingdom, and most European Union countries, do not require a tourist visa for short visits. However, entry requirements can change, so we encourage all guests to verify the latest requirements based on their nationality before traveling.'
				]
			},
			{
				heading: 'Customs at BOG',
				level: 4,
				paragraphs: [
					'It is a mandatory requirement for all travelers entering Colombia to obtain a Check-MIG Colombia form. The Check MIG form is Colombia\u2019s version of a health declaration form, which requires all visitors to complete it before arrival.',
					'Upon arriving you\u2019ll be shuffled to the customs line which can take anywhere from 30 mins to 2 hrs. depending on the air traffic. The customs officer will view your CheckMIG form, make sure to have it ready.'
				],
				links: [{ label: 'Check-MIG', href: 'https://apps.migracioncolombia.gov.co/pre-registro/public/preregistro.jsf' }]
			},
			{
				heading: 'Transportation in Bogotá',
				level: 4,
				paragraphs: [
					'Bogotá offers a variety of transportation options, including official airport taxis, ride-share services such as Uber, and private transportation. Although in general Colombia is a safe country, please take extra precautions and **DO NOT hail a cab off the street**.'
				],
				children: [
					{
						heading: 'UBER',
						level: 6,
						paragraphs: [
							'Uber works like it does anywhere else and is incredibly cheap. In Colombia, Uber drivers prefer that the front passenger seat is taken first and then passengers can board the back.'
						]
					},
					{
						heading: 'Hotel Taxi Cab',
						level: 6,
						paragraphs: [
							'Work with your hotel to schedule a cab for you. You can also take an official taxi from within the airport to your hotel destination.'
						]
					},
					{
						heading: 'Hotel Shuttle',
						level: 6,
						paragraphs: [
							'Inquire with your hotel about the shuttles available to and from your Bogotá hotel and the BOG airport.'
						]
					}
				]
			},
			{
				heading: 'Transportation to Villa de Leyva',
				level: 4,
				paragraphs: [
					'We will be providing complimentary transportation from Bogotá to Villa de Leyva and back for wedding guests.',
					'The journey is approximately 3 hours by private bus, and we hope you\'ll enjoy the beautiful scenery along the way while traveling together with family and friends.',
					'If you reside in Bogotá and have access to a vehicle, we kindly ask that you drive directly to Villa de Leyva instead of using the provided transportation. Thank you for your cooperation!',
					`For guests whose travel itinerary does not align with the scheduled shuttle times, we recommend arranging private transportation. Please contact ${f('+57 310 555 0198')} for additional information and recommendations.`
				]
			}
		]
	},
	'/about-colombia/': {
		type: 'colombia',
		title: 'About Colombia',
		intro: [
			'Thank you so much for coming all the way here. It means the world to us that you have travelled so far to celebrate our love!',
			"Welcome to beautiful Colombia, the world's second most biodiverse country, where breathtaking landscapes, vibrant culture, and warm hospitality await you!",
			'Your journey begins in Bogotá, our vibrant capital city, where we will provide travelling options to the picturesque town of Villa de Leyva, Boyacá, the beautiful setting for our wedding celebration.',
			"Although our wedding weekend will be centered in Villa de Leyva, we hope you'll have the opportunity to discover more of Colombia during your visit. To help you make the most of your trip, we've included recommendations for the destinations you'll experience with us, as well as a few of our favorite places throughout the country.",
			"Whether you're drawn to colonial towns, lush mountains, Caribbean beaches, or world-renowned coffee regions, Colombia offers something for everyone. We can't wait for you to experience the warmth, beauty, and diversity of the country that welcomed Caro into this world!"
		],
		cities: [
			{
				heading: 'Bogotá',
				scriptHeading: true,
				paragraphs: [
					"Bogotá is a high-altitude metropolis nestled in the Andes Mountains (8,660 feet above sea level) and the vibrant capital of Colombia, offering a captivating blend of rich history, cultural diversity, and breathtaking natural landscapes. If you have extra time before or after the wedding, we highly recommend exploring some of Bogotá's highlights. Please see our Recommendations section for things to do in Bogotá.",
					"In Bogotá, the average low temperatures range from 7°C to 10°C (45°F to 50°F), while daytime highs typically range from 14°C to 19°C (57°F to 66°F). Due to its high altitude, Bogotá’s weather can change quickly, so it’s a good idea to dress in layers and be prepared for variations."
				],
				image: { src: '/images/bogota.jpg', alt: 'Bogotá', aspect: 'portrait' }
			},
			{
				heading: 'Villa de Leyva',
				scriptHeading: true,
				paragraphs: [
					"Nestled in the mountains of the Boyacá department (state), Villa de Leyva is one of Colombia's most charming and well-preserved colonial towns, where our wedding will take place. Founded in 1572, its cobblestone streets, whitewashed buildings, and timeless architecture create a setting that feels like stepping back in time. At the heart of the town lies the iconic Plaza Mayor—one of the largest town squares in South America—surrounded by cafés, artisan shops, and historic landmarks. Villa de Leyva is known for local olive oil, wine and leather goods. It's a place where history, nature, and romance come together—making it the perfect destination to celebrate one of the most meaningful weekends of our lives. We can't wait to share this magical town with you.",
					'To see more recommendations about what to do in Villa de Leyva and surroundings, visit Things to do.'
				],
				image: { src: '/images/villa-de-leyva.jpg', alt: 'Villa de Leyva', aspect: 'landscape' }
			},
			{
				heading: 'Cartagena',
				paragraphs: [
					"Cartagena is one of Colombia’s most vibrant coastal destinations, known for its colorful colonial architecture, Caribbean atmosphere, and lively historic walled city filled with plazas, restaurants, and street music. You can spend your days walking through the UNESCO-listed Old Town, visiting the imposing Castillo de San Felipe, relaxing on nearby beaches like Bocagrande or taking a boat trip to the Rosario Islands for clear turquoise water and coral reefs. To get there from Bogotá, the most efficient option is a direct flight, which takes about 1.5 to 2 hours from El Dorado International Airport; multiple airlines operate frequent daily routes."
				],
				image: { src: '/images/cartagena.jpg', alt: 'Cartagena', aspect: 'portrait' }
			},
			{
				heading: 'Santa Marta',
				paragraphs: [
					"Santa Marta is one of Colombia’s most beautiful Caribbean destinations, known for its laid-back beach vibe, warm waters, and access to some of the country’s most stunning natural landscapes. It’s the perfect mix of history and nature: you can explore the historic downtown (one of the oldest cities in South America), relax along nearby beaches like Rodadero or Taganga, or take a short trip into the mountains to reach the breathtaking Tayrona National Natural Park, where jungle meets turquoise sea. To get there from Bogotá, the easiest option is a direct flight to Santa Marta, which takes around 1.5 to 2 hours."
				],
				image: { src: '/images/santa-marta.jpg', alt: 'Santa Marta', aspect: 'portrait' }
			},
			{
				heading: 'Medellín',
				paragraphs: [
					'Medellín, known as the “City of Eternal Spring,” is one of Colombia’s most dynamic and innovative destinations, offering a perfect mix of culture, nightlife, and mountain scenery. Set in the Aburrá Valley, it’s famous for its year-round pleasant weather, vibrant neighborhoods like El Poblado and Laureles, and its transformation into a hub of design, art, and technology. Visitors can ride the iconic cable cars over the hillside communities, explore Plaza Botero and the Museum of Antioquia, or take day trips to nearby gems like Guatapé and the striking El Peñol rock. To get there from Bogotá, the fastest and most convenient option is a direct flight, which takes about 1 hour.'
				],
				image: { src: '/images/medellin-1.jpg', alt: 'Medellín', aspect: 'portrait' }
			},
			{
				heading: 'Eje Cafetero',
				paragraphs: [
					"The Eje Cafetero, or Coffee Region, is one of the most scenic and charming areas of Colombia, famous for its rolling green hills, colonial-style towns, and coffee plantations. It’s best explored through its picturesque towns like Salento, known for its colorful streets and access to the stunning Cocora Valley, home to the tallest wax palm trees in the world. Nearby, Manizales offers breathtaking mountain views and hot springs, while Filandia is a quieter, equally colorful alternative to Salento with artisanal shops and beautiful viewpoints.",
					'The Eje Cafetero is very accessible from Bogotá, and the most convenient option is a direct flight to the main regional airports in Manizales or Armenia, which take about 1 hour. From any of these cities, you can easily reach nearby coffee towns like Salento or Filandia by car or shared jeep (around 30 minutes to 1.5 hours depending on the destination).'
				],
				image: { src: '/images/eje-cafetero.jpg', alt: 'Eje Cafetero', aspect: 'portrait' }
			},
			{
				heading: 'The Amazon Rainforest',
				paragraphs: [
					'Amazon Rainforest in Colombia is one of the most remote and biodiverse regions on the planet, offering a completely different experience from the country’s cities and coastal destinations. Centered around the small jungle gateway town of Leticia, the region sits at the triple border of Colombia, Peru, and Brazil and is only accessible by air or river, which helps preserve its untouched, immersive feel. From Leticia, travelers can take guided boat trips along the Amazon River, spot pink river dolphins, visit indigenous communities, hike through dense jungle with expert guides, and experience incredible wildlife including monkeys, exotic birds, and unique plant species. To get there from Bogotá, the only option is a direct flight to Leticia, which takes about 2 hours—there are no road connections.',
					'Visiting the Amazon Rainforest is incredible, but it does require some real preparation because conditions are very different from typical travel destinations and certain vaccines are required. If you’re interested in exploring the Amazon, please let us know to help you find certified local guides.'
				],
				image: { src: '/images/amazon.jpg', alt: 'Amazon Rainforest', aspect: 'square' }
			}
		]
	},
	'/food-and-drink/': {
		type: 'sections',
		title: 'Food and Drink',
		intro: ['What must I try while visiting Colombia?'],
		sections: [
			{
				heading: 'Fruits',
				level: 4,
				paragraphs: [
					'Colombia is one of the most fruit-diverse countries in the world and many of those fruits only grow here! Caro’s personal recommendations are:'
				],
				list: [
					'Lulo (citrusy, tangy — used in juices)',
					'Guanábana (creamy tropical fruit, often in smoothies)',
					'Feijoa',
					'Chontaduro (salty, starchy fruit, often eaten with honey or salt)',
					'Granadilla',
					'Uchuva (golden berry)'
				]
			},
			{
				heading: 'Traditional Cuisine',
				level: 4,
				list: [
					'Ajiaco santafereño: iconic Bogotá soup with chicken, 3 types of potatoes, corn, capers, and cream',
					'Sancocho de gallina: chicken soup with potatoes, yuca and green plantains',
					'Caldo de costilla: beef rib broth, typically eaten for breakfast with rice',
					'Tamales tolimenses: wrapped in banana leaves, filled with pork, chicken, chickpeas, and corn dough',
					'Arepa boyacense style: grilled corn cakes with cheese (simple but essential)',
					'Chocolate completo: hot chocolate served with cheese, bread, and almojábanas (yes, you dip the cheese)',
					'Almojábanas and pandebono: cheesy bread rolls, perfect with coffee',
					'Longaniza Boyacense: local sausage, often grilled and served with arepa or potatoes',
					'Fresh fruit juices (jugos naturales) — try lulo, guanábana, maracuyá, mora. In Colombia, juices are offered with either milk or water.'
				]
			},
			{
				heading: 'And of course, coffee.',
				level: 4
			}
		]
	},
	'/things-to-do/': {
		type: 'attractions',
		title: 'Things to do',
		intro: [
			'We’ve have highlighted some of the best experiences in Bogotá and Villa de Leyva below. We hope you find the time to explore these recommendations during your trip.',
			'While our suggestions focus specifically on Bogotá and Villa de Leyva, if your schedule allows, we highly recommend venturing into other cities across the country for a more comprehensive Colombian experience.',
			'Enjoy your journey!'
		],
		groups: [
			{
				heading: 'Bogotá',
				attractions: [
					{
						heading: 'La Candelaria Neighborhood',
						level: 5,
						paragraphs: [],
						links: [
							{
								label: 'Guide to La Candelaria',
								href: 'https://elrinconcolombiano.com/guia-completa-para-visitar-el-barrio-la-candelaria-de-bogota/'
							}
						]
					},
					{
						heading: 'Monserrate',
						level: 5,
						paragraphs: [
							'Ride the cable car or funicular to the top of Monserrate for breathtaking views of the city.'
						],
						links: [{ label: 'Monserrate', href: 'https://monserrate.co/en/' }]
					},
					{
						heading: 'Gold Museum (Museo del Oro)',
						level: 5,
						paragraphs: [
							'Visit the world-famous Gold Museum, home to the largest collection of pre-Hispanic gold artifacts in the world.'
						],
						links: [
							{
								label: 'Museo del Oro',
								href: 'https://www.visitingbogota.com/en/museo-del-oro/'
							}
						]
					},
					{
						heading: 'Catedral de Sal de Zipaquirá',
						level: 5,
						paragraphs: [
							'On your way out of Bogotá, a stop at the Salt Cathedral is an unforgettable addition. Located about 1–1.5 hours north of the city, this extraordinary underground cathedral is carved deep inside a working salt mine.'
						],
						links: [{ label: 'Catedral de Sal', href: 'https://www.catedraldesal.gov.co/' }]
					}
				]
			},
			{
				heading: 'Villa de Leyva',
				intro: [
					'Also known for its peaceful atmosphere, stunning natural landscapes, and rich cultural heritage, Villa de Leyva offers the perfect blend of history, adventure, and relaxation.'
				],
				attractions: [
					{
						heading: 'In town',
						level: 5,
						paragraphs: [
							'Wander through its massive cobblestone main square, visit the Paleontological Museum and Chocolate Museum, explore colonial streets lined with whitewashed buildings, and enjoy slow afternoons in cafés and artisan shops.'
						],
						links: [
							{
								label: 'Paleontological Museum',
								href: 'https://ciencias.bogota.unal.edu.co/museos_y_centros/museo_paleontologico_de_villa_de_leyva/'
							}
						]
					},
					{
						heading: 'Vineyards',
						level: 5,
						paragraphs: ['Vineyard experiences at local wineries.'],
						links: [
							{ label: 'Viñedo Ain Karim', href: 'https://ainkarim.co/' },
							{ label: 'Viñedo Umaña Dajud', href: 'https://www.umanadajud.com/' }
						]
					},
					{
						heading: 'Casa Terracota',
						level: 5,
						paragraphs: [
							'A home designed by architect Octavio Mendoza that seems straight out of a fairy tale. With its organic shape and terracotta hue, the house blends perfectly with the surrounding landscape.'
						],
						links: [{ label: 'Casa Terracota', href: 'https://casaterracota.com/en/casa-terracotta/' }]
					},
					{
						heading: 'Just outside town',
						level: 5,
						paragraphs: [],
						links: [
							{ label: 'Pozos Azules', href: 'https://pozosazules.com.co/' },
							{ label: 'Hot Springs', href: 'https://termalesdevilladeleyva.com/' },
							{ label: 'Aventura Park', href: 'http://www.aventuraparkvilladeleyva.com/segundo-inicio.html' },
							{ label: 'ATV & Buggy Adventures', href: 'https://cuatrimotosvilladeleyva.com/' },
							{ label: 'Granja de Avestruces', href: 'https://www.espexoticas.com.co/' }
						]
					}
				]
			},
			{
				heading: 'Ráquira',
				intro: [
					'This town is perfect for shopping handmade ceramics and colorful crafts.'
				],
				links: [{ label: 'Pueblito de Barro', href: 'https://www.pueblitodebarro.com/' }],
				attractions: []
			}
		]
	},
	'/hotels/': {
		type: 'listings',
		title: 'Hotels',
		intro: [
			'We want to ensure that your stay is as smooth and easy as possible. Below, we are recommending hotels in Villa de Leyva that are in convenient areas for activities and our transportation logistics.',
			'You can also find more options in [Booking](https://www.booking.com) or [Airbnb](https://www.airbnb.com). You can coordinate with friends and family to rent an entire apartment/house for significantly cheaper.'
		],
		groups: [
			{
				heading: 'Hotels in Villa de Leyva',
				intro: [
					'We recommend staying walking distance from the plaza, as the pick-up and drop-off spots will be there. If you stay outside, you’ll likely need a vehicle to get around.'
				],
				tiers: [
					{
						price: '$$',
						items: [
							{ name: 'Sie Casa Hotel', href: 'https://siecasahotel.com/sie-casahotel/' },
							{
								name: 'Casa Boutique Villa de Leyva',
								href: 'https://www.casaboutiquevilladeleyva.com/?lang=es'
							},
							{
								name: 'Hotel Boutique La Española',
								href: 'https://www.hotelboutiquelaespanola.com/'
							},
							{ name: 'Hotel Plaza Mayor', href: 'https://www.hotelplazamayorvilladeleyva.com/' },
							{ name: 'Maria Bonita Hotel', href: 'https://www.mariabonitahoteles.com/' },
							{ name: 'Casa Terra', href: 'https://casa-terra.hotels-villa-de-leyva.com/es/' },
							{
								name: 'Airbnb',
								href: 'https://www.airbnb.com/s/Villa-de-Leyva--Boyac%C3%A1--Colombia/homes?place_id=ChIJGaF4PA7XQY4R3ZMRZnhrRGM&search_type=unknown&refinement_paths%5B%5D=%2Fhomes&acp_id=44e51621-a6ca-4e8f-95d3-9965a792afd0&date_picker_type=flexible_dates&checkin=2027-07-02&checkout=2027-07-06&query=Villa%20de%20Leyva%2C%20Boyac%C3%A1%2C%20Colombia&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-08-01&monthly_length=3&monthly_end_date=2026-11-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=4&channel=EXPLORE&source=structured_search_input_header'
							}
						]
					},
					{
						price: '$$$',
						items: [
							{
								name: 'Campanario de La Villa',
								href: 'https://www.hotelcampanariodelavilla.com/'
							},
							{ name: 'La Corada', href: 'https://www.lacorada.com/' },
							{ name: 'Casa Real', href: 'https://www.villadeleyvahotelcr.com/en/' },
							{ name: 'Hotel El Giro', href: 'https://elgiro.com.co/reservaciones/' },
							{ name: 'Casa del Árbol', href: 'https://hotellacasadelarbol.com/' },
							{ name: 'Hotel Casa Alcestre', href: 'https://www.alcestre.com/' }
						]
					}
				]
			}
		]
	},

	'/restaurants/': {
		type: 'attractions',
		title: 'Restaurants',
		intro: [],
		groups: [
			{
				heading: 'Villa de Leyva',
				links: [
					{ label: 'El Atico', href: 'https://www.instagram.com/centroelatico' },
					{ label: 'El Patio', href: 'https://www.instagram.com/elpatiovilladeleyva' },
					{ label: 'Casa San Pedro', href: 'https://casasanpedro.com/' },
					{ label: 'Bombón Cocina Divina', href: 'https://www.instagram.com/bombondivinacocina' },
					{ label: 'Chuska Cocina', href: 'https://www.instagram.com/chuskacocina/' },
					{ label: 'Museo del Chocolate', href: 'https://museodelchocolate.com.co/' },
					{
						label: 'Bogota Beer Company (Traditional Colombian Brewery)',
						href: 'https://www.tripadvisor.com/Restaurant_Review-g676524-d15670431-Reviews-BBC_Cerveceria_Bodega_Villa_de_Leyva-Villa_de_Leyva_Boyaca_Department.html'
					}
				]
			}
		]
	},

	'/faqs/': {
		type: 'faq',
		title: 'FAQs',
		items: [
			{
				question: 'Is it safe to travel to Colombia?',
				paragraphs: [
					'Colombia has become an increasingly popular travel destination and is generally very welcoming to tourists. As with any international travel, we recommend practicing standard travel safety:',
					'Bogotá and Villa de Leyva both have strong tourism infrastructure and are considered safe for visitors. We want you to feel completely at ease during your time in Colombia. This is a warm, welcoming country filled with incredible people, and we are here to make your experience as smooth and enjoyable as possible.'
				],
				list: [
					'Stay aware of your surroundings in busy areas.',
					'Keep bags and personal belongings in sight at all times.',
					'Avoid displaying valuables such as expensive jewelry or large amounts of cash.',
					'Use official taxis or trusted ride-sharing services.',
					'Stick to well-traveled and recommended areas, especially at night.'
				]
			},
			{
				question: 'Pro tips when visiting Colombia',
				list: [
					'Always ask prices in advance; local market prices are often negotiable.',
					'“Rappi” is the Colombia version of UberEats and the main delivery app for food and essentials.',
					'In Bogotá or any other big city, avoid using your phone openly in busy areas (for Villa de Leyva and small towns it is fine).',
					'Book tours in advance or through your hotel when possible.',
					'**DO NOT hail a cab off the street.**',
					'When using Uber or any other transportation service, please be gentle when closing car doors.',
					'A simple “Por favor” (please) and “Gracias” (thank you) is always appreciated.',
					'Tipping in Colombia is appreciated but not expected in the same way as in the U.S. Some restaurants often include a 10% optional service charge (“propina”) in the check.',
					'Emergency number in Colombia: 112.'
				]
			},
			{
				question: 'How do I get to the venue?',
				paragraphs: [`Complimentary shuttle from Plaza Mayor to Casa de Buganvilias (~${f('15 minutes')}). Exact pickup times shared the week of the wedding.`]
			},
			{
				question: 'When do I need to RSVP?',
				paragraphs: [`Please RSVP by ${f('May 15, 2027')} through this website.`]
			},
			{
				question: 'Where to stay?',
				paragraphs: [
					'We have provided a list of hotels and accommodations. Please check the recommendations section.'
				],
				links: [{ label: 'Hotels', href: '/hotels/' }]
			},
			{
				question: 'What’s the local currency?',
				paragraphs: [
					'Colombia uses the Colombian Peso (COP).',
					'Credit cards are widely accepted in cities, but it’s helpful to carry some cash, especially in small towns. Visa and Mastercard are widely accepted. Amex is less common.',
					'ATMs are readily available in Bogotá and Villa de Leyva but we recommend that you exchange some money at the airport beforehand. However, don’t exchange all your money at the airport, as exchange rates are often less favorable.'
				]
			},
			{
				question: 'What’s the weather in Colombia?',
				paragraphs: [
					"Colombia's mountainous landscape makes the weather difficult to predict, and weather apps are often inaccurate. We recommend packing layers and being prepared for sunshine, cooler temperatures, and the occasional rain shower, all in the same day!",
					'Villa de Leyva enjoys mild spring-like temperatures year-round. Expect daytime temperatures around 65–72°F (18–22°C) and cooler evenings around 50–55°F (10–13°C). We recommend bringing a light jacket or sweater, especially for the evening.'
				]
			},
			{
				question: 'Altitude notice',
				paragraphs: [
					'Bogotá sits at 8,660 ft (2,640 m) above sea level. Some visitors may experience mild altitude symptoms such as shortness of breath or headaches. Stay hydrated, avoid strenuous activity on your first day, and take it easy if needed.'
				]
			},
			{
				question: 'What should I pack?',
				list: [
					'The Colombian sun is much stronger than many visitors expect. Even on cool or cloudy days, UV exposure can be intense. Bring sunscreen, sunglasses, and a hat.',
					'Bring comfortable walking shoes — Villa de Leyva is known for cobblestone streets.',
					'Colombia uses 110V electricity with Type A and Type B plugs (the same as the United States and Canada). Guests traveling from Europe or other regions will need a plug adapter.'
				]
			},
			{
				question: 'Can I bring kids?',
				paragraphs: [
					'While we adore celebrating with children, we are only able to accommodate the children who are specifically invited. If you have any doubts check in with the groom or bride.'
				]
			},
			{
				question: 'What’s the dress code?',
				paragraphs: [
					'Garden formal attire.',
					'We kindly ask guests to please avoid wearing white or cream-colored attire.',
					'Our dinner will be outdoors under the open sky, so we recommend bringing a light jacket or shawl for the evening.',
					'For the ladies, we recommend wearing shoes or heels that are comfortable to walk in on cobblestone.'
				]
			},
			{
				question: 'Can I bring a plus one?',
				paragraphs: [
					'Due to limited space, we are only able to accommodate guests formally invited on your wedding invitation. If you have a plus one, it will be listed on your wedding invite and if you have any doubts check in with the groom or bride. Thank you for understanding!'
				]
			}
		]
	},
	/* Spanish pages */
	'/es/': {
		type: 'home',
		title: 'INICIO',
		hero: {
			src: '/images/hero.jpg',
			alt: 'Fred y Caro',
			aspect: 'landscape'
		},
		paragraphs: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			`Duis aute irure dolor in reprehenderit. Confirma asistencia en RSVP antes del ${f('15 de mayo de 2027')}.`
		],
		countdownTarget: siteMeta.countdownTarget,
		details: {
			date: '3 de julio de 2027',
			time: '3:00 PM',
			venue: 'Casa de Buganvilias, Villa de Leyva'
		}
	},
	'/es/our-story/': {
		type: 'story',
		title: 'Nuestra Historia',
		sections: [
			{
				heading: 'Lorem ipsum dolor sit amet...',
				paragraphs: [
					'... consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
					'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
					'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
				],
				images: storyCarousel
			}
		]
	},
	'/es/rsvp/': {
		type: 'rsvp',
		title: 'RSVP',
		intro: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
		],
		fields: [
			{ name: 'name', label: 'Nombre', type: 'text', placeholder: 'Nombre', required: true },
			{ name: 'email', label: 'Correo', type: 'email', placeholder: 'Correo', required: true },
			{
				name: 'phone',
				label: 'Teléfono (+código de país)',
				type: 'tel',
				placeholder: 'Teléfono',
				required: true
			},
			{
				name: 'attendWedding',
				label: '¿Puedes asistir a la boda?',
				type: 'select',
				options: ['Sí', 'No'],
				required: true
			},
			{
				name: 'attendWelcome',
				label: '¿Asistirás a la noche de bienvenida?',
				type: 'select',
				options: ['Sí', 'No'],
				required: true
			},
			{
				name: 'transportBogota',
				label: '¿Necesitarás transporte de Bogotá a Villa de Leyva y de regreso?',
				type: 'select',
				options: ['Sí', 'No'],
				required: true
			},
			{
				name: 'transportCeremony',
				label: '¿Necesitarás transporte de Villa de Leyva al lugar de la ceremonia: Casa Buganvilia?',
				type: 'select',
				options: ['Sí', 'No'],
				required: true
			},
			{
				name: 'dietary',
				label: '¿Alguna restricción alimentaria?',
				type: 'textarea',
				required: true
			},
			{
				name: 'songs',
				label: '¿Canciones para bailar?',
				type: 'textarea',
				required: true
			}
		],
		submitLabel: 'Enviar',
		submitMessage: '¡Gracias! Hemos recibido tu confirmación.'
	},
	'/es/schedule/': {
		type: 'schedule',
		title: 'Horario',
		mapNote: 'Agregaremos un mapa más cerca de la fecha.',
		days: [
			{
				date: 'Viernes, 2 de julio de 2027',
				events: [
					{
						title: 'Cena de bienvenida',
						paragraphs: [
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
							`Hora: ${f('7:00 PM')} · Lugar: ${f('zona Plaza Mayor, Villa de Leyva')}.`
						]
					}
				]
			},
			{
				date: 'Sábado, 3 de julio de 2027',
				events: [
					{
						title: 'Ceremonia, cena y fiesta | 3:00 PM',
						paragraphs: [
							'Lugar: Casa de Buganvilias, Villa de Leyva',
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
						]
					}
				]
			}
		]
	},
	'/es/travel-information/': {
		type: 'sections',
		title: 'Información de viaje',
		intro: [
			'¡Estamos muy emocionados de celebrar con ustedes en Colombia! Aquí encontrarán información útil para que su viaje sea lo más sencillo posible.'
		],
		sections: [
			{
				heading: 'Vuelos a Colombia',
				level: 4,
				paragraphs: [
					'Si viajan internacionalmente, reserven su vuelo al Aeropuerto Internacional El Dorado (BOG) en Bogotá, Colombia. Bogotá es la principal puerta de entrada internacional del país y ofrece vuelos directos desde muchas ciudades de Norteamérica, Europa y Latinoamérica.'
				]
			},
			{
				heading: 'Pasaporte y visa',
				level: 4,
				paragraphs: [
					'Asegúrense de que su pasaporte sea válido por al menos seis meses después de la fecha de ingreso a Colombia.',
					'Muchas nacionalidades, incluyendo viajeros de Estados Unidos, Irlanda, Reino Unido y la mayoría de países de la Unión Europea, no requieren visa de turismo para visitas cortas. Sin embargo, los requisitos de entrada pueden cambiar, así que les recomendamos verificar la información más actualizada según su nacionalidad antes de viajar.'
				]
			},
			{
				heading: 'Aduana en el BOG',
				level: 4,
				paragraphs: [
					'Es obligatorio para todos los viajeros que ingresan a Colombia diligenciar el formulario Check-MIG. El Check-MIG es la versión colombiana de una declaración de salud, y todos los visitantes deben completarlo antes de llegar.',
					'Al llegar, pasarán a la fila de migración, que puede tardar entre 30 minutos y 2 horas dependiendo del tráfico aéreo. El oficial de migración revisará su formulario Check-MIG, así que tengan listo el comprobante.'
				],
				links: [{ label: 'Check-MIG', href: 'https://apps.migracioncolombia.gov.co/pre-registro/public/preregistro.jsf' }]
			},
			{
				heading: 'Transporte en Bogotá',
				level: 4,
				paragraphs: [
					'Bogotá ofrece una variedad de opciones de transporte, incluyendo taxis oficiales del aeropuerto, servicios de transporte privado como Uber, y transporte privado. Aunque Colombia es en general un país seguro, tomen precauciones adicionales y NO tomen un taxi en la calle.'
				],
				children: [
					{
						heading: 'UBER',
						level: 6,
						paragraphs: [
							'Uber funciona igual que en cualquier otro lugar y es muy económico. En Colombia, los conductores de Uber prefieren que el asiento delantero se ocupe primero y luego los pasajeros suban a la parte trasera.'
						]
					},
					{
						heading: 'Taxi del hotel',
						level: 6,
						paragraphs: [
							'Coordinen con su hotel para programar un taxi. También pueden tomar un taxi oficial dentro del aeropuerto hacia su hotel.'
						]
					},
					{
						heading: 'Shuttle del hotel',
						level: 6,
						paragraphs: [
							'Consulten con su hotel sobre los shuttles disponibles hacia y desde su hotel en Bogotá y el aeropuerto BOG.'
						]
					}
				]
			},
			{
				heading: 'Transporte a Villa de Leyva',
				level: 4,
				paragraphs: [
					'Ofreceremos transporte gratuito de Bogotá a Villa de Leyva y de regreso para los invitados de la boda.',
					'El viaje dura aproximadamente 3 horas en bus privado, y esperamos que disfruten del hermoso paisaje mientras viajan junto a familiares y amigos.',
					'Si viven en Bogotá y tienen vehículo, les pedimos amablemente que conduzcan directamente a Villa de Leyva en lugar de usar el transporte proporcionado. ¡Gracias por su colaboración!',
					`Si su itinerario de viaje no coincide con los horarios programados del bus, les recomendamos organizar transporte privado. Por favor contacten a ${f('+57 310 555 0198')} para más información y recomendaciones.`
				]
			}
		]
	},
	'/es/faqs/': {
		type: 'faq',
		title: 'Preguntas frecuentes',
		items: [
			{
				question: '¿Es seguro viajar a Colombia?',
				paragraphs: [
					'Colombia se ha convertido en un destino turístico cada vez más popular y es generalmente muy acogedor con los visitantes. Como en cualquier viaje internacional, recomendamos precauciones básicas de seguridad.',
					'Bogotá y Villa de Leyva tienen buena infraestructura turística y se consideran seguros para visitantes.'
				]
			},
			{
				question: '¿Cuándo debo confirmar asistencia (RSVP)?',
				paragraphs: [`Por favor confirmen antes del ${f('15 de mayo de 2027')}.`]
			},
			{
				question: '¿Dónde alojarse?',
				paragraphs: ['Hemos preparado una lista de hoteles. Revisen la sección de recomendaciones.'],
				links: [{ label: 'Hoteles', href: '/hotels/' }]
			},
			{
				question: '¿Cuál es la moneda local?',
				paragraphs: [
					'Colombia usa el peso colombiano (COP). Las tarjetas Visa y Mastercard son ampliamente aceptadas; Amex es menos común. Conviene llevar algo de efectivo, especialmente en pueblos pequeños.'
				]
			},
			{
				question: '¿Puedo llevar niños?',
				paragraphs: [
					'Aunque nos encanta celebrar con los niños, solo podemos recibir a los niños que hayan sido específicamente invitados. Ante cualquier duda, consulten con la novia o el novio.'
				]
			},
			{
				question: '¿Cuál es el código de vestimenta?',
				paragraphs: [f('Formal de jardín — cóctel; chaqueta ligera recomendada por la noche.')]
			},
			{
				question: '¿Puedo llevar acompañante?',
				paragraphs: [
					'Debido al espacio limitado, solo podemos recibir a los invitados formalmente indicados en su invitación de boda. Si cuentan con un acompañante, aparecerá especificado en su invitación; ante cualquier duda, consulten con la novia o el novio. ¡Gracias por su comprensión!'
				]
			}
		]
	},
	/* Legacy Spanish URL → same as /es/ home content for bookmarks */
	'/espanol1/': {
		type: 'home',
		title: 'INICIO',
		hero: {
			src: '/images/hero.jpg',
			alt: 'Fred y Caro',
			aspect: 'landscape'
		},
		paragraphs: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		],
		countdownTarget: siteMeta.countdownTarget,
		details: {
			date: '3 de julio de 2027',
			time: '3:00 PM',
			venue: 'Casa de Buganvilias, Villa de Leyva'
		}
	}
};

export function getPage(slug: string): PageContent | undefined {
	const normalized = slug.endsWith('/') || slug === '' ? (slug || '/') : `${slug}/`;
	return pages[normalized === '' ? '/' : normalized];
}

export function getNav(locale: 'en' | 'es' = 'en'): NavItem[] {
	return locale === 'es' ? navigationEs : navigation;
}

export function pageTitle(pageName: string): string {
	return `${pageName} \u2013 ${siteMeta.titleSuffix}`;
}
