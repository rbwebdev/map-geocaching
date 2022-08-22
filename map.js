var lat = 48.852969;
var lon = 2.349903;
var macarte = null;
var markerClusters;
var geocaches = {
'GC5GGW2': { 'lat': 51.012367, 'lon': 2.095383 },
'GC4ZDXX': { 'lat': 44.552050, 'lon': 4.604367 },
'GC9BN4C': { 'lat': 45.481483, 'lon': 4.570967 },
'GC68WDD': { 'lat': 50.637350, 'lon': 3.077583 },
'GC8DV9N': { 'lat': 50.641767, 'lon': 3.084000 },
'GC8WJ9V': { 'lat': 50.705833, 'lon': 3.168967 },
'GC8WNAQ': { 'lat': 50.682817, 'lon': 3.196067 },
'GC693VR': { 'lat': 50.701183, 'lon': 3.0422 },
'GC69G86': { 'lat': 50.700297, 'lon': 3.04349 },
'GC4AQP7': { 'lat': 47.713098, 'lon': -3.38495 },
'GC4ED6A': { 'lat': 47.72062, 'lon': -3.394169 },
'GC7N263': { 'lat': 50.8473339, 'lon': 2.8794105 },
'GC796FW': { 'lat': 50.752583, 'lon': 3.216533 },
'GC796EA': { 'lat': 50.7539, 'lon': 3.216983 },
'GC796E6': { 'lat': 50.755816666, 'lon': 3.218133333 },
'GC796E2': { 'lat': 50.7569, 'lon': 3.215983 },
'GC796DT': { 'lat': 50.759183, 'lon': 3.216167 },
'GC796DK': { 'lat': 50.75925, 'lon': 3.213883 },
'GC796DC': { 'lat': 50.759367, 'lon': 3.211567 },
'GC796D8': { 'lat': 50.756617, 'lon': 3.20805 },
'GC796C3': { 'lat': 50.7558, 'lon': 3.205667 },
'GC796BH': { 'lat': 50.753133, 'lon': 3.2093 },
'GC796AH': { 'lat': 50.7514, 'lon': 3.213933 },
'GC4P15D': { 'lat': 45.87975, 'lon': 6.700833 },
'GC4GVVG': { 'lat': 45.826067, 'lon': 6.693267 },
'GC2F4V0': { 'lat': 46.37355, 'lon': 6.4782 },
'GC1Y014': { 'lat': 45.879317, 'lon': 6.886867 },
'GC710M7': { 'lat': 45.892116, 'lon': 6.7112 },
'GC772NW': { 'lat': 50.68905, 'lon': 3.065933 },
'GC772P0': { 'lat': 50.690767, 'lon': 3.064183 },
'GC772PD': { 'lat': 50.692183, 'lon': 3.066483 },
'GC772PN': { 'lat': 50.693433, 'lon': 3.069633 },
'GC772PR': { 'lat': 50.694633, 'lon': 3.072083 },
'GC772Q4': { 'lat': 50.695017, 'lon': 3.0746 },
'GC772Q8': { 'lat': 50.6952, 'lon': 3.078 },
'GC517XR': { 'lat': 48.85645, 'lon': 2.345833 },
'GC2EFNN': { 'lat': 48.853183, 'lon': 2.352233 },
'GC6YZHW': { 'lat': 50.678583, 'lon': 3.129617 },
'GC6PKET': { 'lat': 50.6738333333333, 'lon': 3.1209 },
'GC6YZJ4': { 'lat': 50.6718, 'lon': 3.12025 },
'GC4X701': { 'lat': 50.961833, 'lon': 1.849583 },
'GC5TTGC': { 'lat': 50.861417, 'lon': 1.693133 },
'GC6AX90': { 'lat': 45.5019, 'lon': 4.565967 },
'GC6AX8M': { 'lat': 45.50015, 'lon': 4.5639833 },
'GC6AX8C': { 'lat': 45.4977, 'lon': 4.561667 },
'GC2487R': { 'lat': 41.364767, 'lon': 2.16675 },
'GC52N0E': { 'lat': 41.40305, 'lon': 2.173367 },
'GC3VYKA': { 'lat': 41.420017, 'lon': 2.147517 },
'GC2Q62T': { 'lat': 41.384867, 'lon': 2.185883 },
'GC67QK1': { 'lat': 41.3876, 'lon': 2.175667 },
'GC4Z22X': { 'lat': 50.58935, 'lon': 3.883833 },
'GC66586': { 'lat': 50.325767, 'lon': 2.78805 },
'GC340N2': { 'lat': 48.890517, 'lon': 2.241917 },
'GC42A0B': { 'lat': 50.46925, 'lon': 2.679633 },
'GC47YZN': { 'lat': 50.639717, 'lon': 1.745917 },
'GC5R44V': { 'lat': 50.46145, 'lon': 1.572183 },
'GC4Y0JQ': { 'lat': 45.491533, 'lon': 4.625617 },
'GC584RD': { 'lat': 45.767086, 'lon': 4.833714 },
'GC11QY5': { 'lat': 45.763583, 'lon': 4.841083 },
'GC1M1PN': { 'lat': 45.760884, 'lon': 4.853231 },
'GC5TR0H': { 'lat': 45.7609, 'lon': 4.856933 },
'GC61XGG': { 'lat': 50.61566, 'lon': 3.12611 },
'GC53NM7': { 'lat': 50.57503, 'lon': 2.77542 },
'GC5G9ZR': { 'lat': 50.66039, 'lon': 2.90204 },
'GC4JYER': { 'lat': 50.63366, 'lon': 3.153667 },
'GC5J9D5': { 'lat': 50.63885, 'lon': 3.14480 },
'GC6476E': { 'lat': 48.92247, 'lon': 2.33375 },
'GC5100G': { 'lat': 50.19889, 'lon': 3.22168 },
'GC50ZZW': { 'lat': 50.20519, 'lon': 3.22366 },
'GC4TBXP': { 'lat': 50.18125, 'lon': 3.18879 },
'GC50V41': { 'lat': 50.18786, 'lon': 3.19834 },
'GC4TBY1': { 'lat': 50.19475, 'lon': 3.20880 },
'GC3GXTF': { 'lat': 51.05615, 'lon': 3.7223 },
'GC3F2XC': { 'lat': 51.05535, 'lon': 3.7246 },
'GC5K0CV': { 'lat': 51.05227, 'lon': 3.72033 },
'GC5TB0Y': { 'lat': 50.79013, 'lon': 2.22603 },
'GC5WRAR': { 'lat': 50.80008, 'lon': 2.22292 },
'GC5TB06': { 'lat': 50.79677, 'lon': 2.22432 },
'GC5T9GF': { 'lat': 50.80275, 'lon': 2.22162 },
'GC62DF4': { 'lat': 50.68245, 'lon': 3.02805 },
'GC60A2A': { 'lat': 50.69318, 'lon': 3.037 },
'GC61ZGZ': { 'lat': 50.68457, 'lon': 3.0222 },
'GC5Y2ZN': { 'lat': 50.68912, 'lon': 3.02962 },
'GC1P6TF': { 'lat': 43.27363, 'lon': 6.64158 },
'GC5G4FR': { 'lat': 43.55687, 'lon': 6.42622 },
'GC5T83D': { 'lat': 43.55508, 'lon': 6.42752 },
'GC5G4FF': { 'lat': 43.55227, 'lon': 6.42993 },
'GC5YZ26': { 'lat': 43.5513, 'lon': 6.43203 },
'GC5G4F6': { 'lat': 43.5501, 'lon': 6.43338 },
'GC5EFFR': { 'lat': 43.54822, 'lon': 6.43595 },
'GC3FTKY': { 'lat': 43.54595, 'lon': 6.43723 },
'GC5V91E': { 'lat': 43.54448, 'lon': 6.43777 },
'GC1CYP1': { 'lat': 43.56212, 'lon': 6.18377 },
'GC1RWZD': { 'lat': 43.59125, 'lon': 6.30197 },
'GC2VA3A': { 'lat': 43.72115, 'lon': 6.99227 },
'GC29G4D': { 'lat': 43.54173, 'lon': 6.46442 },
'GC39QMX': { 'lat': 43.7769, 'lon': 6.24357 },
'GC4ENEJ': { 'lat': 47.02873, 'lon': 4.84085 },
'GC5TVA1': { 'lat': 47.02652, 'lon': 4.8417 },
'GC4VEKN': { 'lat': 50.85568, 'lon': 1.57977 },
'GC485ED': { 'lat': 50.85102, 'lon': 1.58073 },
'GC485DN': { 'lat': 50.84905, 'lon': 1.58272 },
'GC485CY': { 'lat': 50.84705, 'lon': 1.58487 },
'GC485CA': { 'lat': 50.84418, 'lon': 1.5858 },
'GC485BQ': { 'lat': 50.83562, 'lon': 1.58832 },
'GC537PG': { 'lat': 50.83305, 'lon': 1.58955 },
'GC5E5D7': { 'lat': 50.83952, 'lon': 1.59455 },
'GC5RQ7X': { 'lat': 50.78317, 'lon': 2.22952 },
'GC5BMBJ': { 'lat': 50.58077, 'lon': 2.61447 },
'GC5BMB0': { 'lat': 50.58187, 'lon': 2.61208 },
'GC5BMAV': { 'lat': 50.58442, 'lon': 2.6056 },
'GC5BMAP': { 'lat': 50.58512, 'lon': 2.59677 },
'GC5BMAF': { 'lat': 50.58602, 'lon': 2.595 },
'GC5BM9Z': { 'lat': 50.58583, 'lon': 2.59967 },
'GC5BM9R': { 'lat': 50.58352, 'lon': 2.6103 },
'GC5FKVG': { 'lat': 50.82138, 'lon': 3.12528 },
'GC5FKVA': { 'lat': 50.8235, 'lon': 3.12485 },
'GC5FKV1': { 'lat': 50.82673, 'lon': 3.12447 },
'GC5FKTV': { 'lat': 50.8289, 'lon': 3.12415 },
'GC5FKTH': { 'lat': 50.83178, 'lon': 3.12383 },
'GC5FKTA': { 'lat': 50.83497, 'lon': 3.12352 },
'GC5FKT0': { 'lat': 50.83887, 'lon': 3.12295 },
'GC5FKP9': { 'lat': 50.8403, 'lon': 3.12197 },
'GC5FKRK': { 'lat': 50.84335, 'lon': 3.12248 },
'GC5FKPJ': { 'lat': 50.84962, 'lon': 3.12198 },
'GC5FKP3': { 'lat': 50.8528, 'lon': 3.12682 },
'GC5FKNY': { 'lat': 50.85048, 'lon': 3.12625 },
'GC5FKNE': { 'lat': 50.84727, 'lon': 3.12487 },
'GC5FKNQ': { 'lat': 50.84185, 'lon': 3.13287 },
'GC5FKMG': { 'lat': 50.8417, 'lon': 3.14667 },
'GC52DQM': { 'lat': 50.63688, 'lon': 3.07235 },
'GC3WYM1': { 'lat': 50.70763, 'lon': 3.11253 },
'GC32J8E': { 'lat': 50.77718, 'lon': 3.13423 },
'GC5ZJ56': { 'lat': 50.69487, 'lon': 3.04595 },
'GC4JQKX': { 'lat': 50.63358, 'lon': 3.14608 },
'GC5VV70': { 'lat': 50.06938, 'lon': 1.39432 },
'GC5VV6V': { 'lat': 50.06922, 'lon': 1.39688 },
'GC5TJ7H': { 'lat': 50.0684, 'lon': 1.40225 },
'GC5TJ7E': { 'lat': 50.07082, 'lon': 1.40502 },
'GC5VV6M': { 'lat': 50.07347, 'lon': 1.40215 },
'GC5VV69': { 'lat': 50.07397, 'lon': 1.39957 },
'GC5VV5T': { 'lat': 50.07373, 'lon': 1.39675 },
'GC5VV44': { 'lat': 50.0734, 'lon': 1.39368 },
'GC5H4WT': { 'lat': 50.07302, 'lon': 1.39015 },
'GC5H4WC': { 'lat': 50.07135, 'lon': 1.38847 },
'GC5H4W6': { 'lat': 50.07003, 'lon': 1.38727 },
'GC5TJ79': { 'lat': 50.06993, 'lon': 1.3867 },
'GC53ZG3': { 'lat': 50.07453, 'lon': 1.39223 },
'GC5FY7V': { 'lat': 50.06853, 'lon': 1.38737 },
'GC2F7M8': { 'lat': 50.18828, 'lon': 1.6171 },
'GC2TFZK': { 'lat': 50.18872, 'lon': 1.62665 },
'GC4AAX0': { 'lat': 50.18608, 'lon': 1.6256 },
'GC4AAW7': { 'lat': 50.18388, 'lon': 1.62717 },
'GC42NRH': { 'lat': 50.18823, 'lon': 1.63087 },
'GC4GWEB': { 'lat': 50.18462, 'lon': 1.64243 },
'GC5YX81': { 'lat': 50.69952, 'lon': 3.15538 },
'GC438GK': { 'lat': 50.53212, 'lon': 2.63845 },
'GC5WJ3Z': { 'lat': 50.53085, 'lon': 2.6401 },
'GC5YV7C': { 'lat': 50.70232, 'lon': 3.1455 },
'GC4FNKA': { 'lat': 50.18377, 'lon': 3.2568 },
'GC4FNJN': { 'lat': 50.18652, 'lon': 3.2642 },
'GC4FNH9': { 'lat': 50.18558, 'lon': 3.25943 },
'GC48V56': { 'lat': 50.18046, 'lon': 3.2547 },
'GC5V9FG': { 'lat': 50.68423, 'lon': 3.1483 },
'GC5D88F': { 'lat': 50.68247, 'lon': 3.15005 },
'GC5XKKQ': { 'lat': 50.57933, 'lon': 3.18192 },
'GC5XKMX': { 'lat': 50.57838, 'lon': 3.1802 },
'GC5XKND': { 'lat': 50.57702, 'lon': 3.1812 },
'GC5Y02P': { 'lat': 50.575, 'lon': 3.18287 },
'GC5Y02Y': { 'lat': 50.57353, 'lon': 3.18293 },
'GC5Y033': { 'lat': 50.5752, 'lon': 3.17973 },
'GC5Y03G': { 'lat': 50.58052, 'lon': 3.17912 },
'GC5RJTP': { 'lat': 50.5781, 'lon': 3.18445 },
'GC5WQK8': { 'lat': 50.6871, 'lon': 3.13098 },
'GC4JJ5T': { 'lat': 50.17932, 'lon': 3.26228 },
'GC58G1G': { 'lat': 50.66405, 'lon': 3.12527 },
'GC5R1CD': { 'lat': 50.66355, 'lon': 3.14243 },
'GC5QE1D': { 'lat': 50.66612, 'lon': 3.14099 },
'GC4FAY1': { 'lat': 51.30757, 'lon': 4.26885 },
'GC4FXPM': { 'lat': 51.33193, 'lon': 4.25972 },
'GC5DWZR': { 'lat': 51.20907, 'lon': 4.40407 },
'GC156BB': { 'lat': 51.2092, 'lon': 4.40763 },
'GC3EEM6': { 'lat': 51.2122, 'lon': 4.38982 },
'GC5DWWP': { 'lat': 51.20843, 'lon': 4.39342 },
'GC35R4V': { 'lat': 51.22177, 'lon': 4.40923 },
'GC5JMJ5': { 'lat': 51.21603, 'lon': 4.40937 },
'GC2A5VJ': { 'lat': 51.22417, 'lon': 4.39783 },
'GC5DWVF': { 'lat': 51.20587, 'lon': 4.38717 },
'GC14XK4': { 'lat': 51.21613, 'lon': 4.4064 },
'GC5V353': { 'lat': 50.68672, 'lon': 3.10207 },
'GC5FAYH': { 'lat': 50.33728, 'lon': 3.28035 },
'GC5FAYC': { 'lat': 50.32825, 'lon': 3.28075 },
'GC5NAFE': { 'lat': 50.68175, 'lon': 3.23062 },
'GC5JRFZ': { 'lat': 50.6763, 'lon': 3.23848 },
'GC5GXXM': { 'lat': 50.68528, 'lon': 3.2398 },
'GC47H0M': { 'lat': 51.21143, 'lon': 3.23083 },
'GC45DNF': { 'lat': 50.17215, 'lon': 3.234 },
'GC4P493': { 'lat': 50.69142, 'lon': 3.17383 },
'GC59XA9': { 'lat': 48.38847, 'lon': -4.4933 },
'GC1PNV7': { 'lat': 48.38742, 'lon': -4.49015 },
'GC1PFC5': { 'lat': 48.38225, 'lon': -4.49183 },
'GC1PGWB': { 'lat': 48.38305, 'lon': -4.48857 },
'GC57RDE': { 'lat': 50.56335, 'lon': 2.98498 },
'GC57H83': { 'lat': 50.55948, 'lon': 2.99415 },
'GC56DTJ': { 'lat': 50.55495, 'lon': 3.00503 },
'GC56DRZ': { 'lat': 50.5532, 'lon': 3.00863 },
'GC55F16': { 'lat': 50.55152, 'lon': 3.01285 },
'GC55F0X': { 'lat': 50.5507, 'lon': 3.0158 },
'GC55T95': { 'lat': 50.54952, 'lon': 3.01935 },
'GC5458N': { 'lat': 50.74693, 'lon': 3.08645 },
'GC4M8RM': { 'lat': 50.5805, 'lon': 2.6167 },
'GC5BMBR': { 'lat': 50.57597, 'lon': 2.62407 },
'GC5BM93': { 'lat': 50.57928, 'lon': 2.61917 },
'GC4MVRF': { 'lat': 50.5721, 'lon': 2.63367 },
'GC4MVTF': { 'lat': 50.56975, 'lon': 2.63808 },
'GC45EBC': { 'lat': 50.18197, 'lon': 3.23109 },
'GC57PR4': { 'lat': 50.5865, 'lon': 3.1895 },
'GC57NE4': { 'lat': 50.5817, 'lon': 3.18075 },
'GC57NEA': { 'lat': 50.58387, 'lon': 3.18145 },
'GC57NDV': { 'lat': 50.58523, 'lon': 3.18258 },
'GC57NDR': { 'lat': 50.58717, 'lon': 3.18413 },
'GC57NDC': { 'lat': 50.58952, 'lon': 3.18612 },
'GC57PWJ': { 'lat': 50.59262, 'lon': 3.19545 },
'GC57PRW': { 'lat': 50.5942, 'lon': 3.1959 },
'GC57PRF': { 'lat': 50.5937, 'lon': 3.19243 },
'GC57NCV': { 'lat': 50.59125, 'lon': 3.1879 },
'GC57HEG': { 'lat': 50.5918, 'lon': 3.19053 },
'GC57HE6': { 'lat': 50.58967, 'lon': 3.19215 },
'GC57HDK': { 'lat': 50.58838, 'lon': 3.19097 },
'GC57HD7': { 'lat': 50.58467, 'lon': 3.18745 },
'GC57HCZ': { 'lat': 50.58262, 'lon': 3.1851 },
'GC57HCT': { 'lat': 50.57973, 'lon': 3.1845 },
'GC525H6': { 'lat': 50.57895, 'lon': 3.18675 },
'GC47YA5': { 'lat': 51.51905, 'lon': -0.12463 },
'GC5B0DD': { 'lat': 50.71375, 'lon': 3.15698 },
'GC5BQA4': { 'lat': 50.66055, 'lon': 3.15205 },
'GC54WA6': { 'lat': 50.64898, 'lon': 3.15397 },
'GC47W1N': { 'lat': 50.17365, 'lon': 3.23698 },
'GC31Z9C': { 'lat': 50.17788, 'lon': 3.23663 },
'GC5B8RK': { 'lat': 50.68802, 'lon': 3.1391 },
'GC5B8RF': { 'lat': 50.68237, 'lon': 3.13343 },
'GC5B8R5': { 'lat': 50.6783, 'lon': 3.12952 },
'GC5B8QW': { 'lat': 50.6807, 'lon': 3.13067 },
'GC5B5XP': { 'lat': 50.68382, 'lon': 3.13435 },
'GC5B5X1': { 'lat': 50.68668, 'lon': 3.13692 },
'GC5B5WX': { 'lat': 50.68963, 'lon': 3.14027 },
'GC5B5TV': { 'lat': 50.69502, 'lon': 3.14697 },
'GC4M030': { 'lat': 50.61103, 'lon': 3.1316 },
'GC56MC0': { 'lat': 50.64873, 'lon': 3.14075 },
'GC56VVC': { 'lat': 50.64722, 'lon': 3.14552 },
'GC56W2F': { 'lat': 50.64573, 'lon': 3.14538 },
'GC595X7': { 'lat': 50.6707, 'lon': 3.12827 },
'GC47YJH': { 'lat': 50.85225, 'lon': 1.61148 },
'GC534FQ': { 'lat': 50.8601, 'lon': 1.58022 },
'GC4VENC': { 'lat': 50.86542, 'lon': 1.58178 },
'GC326X6': { 'lat': 50.62462, 'lon': 3.04792 },
'GC2Q881': { 'lat': 50.62747, 'lon': 3.06843 },
'GC58RJ9': { 'lat': 50.67192, 'lon': 3.14425 },
'GC595TB': { 'lat': 50.67208, 'lon': 3.14127 },
'GC595V3': { 'lat': 50.67298, 'lon': 3.13877 },
'GC595VP': { 'lat': 50.67458, 'lon': 3.13728 },
'GC595W8': { 'lat': 50.675, 'lon': 3.13405 },
'GC595WN': { 'lat': 50.67367, 'lon': 3.13198 },
'GC595WZ': { 'lat': 50.67188, 'lon': 3.13035 },
'GC2Q899': { 'lat': 50.64173, 'lon': 3.07523 },
'GC4FHMX': { 'lat': 50.6451, 'lon': 3.08255 },
'GC595XJ': { 'lat': 50.67107, 'lon': 3.12505 },
'GC4QGHE': { 'lat': 50.6956, 'lon': 3.13043 },
'GC4YJRG': { 'lat': 50.67707, 'lon': 3.12295 },
'GC4R44B': { 'lat': 50.61955, 'lon': 3.13253 },
};

function initMap() {
  var markers = [];
  var iconBase = 'https://nouvelle-techno.fr/assets/img/codepen/';
  macarte = L.map('map').setView([lat, lon], 11);
  markerClusters = L.markerClusterGroup();
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
  }).addTo(macarte);
  for (geocache in geocaches) {
    var myIcon = L.icon({
      iconUrl: iconBase + "pin.png",
      iconSize: [50, 56],
      iconAnchor: [25, 50],
      popupAnchor: [-3, -76],
    });
    var marker = L.marker([geocaches[geocache].lat, geocaches[geocache].lon], { icon: myIcon });
    marker.bindPopup('<a href="https://www.geocaching.com/geocache/' + geocache + '" target="_blank">' + geocache + '</a>');
    markerClusters.addLayer(marker);
    markers.push(marker);
  }
  var group = new L.featureGroup(markers);
    macarte.fitBounds(group.getBounds().pad(0.5));
  macarte.addLayer(markerClusters);
}
window.onload = function(){
  initMap(); 
};
