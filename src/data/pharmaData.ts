/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
  products: Product[];
}

const rawData = [
  ["Pfizer", "Comirnaty", "Eliquis", "Prevnar 13", "Lipitor", "Xeljanz", "Zoloft", "Lyrica", "Ibrance", "Diflucan", "Viagra"],
  ["Johnson & Johnson", "Stelara", "Remicade", "Imbruvica", "Darzalex", "Zytiga", "Xarelto", "Invega", "Prezista", "Simponi", "Concerta"],
  ["Roche", "Herceptin", "Avastin", "Rituxan", "Ocrevus", "Perjeta", "Tecentriq", "Actemra", "Lucentis", "Xolair", "Kadcyla"],
  ["Novartis", "Cosentyx", "Gilenya", "Entresto", "Tasigna", "Jakavi", "Sandostatin", "Kisqali", "Promacta", "Zometa", "Afinitor"],
  ["Merck & Co.", "Keytruda", "Gardasil", "Januvia", "Propecia", "Singulair", "Isentress", "Bridion", "Lagevrio", "Zepatier", "Emend"],
  ["AbbVie", "Humira", "Skyrizi", "Rinvoq", "Imbruvica", "Venclexta", "Mavyret", "Creon", "AndroGel", "Lupron", "Duopa"],
  ["Sanofi", "Dupixent", "Lantus", "Aubagio", "Plavix", "Toujeo", "Lovenox", "Praluent", "Soliqua", "Fluzone", "Admelog"],
  ["GlaxoSmithKline", "Augmentin", "Ventolin", "Seretide", "Avamys", "Shingrix", "Bexsero", "Trelegy", "Voltaren", "Panadol", "Zovirax"],
  ["AstraZeneca", "Tagrisso", "Symbicort", "Fasenra", "Farxiga", "Imfinzi", "Brilinta", "Pulmicort", "Crestor", "Calquence", "Enhertu"],
  ["Bristol Myers Squibb", "Opdivo", "Eliquis", "Revlimid", "Yervoy", "Sprycel", "Orencia", "Abecma", "Reblozyl", "Camzyos", "Zeposia"],
  ["Eli Lilly", "Trulicity", "Verzenio", "Taltz", "Jardiance", "Humalog", "Alimta", "Cialis", "Forteo", "Olumiant", "Cyramza"],
  ["Amgen", "Enbrel", "Prolia", "Otezla", "Xgeva", "Neulasta", "Aranesp", "Kyprolis", "Repatha", "Nplate", "Vectibix"],
  ["Takeda Pharmaceutical", "Entyvio", "Vyvanse", "Takecab", "Leuplin", "Gattex", "Ninlaro", "Adcetris", "Alofi", "Natpara", "Trintellix"],
  ["Bayer", "Xarelto", "Eylea", "Stivarga", "Xofigo", "Adempas", "Nexavar", "Kovaltry", "Gadavist", "Mirena", "Yasmin"],
  ["Gilead Sciences", "Biktarvy", "Genvoya", "Descovy", "Odefsey", "Truvada", "Harvoni", "Epclusa", "Veklury", "Yescarta", "Zydelig"],
  ["Biogen", "Tecfidera", "Spinraza", "Tysabri", "Avonex", "Plegridy", "Fampyra", "Vumerity", "Aduhelm", "Rituxan", "Gazyva"],
  ["Regeneron Pharmaceuticals", "Eylea", "Dupixent", "Libtayo", "Praluent", "Kevzara", "Arcalyst", "Ziv-Aflibercept", "Evkeeza", "Inmazeb", "REGEN-COV"],
  ["Teva Pharmaceutical", "Copaxone", "Austedo", "Ajovy", "Bendeka", "Qvar", "ProAir", "Granix", "Lonquex", "AJOVY", "TREANDA"],
  ["Sun Pharma", "Levitra", "Rosuvas", "Pantocid", "Volini", "Glevo", "Istamet", "Revital H", "Gemcal", "Abzorb", "Fefol"],
  ["Dr. Reddy's Laboratories", "Omez", "Nise", "Stamlo", "Econorm", "Atocor", "Razo", "Mintop", "Venlor", "Clamp", "Glimy"],
  ["Cipla", "Foracort", "Duolin", "Budecort", "Montair LC", "Urimax", "Dytor", "Amlopress", "Omnigel", "Cipcal", "Paracip"],
  ["Aurobindo Pharma", "Amlodipine", "Metformin", "Lisinopril", "Atorvastatin", "Omeprazole", "Gabapentin", "Losartan", "Sertraline", "Simvastatin", "Levothyroxine"],
  ["Lupin", "Gluconorm", "Budamate", "Tonact", "Ramistar", "Lupisulin", "Humalog", "Gidase", "Bevon", "Corvadil", "Taxim-O"],
  ["Zydus Lifesciences", "Lipaglyn", "Bilypsa", "Oxemia", "Ucedane", "Zypitamag", "Saroglitazar", "Desidustat", "Pemetrexed", "Remdesivir", "Vardenafil"],
  ["Torrent Pharmaceuticals", "Dilzem", "Azulix", "Chymoral", "Nebicard", "Unienzyme", "Nikoran", "Shelcal", "Nexpro", "Tide", "Domstal"],
  ["Alkem Laboratories", "Clavam", "Pan", "Taxim", "Azee", "Gemcal", "Xone", "Pipzo", "Ondem", "Dolo", "Sumo"],
  ["Mankind Pharma", "Manforce", "Prega News", "Unwanted-72", "Glimestar", "Telmikind", "Amlokind", "Candiforce", "Gudcef", "Moxikind-CV", "Nurokind"],
  ["Biocon", "Insugen", "Basalog", "Canmab", "ALZUMAb", "BIOMAb-EGFR", "Itolizumab", "Pegalsted", "Krabeva", "Ogivri", "Fulphila"],
  ["Hetero Drugs", "Covifor", "Favivir", "Tocilizumab", "Remdesivir", "Oseltamivir", "Ritonavir", "Lopinavir", "Dolutegravir", "Tenofovir", "Lamivudine"],
  ["Intas Pharmaceuticals", "Lipicard", "Neuropil", "Zytiga", "Terifrac", "Fritar", "Intacef", "Epofit", "G-CSF", "Rituximab", "Trastuzumab"],
  ["Abbott Laboratories", "Humira", "Ensure", "Glucerna", "FreeStyle", "Pedialyte", "Similac", "Brufen", "Duphaston", "Thyronorm", "Vertin"],
  ["Daiichi Sankyo", "Enhertu", "Lixiana", "Tarlige", "Praluent", "Olmesartan", "Edoxaban", "Prasugrel", "Denosumab", "Mirogabalin", "Trastuzumab"],
  ["Otsuka Pharmaceutical", "Abilify", "Rexulti", "Jynarque", "Samsca", "Pletal", "Mucosta", "Tixtar", "Busulfex", "Sprycel", "Lonsurf"],
  ["Sumitomo Pharma", "Latuda", "Myfembree", "Gemtesa", "Orgovyx", "Rethymic", "Kynmobi", "Lonafarnib", "Apomorphine", "Lurasidone", "Relugolix"],
  ["CSL Limited", "Privigen", "Hizentra", "Idelvion", "Afstyla", "Haegarda", "Kcentra", "Berinert", "Albumin", "Zemaira", "Stimate"],
  ["Grifols", "Gamunex", "Prolastin", "Albutein", "Xembify", "Fanhdi", "Alphanate", "Koate", "Antithrombin III", "Plasbumin", "Flebogamma"],
  ["UCB Pharma", "Cimzia", "Vimpat", "Keppra", "Neupro", "Briviact", "Evenity", "Fintepla", "Rozanolixizumab", "Zilucoplan", "Dravet"],
  ["Ipsen", "Somatuline", "Dysport", "Cabometyx", "Onivyde", "Decapeptyl", "NutropinAq", "Increlex", "Cometriq", "Palovarotene", "Bylvay"],
  ["Endo International", "Xiaflex", "Supprelin LA", "Aveed", "Vasostrict", "Adrenalin", "Aplenzin", "Percocet", "Opana", "Lidoderm", "Voltaren"],
  ["Mallinckrodt Pharmaceuticals", "Acthar", "Inomax", "Therakos", "Amitiza", "Ofirmev", "Exalgo", "Pennsaid", "Xartemis", "Roxicodone", "Methadose"],
  ["Bausch Health", "Xifaxan", "Lialda", "Apriso", "Uceris", "Relistor", "Trulance", "Duobrii", "Bryhali", "Siliq", "Lumify"],
  ["Hikma Pharmaceuticals", "Advair", "Colchicine", "Everolimus", "Gleevec", "Rituxan", "Vigabatrin", "Zometa", "Doxycycline", "Amoxicillin", "Ciprofloxacin"],
  ["Apotex", "Apo-Atorvastatin", "Apo-Rosuvastatin", "Apo-Pantoprazole", "Apo-Metformin", "Apo-Omeprazole", "Apo-Lisinopril", "Apo-Gabapentin", "Apo-Sertraline", "Apo-Simvastatin", "Apo-Levothyroxine"],
  ["Fresenius Kabi", "Propofol", "Diprivan", "Kabiven", "Smoflipid", "Voluven", "Nephramine", "Intralipid", "Omegaven", "Vitalipid", "Soluvit"],
  ["Boehringer Ingelheim", "Jardiance", "Ofev", "Spiriva", "Pradaxa", "Trajenta", "Giotrif", "Cyltezo", "Metalyse", "Actilyse", "Praxbind"],
  ["Servier", "Daflon", "Diamicron", "Coversyl", "Natrilix", "Vastarel", "Procoralan", "Stablon", "Valdoxan", "Lonsurf", "Pixuvri"],
  ["Chugai Pharmaceutical", "Hemlibra", "Actemra", "Alecensa", "Tecentriq", "Perjeta", "Avastin", "Herceptin", "Rituxan", "Gazyva", "Enspryng"],
  ["Shionogi", "Xofluza", "Cefiderocol", "Mulpleta", "Intuniv", "Crestor", "Irribow", "OxyContin", "Finibax", "Rapiacta", "Pirespa"],
  ["Kyowa Kirin", "Crysvita", "Poteligeo", "Nourianz", "G-CSF", "Regpara", "Orkedia", "Darbepoetin", "Romiplostim", "Mogamulizumab", "Burosumab"],
  ["Samsung Biologics", "Benepali", "Flixabi", "Imraldi", "Ontruzant", "Hadlima", "Brennys", "Samfenet", "Aybintio", "Adallo", "Onbevzi"]
];

const categories = [
  "Cardiovascular", "Gastrointestinal", "Respiratory", "Antibiotic", "Diabetes", 
  "Wellness", "Dermatology", "Pain Relief", "Oncology", "Immunology", "Neurology"
];

export const pharmaData: Company[] = rawData.map((row, index) => {
  const [name, ...products] = row;
  const id = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
  
  return {
    id,
    name,
    description: `${name} is a global leader in pharmaceutical innovation, dedicated to improving patient lives through high-quality medicines.`,
    logo: `https://picsum.photos/seed/${id}/400/400`,
    products: products.map((p, pIndex) => ({
      id: `${id}-p${pIndex}`,
      name: p,
      category: categories[Math.floor(Math.random() * categories.length)],
      description: `${p} is a high-quality pharmaceutical product manufactured by ${name} following international safety standards.`
    }))
  };
});
