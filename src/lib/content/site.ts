import type { NavItem, PageContent, SiteMeta } from './types';

export const siteMeta: SiteMeta = {
	coupleNames: 'Carolina & Fred',
	date: 'September 7, 2024',
	location: 'Villa de Leyva, Boyacá, Colombia',
	titleSuffix: 'Carolina & Fred',
	countdownTarget: '2024-09-07T15:00:00'
};

const placeholderCarousel = [
	{ src: '/placeholders/photo-1.svg', alt: 'Couple photo 1', aspect: 'landscape' as const },
	{ src: '/placeholders/photo-2.svg', alt: 'Couple photo 2', aspect: 'landscape' as const },
	{ src: '/placeholders/photo-3.svg', alt: 'Couple photo 3', aspect: 'portrait' as const }
];

const placeholderStory = [
	{ src: '/placeholders/photo-1.svg', alt: 'Story photo', aspect: 'portrait' as const },
	{ src: '/placeholders/photo-2.svg', alt: 'Story photo', aspect: 'portrait' as const }
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
		href: '/hair-makeup/',
		children: [
			{ label: 'Things to do', href: '/things-to-do/' },
			{ label: 'Hotels', href: '/hotels/' },
			{ label: 'Restaurants', href: '/restaurants/' },
			{ label: 'Hair and Makeup', href: '/hair-makeup/' }
		]
	},
	{ label: 'FAQs', href: '/faqs/' },
	{ label: 'Gifts', href: '/gifts/' },
	{ label: '🇪🇸 Spanish', href: '/espanol1/' }
];

export const navigationEs: NavItem[] = [
	{ label: 'Carolina & Fred', href: '/espanol1/' }
];

export const pages: Record<string, PageContent> = {
	'/': {
		type: 'home',
		title: 'HOME',
		carousel: placeholderCarousel,
		paragraphs: [
			'We are absolutely thrilled to share this enchanting weekend with you. The air in Villa de Leyva holds a unique enchantment, and we can\u2019t fathom commencing our lifelong journey together anywhere else but here, in your company. Despite the distance for most of our guests, we\u2019ve spared no effort to make the costs manageable and the journey convenient, ensuring that this will be an unforgettable, fairy-tale weekend that will live in our hearts for a lifetime.',
			'Given the location and logistics of the wedding, we kindly request your RSVP by June 15 through the RSVP tab.'
		],
		countdownTarget: siteMeta.countdownTarget,
		hashtag: {
			title: '#FredIsLuckyGuy',
			paragraphs: [
				'Help us share and relate this great day with images.',
				'Upload photos of before, during and after the wedding.'
			]
		}
	},
	'/our-story/': {
		type: 'story',
		title: 'Our Story',
		sections: [
			{
				heading: 'I\u2019ve never believed in love at first sight but...',
				paragraphs: [
					'... I feel like I\u2019ve loved Carolina since the day we met. It was after the wedding ceremony of our good friends Tico and Elisa, and the party was in full swing. Salsa music filled the room, and the dance floor was packed. I asked for her number that night; I knew I had to see her again.',
					'Shortly after, we had our first date. And then our second, third, fourth... We talked about what we love, what we hate, our values, dreams, and everything in between. It was April, and Carolina was out of town. This was the first time we had been apart since we started dating, both on two-week vacations on opposite sides of the world. I had stopped at her house to drop off something, and as I was leaving, I turned around and said...',
					'I love you, Carolina, and I can\u2019t wait to be your husband.',
					'Then I got to planning. I didn\u2019t know how I was going to ask her, but I knew it had to be special. She had always mentioned her dream was to visit Paris, and I had already promised to make it happen.',
					'I wasn\u2019t done yet. I conspired with her closest friends and arranged a celebration with our closest family and friends at a local spot, Lagniappe, one of her favorites. We spent that night celebrating with the people we love most.',
					'Every day I wonder, how is it possible that I can love this woman more than I already do? But then I wake up, and that very fact is true. I truly feel like the luckiest man in the world.'
				],
				images: placeholderStory
			}
		]
	},
	'/rsvp/': {
		type: 'rsvp',
		title: 'RSVP',
		intro: [
			'Due to limited space, we are only able to accommodate guests formally invited on your wedding invitation. If you have a plus one, it will be listed on your wedding invite and if you have any doubts check with the bride or groom.',
			'Please RSVP individually for every person attending the wedding.'
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
		submitMessage: 'RSVP submission is not yet connected. Thank you for your interest!'
	},
	'/schedule/': {
		type: 'schedule',
		title: 'Schedule',
		days: [
			{
				date: 'Wednesday, September 4',
				events: [
					{
						title: 'Chiva Bus in Bogota | 7:00 PM',
						paragraphs: [
							'If you arrive early into the city, join the bride & groom for a Chiva ride around the city followed by some bites and drinks at the famous Andres D.C. and night caps at another favorite spot.',
							'Since this is not a formal part of the wedding festivities, let us know you\u2019re interested in coming by clicking here.',
							'The chiva ride has a limit to the first 30 people to sign up! If it fills up, folks are welcome to join us at another stop of the night.'
						],
						links: [{ label: 'here', href: '#' }]
					}
				]
			},
			{
				date: 'Friday, September 6',
				events: [
					{
						title: 'Bus Ride to Villa de Leyva | 10:00 AM \u2013 1:00 PM',
						paragraphs: [
							'Buses will leave from Bogota and travel directly to Villa de Leyva.',
							'The pick-up spot will be updated closer to the date.',
							'We ask that if you reside in Bogota, and own a vehicle, you drive on your own to Villa de Leyva.'
						]
					},
					{
						title: 'Welcome Reception | 8:00 PM \u2013 10:00 PM',
						paragraphs: [
							'Join us for a welcome reception right on the town\u2019s iconic main plaza. Light bites & drinks will be provided.',
							'Note: No kid friendly.',
							'Location: La Oster\u00eda',
							'Attire: Cocktail',
							'* Please refrain from wearing white*',
							'Do you need ideas for what to wear? >> Click Here <<'
						],
						links: [
							{ label: 'La Oster\u00eda', href: '#' },
							{ label: 'Click Here', href: '#' }
						]
					}
				]
			},
			{
				date: 'Saturday, September 7',
				events: [
					{
						title: 'Bus Ride to Casa de Buganvilla | 2:00 PM',
						paragraphs: [
							'Busses will pick up all guests at Colegio Ricaurte.',
							'If you drove into town, there is parking onsite.'
						],
						links: [{ label: 'Colegio Ricaurte', href: '#' }]
					},
					{
						title: 'Wedding Ceremony, Dinner and Party | 3:00 PM \u2013 2:00 AM',
						paragraphs: [
							'Location: Casa de Buganvillas',
							'Attire: Formal Attire',
							'Ladies, please refrain from wearing white, nudes, light pinks, lavender, metallics (gold or silver) and any glitter / shinny attire. If you have any questions, reach out to the bride. Thank you for your cooperation!',
							'Do you need ideas for what to wear? >> Click Here <<',
							'Note: No kid friendly'
						],
						links: [
							{ label: 'Casa de Buganvilias', href: '#' },
							{ label: 'Click Here', href: '#' }
						]
					},
					{
						title: 'Bus Ride to Villa de Leyva | Beginning at 12:00 AM',
						paragraphs: [
							'Buses will depart from Casa de Buganvillas to Villa de Leyva town at 12:00 AM, 1:00 AM and 2:00 AM'
						]
					}
				],
				location: {
					heading: 'Location',
					description: 'How to get to Casa de Buganvilias'
				}
			},
			{
				date: 'Sunday, September 8',
				events: [
					{
						title: 'Return Bus Ride to Bogota | 11:00 AM \u2013 1:00 PM',
						paragraphs: [
							'Buses will leave from Villa de Leyva and travel directly to Bogota.',
							'The schedule and pick-up spot will be updated closer to the date.'
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
			'Our wedding will take place in the town of Villa de Leyva, three hours outside of the city of Bogota.',
			'The best way to get there is to fly into Bogota and take either the bus provided by the bride and groom or book your own private transport.',
			'Please see below for more information!'
		],
		sections: [
			{
				heading: 'FLYING INTO EL DORADO INTERNATIONAL AIRPORT (BOG)',
				level: 5,
				paragraphs: [
					'For those visiting from out-of-town, we recommend you fly into El Dorado International Airport (BOG).'
				],
				children: [
					{
						heading: 'Important Passport Information',
						level: 6,
						paragraphs: [
							'To travel internationally, most airlines require you to have 6 months validity left on your passport. Please check your passport.'
						]
					},
					{
						heading: 'VISAS',
						level: 6,
						paragraphs: [
							'Citizens from the EU, the US, Brazil and a number of other countries do not need a visa to enter Colombia.'
						]
					},
					{
						heading: 'Customs at BOG',
						level: 6,
						paragraphs: [
							'It is a mandatory requirement for all travelers entering Colombia to obtain a Check-MIG Colombia form. The Check MIG form is Colombia\u2019s version of a health declaration form, which requires all visitors to complete it before arrival.',
							'Upon arriving you\u2019ll be shuffled to the customs line which can take anywhere from 30 mins to 2 hrs. depending on the air traffic. The customs officer will view your CheckMIG form, make sure to have it ready.'
						],
						links: [{ label: 'Check-MIG', href: 'https://apps.migracioncolombia.gov.co/pre-registro/public/preregistro.jsf' }]
					}
				]
			},
			{
				heading: 'TRANSPORTATION IN BOGOTA',
				level: 4,
				paragraphs: [
					'Although in general Colombia is a safe country, please take extra precautions and do not hail a cab from the streets. Instead use any of the below options:'
				],
				children: [
					{
						heading: 'UBER',
						level: 6,
						paragraphs: [
							'Uber works like it does in anywhere else. Uber drivers prefer that the front passenger seat is taken first and then passengers can board the back.'
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
							'Inquire with your hotel about the shuttles available to and from your Bogot\u00e1 hotel and the BOG airport.'
						]
					}
				]
			},
			{
				heading: 'TRAVEL TO VILLA DE LEYVA VIA BUS',
				level: 4,
				paragraphs: [
					'The bride and groom are going the extra mile to ensure the comfort and convenience of their guests. We will be providing transportation with a 3-4 hour bus ride. We hope your journey to Villa de Leyva is comfortable and enjoyable!',
					'We ask that if you reside in Bogota, and own a vehicle, you drive on your own to Villa de Leyva. Thank you for your cooperation!',
					'For those guests that will need transportation with a different schedule, we recommend booking private tourism transport at the cost of $150 USD approximately per trip. For more information, send a e-mail to the bride or groom.'
				]
			}
		]
	},
	'/about-colombia/': {
		type: 'sections',
		title: 'About Colombia',
		intro: [
			'We are thrilled to welcome you to Villa de Leyva, Colombia!',
			'Our journey begins in the vibrant capital city, Bogot\u00e1, where we\u2019ll embark on a scenic bus ride to the enchanting town where our wedding will take place. While our wedding festivities will be centered in Villa de Leyva, we encourage you to explore more of this beautiful country.',
			'In addition to providing information about the places you\u2019ll be visiting with us, we\u2019ve also included recommendations for must-see spots beyond our wedding festivities. Colombia truly has so much to offer!'
		],
		sections: [
			{
				heading: 'VILLA DE LEYVA',
				level: 3,
				paragraphs: [
					'Villa de Leyva is a charming colonial town located in the heart of Colombia, known for its stunning beauty and rich history. We hope you are captivated by the well-preserved cobblestone streets, whitewashed buildings, and the picturesque main plaza.',
					'Here, you can immerse yourself in the town\u2019s colonial past, with structures dating back to the 16th century, including the Casa de Nari\u00f1o, where the first Colombian president was born.',
					'Surrounded by beautiful countryside and desert landscapes, Villa de Leyva is the perfect destination for outdoor enthusiasts. You can explore the nearby Iguaque National Park, visit the iconic El F\u00f3sil, and much more.'
				]
			},
			{
				heading: 'BOGOT\u00c1',
				level: 3,
				paragraphs: [
					'Bogot\u00e1, the vibrant capital of Colombia, is a city that offers a captivating blend of rich history, cultural diversity, and breathtaking natural landscapes.',
					'As you explore this high-altitude metropolis nestled in the Andes Mountains, you\u2019ll be greeted by a plethora of experiences. We recommend you take a few days (if you can) to explore all it has to offer.',
					'Bogot\u00e1 also boasts an exciting culinary scene with a wide range of traditional Colombian dishes and international cuisine. For panoramic views of the city, visit Monserrate, a mountaintop sanctuary.',
					'In Bogot\u00e1, the average low temperatures range from 7\u00b0C to 10\u00b0C (45\u00b0F to 50\u00b0F), while daytime highs typically range from 14\u00b0C to 19\u00b0C (57\u00b0F to 66\u00b0F).'
				]
			},
			{
				heading: 'CARTAGENA',
				level: 3,
				paragraphs: [
					'Nestled along the Caribbean coast, Cartagena stands as a pristine example of Spanish colonial architecture and is recognized as a UNESCO World Heritage site.'
				]
			},
			{
				heading: 'SANTA MARTA',
				level: 3,
				paragraphs: [
					'Situated on the Caribbean coast, Santa Marta offers a harmonious blend of history, nature, and beachfront allure.'
				]
			},
			{
				heading: 'BARICHARA AND SANTANDER',
				level: 3,
				paragraphs: [
					'Nestled in the Santander region, Barichara is a beautifully preserved colonial town known for its tranquility and stone-paved streets.'
				]
			},
			{
				heading: 'MEDELLIN',
				level: 3,
				paragraphs: [
					'Medell\u00edn has undergone a remarkable transformation, emerging as a symbol of urban revitalization.'
				]
			},
			{
				heading: 'THE AMAZON RAINFOREST',
				level: 3,
				paragraphs: [
					'Colombia boasts a portion of the expansive Amazon rainforest, accessible through Leticia in the Amazonas Department.'
				]
			},
			{
				heading: 'EJE CAFETERO',
				level: 3,
				paragraphs: [
					'Discover the heart of Colombia in the Coffee Cultural Landscape, \u201cEl Eje Cafetero.\u201d This UNESCO World Heritage region captivates with its rolling hills of coffee plantations.'
				]
			}
		]
	},
	'/things-to-do/': {
		type: 'attractions',
		title: 'Things to do',
		intro: [
			'We\u2019ve have highlighted some of the best experiences in Bogot\u00e1 and Villa de Leyva below. We hope you find the time to explore these recommendations during your trip.',
			'While our suggestions focus specifically on Bogot\u00e1 and Villa de Leyva, if your schedule allows, we highly recommend venturing into other cities across the country for a more comprehensive Colombian experience.',
			'Enjoy your journey!'
		],
		groups: [
			{
				heading: 'BOGOT\u00c1',
				attractions: [
					{
						heading: 'ZONA T',
						level: 5,
						paragraphs: [
							'Zona T is a pedestrianized zone within Zona Rosa, where you can find several trendy restaurants and bars that fill the streets of Bogot\u00e1 at night.',
							'This is a neighborhood to be visited both day and night. With more modern buildings, it is the sophisticated neighborhood of Bogot\u00e1.'
						]
					},
					{
						heading: 'MONSERRATE',
						level: 5,
						paragraphs: [
							'Over time, Cerro de Monserrate has become a cultural symbol of the city, where national and international visitors choose it as a must-see tourist destination in Bogot\u00e1.',
							'Cerro de Monserrate is open 365 days a year with a sanctuary, market, and restaurants on top of this mountain.'
						]
					},
					{
						heading: 'USAQU\u00c9N FLEA MARKET',
						level: 5,
						paragraphs: [
							'An absolute must-visit when visiting the capital. It\u2019s one of the most emblematic happenings of the city.',
							'This street is also filled with delicious restaurants and great bars!'
						]
					},
					{
						heading: 'SALT CATHEDRAL',
						level: 5,
						paragraphs: [
							'A favorite day trip for visitors to Bogot\u00e1 is the city of Zipaquir\u00e1. About 40 kilometers (25 miles) from Bogot\u00e1, Zipaquir\u00e1 is known for its Catedral de Sal\u2014a cathedral built in a salt mine.'
						]
					},
					{
						heading: 'LAKE GUATAVITA',
						level: 5,
						paragraphs: [
							'Lake Guatavita is steeped in cultural history and legend. It is renowned as the site of the El Dorado myth.',
							'Pro tip: the hike up is worth the spectacular views!'
						]
					},
					{
						heading: 'ANDR\u00c9S CARNE DE RES',
						level: 5,
						paragraphs: [
							'A restaurant-cum-nightclub-cum-wonderland, Andr\u00e9s Carne de Res has been a prime destination for diners, drinkers and party-goers since its opening in 1982.'
						]
					}
				]
			},
			{
				heading: 'VILLA DE LEYVA',
				intro: [
					'There are so many activities and places to eat in Villa de Leyva. You\u2019ll find local artisans for crafts and leather goods, coffee shops, museums, art galleries, the church on the square, monastery gifts and more.',
					'You can also enjoy activities such as the traditional chiva, horseback riding and ecological hikes, ATV tours, among others.',
					'For more information, contact the tourism offices:',
					'Gaia Adventure: +57 3213109525',
					'We recommend you work with your hotel to book your transportation for these tours.'
				],
				links: [
					{ label: 'Tourist Directory', href: '#' },
					{ label: '90 Grados Territorio Aventura', href: '#' }
				],
				attractions: [
					{
						heading: 'MUSEO DEL CHOCOLATE',
						level: 5,
						paragraphs: [
							'This Chocolate Museum is not to be confused with the restaurant location of the same name.'
						]
					},
					{
						heading: 'FOSSIL MUSEUM',
						level: 5,
						paragraphs: [
							'Villa De Leyva is known for its abundance in prehistoric sea creature fossils.'
						]
					},
					{
						heading: 'GRANJA DE AVESTRUCES',
						level: 5,
						paragraphs: [
							'Interested in feeding ostriches and pet animals? This is a fun tour for you!'
						]
					},
					{
						heading: 'CASA TERRACOTA',
						level: 5,
						paragraphs: [
							'Terracotta House is a construction project that uses the four elements, earth, air, water and fire, turning baked earth into architecture.'
						]
					},
					{
						heading: 'SANTO ECCE HOMO CONVENT',
						level: 4,
						paragraphs: [
							'The Santo Ecce-Homo of Villa de Leyva is a medieval fortress that stands before a green valley.'
						]
					},
					{
						heading: 'IGUAQUE FLORA AND FAUNA SANCTUARY',
						level: 4,
						paragraphs: [
							'In Iguaque Fauna and Flora Sanctuary, the visitor can find the Sacred Lagoon of Iguaque.'
						]
					},
					{
						heading: 'VINEYARD AIN KARIM',
						level: 5,
						paragraphs: [
							'As a result of its cool temperatures, dry climate, and rich soil, Villa de Leyva has established itself as a wine region.'
						]
					},
					{
						heading: 'PLAZA DE R\u00c1QUIRA',
						level: 5,
						paragraphs: [
							'This is a very colorful ceramics town. A must-visit town near Villa de Leyva.'
						]
					}
				]
			}
		]
	},
	'/hotels/': {
		type: 'listings',
		title: 'Hotels',
		intro: [
			'We want to ensure that your stay is as smooth and easy as possible. Below, we are recommending hotels in Bogota and Villa de Leyva that are in convenient areas for activities and our transportation logistics.',
			'You can also find more options in Booking or Airbnb. You can coordinate with friends and family to rent an entire apartment/house for significantly cheaper.'
		],
		groups: [
			{
				heading: 'HOTELS IN BOGOT\u00c1',
				intro: [
					'We recommend for your stay in Bogota that you stay near or at La Zona T! It is filled with restaurants, incredible shopping, and nightlife. The bus pick-ups will likely be there.'
				],
				links: [
					{ label: 'Booking', href: 'https://www.booking.com' },
					{ label: 'Airbnb', href: 'https://www.airbnb.com' }
				],
				tiers: [
					{
						price: '$',
						items: [{ name: 'Hotel Parque El Virrey', href: '#' }]
					},
					{
						price: '$ $',
						items: [
							{ name: 'B.O.G. Hotel', href: '#' },
							{ name: 'Casa Dann Carlton Hotel & Spa', href: '#' }
						]
					},
					{
						price: '$ $ $',
						items: [
							{ name: 'JW Marriott Hotel Bogota', href: '#' },
							{ name: 'Four Seasons', href: '#' },
							{ name: 'Hilton Bogot\u00e1', href: '#' }
						]
					}
				]
			},
			{
				heading: 'HOTELS IN VILLA DE LEYVA',
				intro: [
					'We recommend staying walking distance from the plaza, as the pick-up and drop-off spots will be there. If you stay outside, you\u2019ll likely need a vehicle to get around.'
				],
				tiers: [
					{
						price: '$',
						items: [
							{ name: 'Sie Casa Hotel', href: '#' },
							{ name: 'Casa Boutique Villa de Leyva', href: '#' },
							{ name: 'Hotel Mes\u00f3n de los Virreyes', href: '#' },
							{ name: 'Hotel Boutique La Espa\u00f1ola', href: '#' },
							{ name: 'Provenzal', href: '#' }
						]
					},
					{
						price: '$$',
						items: [
							{ name: 'Hotel Plaza Mayor', href: '#' },
							{ name: 'Maria Bonita', href: '#' },
							{ name: 'Campanario de La Villa', href: '#' },
							{ name: 'Casa Terra', href: '#' }
						]
					},
					{
						price: '$$$',
						items: [
							{ name: 'La Corada', href: '#' },
							{ name: 'Casa Real', href: '#' },
							{ name: 'Caney Centro', href: '#' },
							{ name: 'Casa del \u00c1rbol', href: '#' },
							{ name: 'Hotel Alcestre', href: '#' }
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
				heading: 'VILLA DE LEYVA',
				attractions: [
					{
						heading: 'BBC \u2013 BODEGA VILLA DE LEYVA',
						level: 5,
						paragraphs: [
							'Want to try a large variety of national Colombian beers? Head over to BBC \u2013 also located in Bogota!'
						]
					},
					{
						heading: 'EL SOLAR DE LA GUACA',
						level: 5,
						paragraphs: [
							'A local favorite restaurant featuring 6 different kitchens, the choice is yours! They feature a musical show that is unique and very diverse!'
						]
					},
					{
						heading: 'BOMBON DIVINA COCINA',
						level: 5,
						paragraphs: [
							'Italian Colombian food and fusions! This spot also features incredible cocktails and cappuccinos.'
						]
					},
					{
						heading: 'MUSEO DEL CHOCOLATE \u2013 RESTAURANTE CACAO',
						level: 5,
						paragraphs: [
							'We recommend ordering a hot chocolate. Don\u2019t forget to drink it like a local by adding melty cheese to your cup (we promise it\u2019s delicious)!',
							'Pro tip: on the menu the cheese is referred to as a \u201cpancho\u201d!'
						]
					},
					{
						heading: 'CHUSKA COCINA',
						level: 5,
						paragraphs: [
							'The food is so fresh, elegant and unique. You can count on a beautiful, quiet atmosphere.'
						]
					},
					{
						heading: 'EL \u00c1TICO',
						level: 5,
						paragraphs: [
							'A large trendy courtyard filled with multiple types of cuisines, wines, smoothies, live music and stores.'
						]
					},
					{
						heading: 'LA GALLETA PASTELER\u00cdA CAF\u00c9',
						level: 5,
						paragraphs: [
							'Milhojas, meaning \u201cthousand sheets\u201d, are desserts made with stacked layers of puff pastry.'
						]
					},
					{
						heading: 'CHOCOLATE BEAN TO BAR',
						level: 5,
						paragraphs: [
							'Yes another chocolate place, it\u2019s never enough.',
							'You can purchase bean-to-bar chocolates with or without sugar and dairy.'
						]
					},
					{
						heading: 'OTHER INCREDIBLE RESTAURANTS',
						level: 5,
						paragraphs: [],
						links: [
							{ label: 'Restaurante Casa San Pedro', href: '#' },
							{ label: 'Restaurante Amore M\u00edo', href: '#' },
							{ label: 'Restaurante El Mercado Municipal', href: '#' },
							{ label: 'Casa Quintero', href: '#' },
							{ label: 'Camale\u00f3n', href: '#' },
							{ label: 'Merc\u00e9', href: '#' },
							{ label: 'Genki', href: '#' },
							{ label: 'El Pescador Pasteler\u00eda', href: '#' },
							{ label: 'La Oster\u00eda', href: '#' },
							{ label: 'Pasteler\u00eda Francesa', href: '#' },
							{ label: 'El Patio', href: '#' }
						]
					}
				]
			}
		]
	},
	'/hair-makeup/': {
		type: 'sections',
		title: 'Hair and Makeup',
		sections: [
			{
				heading: 'Estilos Cris',
				level: 6,
				paragraphs: ['Phone Number: +57 314 331 2838']
			},
			{
				heading: 'Denny Montes',
				level: 6,
				paragraphs: ['Phone number: +57 321 211 5183']
			},
			{
				heading: 'Luxbeauty Sal\u00f3n',
				level: 6,
				paragraphs: [
					'Phone number: +57 314 3783290',
					'Location: Cra. 11 #11-51, Villa de Leyva'
				]
			},
			{
				heading: 'CQ Maquillaje y Est\u00e9tica (Tunja)',
				level: 6,
				paragraphs: ['Phone number: +57 310 699 6351']
			}
		]
	},
	'/faqs/': {
		type: 'faq',
		title: 'FAQs',
		items: [
			{
				question: 'IS IT SAFE TO TRAVEL TO COLOMBIA?',
				list: [
					'Ask in advance for the price of items so that you are not sticker shocked. Pro tip: most times, prices are negotiable in the markets.',
					'Credit cards work well, for the most part AMEX and Visa is accepted in most establishments.',
					'Remember to carry cash (e.g. to pay taxis or tolls). In Colombia, the COP (Colombian Peso) is used as currency.',
					'Be mindful of surroundings and avoid walking with your phone out.',
					'Consider booking tours in advance or via the hotel.',
					'If your cellphone plan does not include international service, purchase a prepaid SIM card for data.',
					'Leave your valuables in the hotel safe.',
					'Always keep your bags and purses in sight.',
					'Order taxis at the designated areas at the airport, at your hotel or via Uber. Do not hail your own cab off the street.',
					'The Colombian version of Ubereats is Rappi. Download the app if you\u2019d like anything delivered to your door.',
					'You can reach the police on 113.'
				],
				paragraphs: [
					'Colombia is generally a safe country to travel in. Here are some \u201cpro-tips\u201d for a smoother trip around Colombia:'
				]
			},
			{
				question: 'SHOULD I VISIT OTHER CITIES IN COLOMBIA?',
				paragraphs: [
					'Absolutely! In fact, we encourage you to extend your stay in Colombia, there is just too much to see! Visit our About Colombia tab for a full list.'
				]
			},
			{
				question: 'ARE KIDS WELCOME?',
				paragraphs: [
					'The little ones are near and dear to our heart. Although our ceremony and reception are not kid friendly.'
				]
			},
			{
				question: 'CAN I BRING A PLUS 1?',
				paragraphs: [
					'Due to limited space, we are only able to accommodate guests formally invited on your wedding invitation. If you have a plus one, it will be listed on your wedding invite.'
				]
			},
			{
				question: 'HOW DO I MAKE RESERVATIONS OR CALL ANYONE WHILE IN OTHER COUNTRY?',
				paragraphs: [
					'Communicating with your hotel, a restaurant, a vendor is so simple! Colombia loves WhatApp and you can download the app and text them.'
				]
			},
			{
				question: 'ARE THE VENUES INDOORS OR OUTDOORS?',
				paragraphs: [
					'Most of our venues will have an indoor / outdoor concept. As always there is a chance of rain but our wedding planner will be prepared in that event!'
				]
			},
			{
				question: 'WHAT SHOULD I WEAR?',
				paragraphs: [
					'Temperature in Villa de Leyva 25\u00b0C during the day, 13\u00b0C at night. We recommend guests bring a jacket or sweater for the evening. The town has cobblestone streets, it is very important to bring shoes that are comfortable for walking.'
				]
			},
			{
				question: 'WHERE CAN I DO MY HAIR AND MAKEUP?',
				paragraphs: ['We have provided a list of hair and make-up artists. Please check the recommendations tab.'],
				links: [{ label: 'recommendations tab', href: '/hair-makeup/' }]
			}
		]
	},
	'/gifts/': {
		type: 'gifts',
		title: 'Gifts',
		paragraphs: [
			'Your presence is enough of a gift to us! If you still would like to give us something, we preferred a bank transfer:'
		],
		bankDetails: [
			{ label: 'Name:', value: 'Carolina & Fred' },
			{ label: 'Bank:', value: 'Bank of America' },
			{ label: 'Account number:', value: 'Contact the couple for details' }
		]
	},
	'/espanol1/': {
		type: 'home',
		title: 'HOME',
		carousel: placeholderCarousel,
		paragraphs: [
			'\u00a1Estamos absolutamente encantados de compartir este encantador fin de semana contigo! Para aquellos que no lo saben, la novia es oriunda de Colombia y su lugar m\u00e1s preciado en su tierra natal es la m\u00e1gica Villa de Leyva.',
			'Dada la ubicaci\u00f3n y la log\u00edstica de la boda, te solicitamos amablemente tu confirmaci\u00f3n de asistencia antes del 15 de junio a trav\u00e9s de la p\u00e1gina RSVP.'
		],
		countdownTarget: siteMeta.countdownTarget,
		hashtag: {
			title: '#FredIsLuckyGuy',
			paragraphs: [
				'Ay\u00fadanos a compartir y relatar con im\u00e1genes este gran d\u00eda.',
				'Sube las fotos del antes, durante y despu\u00e9s de la boda.'
			]
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
