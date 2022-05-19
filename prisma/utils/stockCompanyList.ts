const stockCompanyList = [
	{
		name: 'CENTRO DE IMAGEM DIAGNOSTICOS',
		cnpj: '42771949000135',
	},
	{
		name: 'BANCO ABC BRASIL',
		cnpj: '28195667000106',
	},
	{
		name: 'AMBEV',
		cnpj: '07526557000100',
	},
	{
		name: 'AERIS',
		cnpj: '12528708000107',
	},
	{
		name: 'BRASILAGRO',
		cnpj: '07628528000159',
	},
	{
		name: 'AGROGALAXY',
		cnpj: '21240146000184',
	},
	{
		name: 'ALLIED',
		cnpj: '20247322000147',
	},
	{
		name: 'ALPARGATAS',
		cnpj: '61079117000105',
	},
	{
		name: 'ESTAPAR',
		cnpj: '60537263000166',
	},
	{
		name: 'ALUPAR INVESTIMENTO',
		cnpj: '08364948000138',
	},
	{
		name: 'LOJAS MARISA',
		cnpj: '61189288000189',
	},
	{
		name: 'AMBIPAR',
		cnpj: '12648266000124',
	},
	{
		name: 'ANIMA HOLDING',
		cnpj: '09288252000132',
	},
	{
		name: 'ARMAC',
		cnpj: '00242184000104',
	},
	{
		name: 'AREZZO INDÚSTRIA E COMÉRCIO',
		cnpj: '16590234000176',
	},
	{
		name: 'ATOM',
		cnpj: '00359742000108',
	},
	{
		name: 'ALPHAVILLE',
		cnpj: '16811931000100',
	},
	{
		name: 'AZUL',
		cnpj: '09305994000129',
	},
	{
		name: 'B3 – BRASIL – BOLSA – BALCÃO',
		cnpj: '09346601000125',
	},
	{
		name: 'EXCELSIOR ALIMENTOS',
		cnpj: '95426862000197',
	},
	{
		name: 'BANCO DO BRASIL',
		cnpj: '00000000000191',
	},
	{
		name: 'BANCO BRADESCO',
		cnpj: '60746948000112',
	},
	{
		name: 'BRASIL BROKERS',
		cnpj: '08613550000198',
	},
	{
		name: 'BB SEGURIDADE',
		cnpj: '17344597000194',
	},
	{
		name: 'MINERVA',
		cnpj: '67620377000114',
	},
	{
		name: 'BANCO INTER',
		cnpj: '00416968000101',
	},
	{
		name: 'BLAU FARMACÊUTICA',
		cnpj: '58430828000160',
	},
	{
		name: 'BEMOBI',
		cnpj: '09042817000105',
	},
	{
		name: 'BOA VISTA',
		cnpj: '11725176000127',
	},
	{
		name: 'BOMBRIL',
		cnpj: '50564053000103',
	},
	{
		name: 'BANCO BTG PACTUAL',
		cnpj: '30306294000145',
	},
	{
		name: 'BANCO PAN',
		cnpj: '59285411000113',
	},
	{
		name: 'BRADESPAR',
		cnpj: '03847461000192',
	},
	{
		name: 'BR PARTNERS',
		cnpj: '10739356000103',
	},
	{
		name: 'BRF',
		cnpj: '01838723000127',
	},
	{
		name: 'BRISANET',
		cnpj: '19796586000170',
	},
	{
		name: 'BRASKEM',
		cnpj: '42150391000170',
	},
	{
		name: 'BR MALLS PARTICIPACOES',
		cnpj: '06977745000191',
	},
	{
		name: 'BR PROPERTIES',
		cnpj: '06977751000149',
	},
	{
		name: 'BANCO BMG',
		cnpj: '61186680000174',
	},
	{
		name: 'BANRISUL',
		cnpj: '92702067000196',
	},
	{
		name: 'BIOSEV',
		cnpj: '15527906000136',
	},
	{
		name: 'B2W – COMPANHIA DIGITAL',
		cnpj: '00776574000156',
	},
	{
		name: 'CAMIL ALIMENTOS',
		cnpj: '64904295000103',
	},
	{
		name: 'CSU CARDSYSTEM',
		cnpj: '01896779000138',
	},
	{
		name: 'MÉLIUZ',
		cnpj: '14110585000107',
	},
	{
		name: 'CBA',
		cnpj: '61409892000173',
	},
	{
		name: 'CCR',
		cnpj: '02846056000197',
	},
	{
		name: 'CYRELA COMMERCIAL PROPERTIES',
		cnpj: '08801621000186',
	},
	{
		name: 'C&A MODAS',
		cnpj: '45242914000105',
	},
	{
		name: 'CIA ENERGETICA DE PERNAMBUCO – CELPE',
		cnpj: '10835932000108',
	},
	{
		name: 'AUREN ENERGIA',
		cnpj: '28594234000123',
	},
	{
		name: 'CIA GAS DE SAO PAULO – COMGAS',
		cnpj: '61856571000117',
	},
	{
		name: 'GRAZZIOTIN',
		cnpj: '92012467000170',
	},
	{
		name: 'CIELO',
		cnpj: '01027058000191',
	},
	{
		name: 'CLEAR SALE',
		cnpj: '03802115000198',
	},
	{
		name: 'CIA ENERGETICA DE MINAS GERAIS – CEMIG',
		cnpj: '17155730000164',
	},
	{
		name: 'CSN MINERAÇÃO',
		cnpj: '08902291000115',
	},
	{
		name: 'CENTAURO',
		cnpj: '13217485000111',
	},
	{
		name: 'CIA ENERGETICA DO CEARA – COELCE',
		cnpj: '07047251000170',
	},
	{
		name: 'CPFL ENERGIA',
		cnpj: '02429144000193',
	},
	{
		name: 'CREMER',
		cnpj: '82641325000118',
	},
	{
		name: 'ATACADÃO',
		cnpj: '75315333000109',
	},
	{
		name: 'COSAN',
		cnpj: '50746577000115',
	},
	{
		name: 'CRUZEIRO DO SUL EDUCACIONAL',
		cnpj: '62984091000102',
	},
	{
		name: 'CIA SANEAMENTO DE MINAS GERAIS – COPASA',
		cnpj: '17281106000103',
	},
	{
		name: 'CIA SIDERURGICA NACIONAL',
		cnpj: '33042730000104',
	},
	{
		name: 'COGNA EDUCAÇÃO',
		cnpj: '02800026000140',
	},
	{
		name: 'KARSTEN',
		cnpj: '82640558000104',
	},
	{
		name: 'CIA TECIDOS NORTE DE MINAS COTEMINAS',
		cnpj: '22677520000176',
	},
	{
		name: 'CURY',
		cnpj: '08797760000183',
	},
	{
		name: 'CVC BRASIL OPERADORA E AGÊNCIA DE VIAGENS',
		cnpj: '10760260000119',
	},
	{
		name: 'CAIXA SEGURIDADE',
		cnpj: '22543331000100',
	},
	{
		name: 'CYRELA BRAZIL REALTYEMPREEND E PART',
		cnpj: '73178600000118',
	},
	{
		name: 'DUFRY A.G.',
		cnpj: '11423623000193',
	},
	{
		name: 'DESKTOP',
		cnpj: '08170849000115',
	},
	{
		name: 'DIRECIONAL ENGENHARIA',
		cnpj: '16614075000100',
	},
	{
		name: 'DOMMO',
		cnpj: '08926302000105',
	},
	{
		name: 'D1000',
		cnpj: '12108897000150',
	},
	{
		name: 'DOTZ',
		cnpj: '10221279000197',
	},
	{
		name: 'DEXCO',
		cnpj: '97837181000147',
	},
	{
		name: 'ECORODOVIAS INFRAESTRUTURA E LOGÍSTICA',
		cnpj: '04149454000180',
	},
	{
		name: 'ENGIE BRASIL ENERGIA',
		cnpj: '02474103000119',
	},
	{
		name: 'ELEKEIROZ',
		cnpj: '13788120000147',
	},
	{
		name: 'ELETROMIDIA',
		cnpj: '09347516000181',
	},
	{
		name: 'ELETROPAULO',
		cnpj: '61695227000193',
	},
	{
		name: 'ELETROBRAS',
		cnpj: '00001180000126',
	},
	{
		name: 'EMBRAER',
		cnpj: '07689002000189',
	},
	{
		name: 'ENAUTA PARTICIPAÇÕES',
		cnpj: '11669021000110',
	},
	{
		name: 'EDP – ENERGIAS DO BRASIL',
		cnpj: '03983431000103',
	},
	{
		name: 'ENEVA',
		cnpj: '04423567000121',
	},
	{
		name: 'ENERGISA',
		cnpj: '00864214000106',
	},
	{
		name: 'ENJOEI',
		cnpj: '16922038000151',
	},
	{
		name: 'EQUATORIAL ENERGIA',
		cnpj: '03220438000173',
	},
	{
		name: 'ESPAÇO LASER',
		cnpj: '26659061000159',
	},
	{
		name: 'MANUFATURA DE BRINQUEDOS ESTRELA',
		cnpj: '61082004000150',
	},
	{
		name: 'ETERNIT',
		cnpj: '61092037000181',
	},
	{
		name: 'EUCATEX',
		cnpj: '56643018000166',
	},
	{
		name: 'EVEN CONSTRUTORA E INCORPORADORA',
		cnpj: '43470988000165',
	},
	{
		name: 'EZ TEC',
		cnpj: '08312229000173',
	},
	{
		name: 'CIA FERRO LIGAS DA BAHIA – FERBASA',
		cnpj: '15141799000103',
	},
	{
		name: 'FERTILIZANTES HERINGER',
		cnpj: '22266175000188',
	},
	{
		name: 'UNIFIQUE',
		cnpj: '02255187000108',
	},
	{
		name: 'FLEURY',
		cnpj: '60840055000131',
	},
	{
		name: 'FRAS-LE',
		cnpj: '88610126000129',
	},
	{
		name: 'METALFRIO SOLUTIONS',
		cnpj: '04821041000108',
	},
	{
		name: 'RIO PARANAPANEMA ENERGIA',
		cnpj: '02998301000181',
	},
	{
		name: 'GAFISA',
		cnpj: '01545826000107',
	},
	{
		name: 'GERDAU',
		cnpj: '33611500000119',
	},
	{
		name: 'GRUPO GPS',
		cnpj: '09229201000130',
	},
	{
		name: 'GRUPO MATEUS',
		cnpj: '24990777000109',
	},
	{
		name: 'NOTRE DAME INTERMÉDICA',
		cnpj: '19853511000184',
	},
	{
		name: 'METALURGICA GERDAU',
		cnpj: '92690783000109',
	},
	{
		name: 'GOL LINHAS AEREAS INTELIGENTES',
		cnpj: '06164253000187',
	},
	{
		name: 'GRENDENE',
		cnpj: '89850341000160',
	},
	{
		name: 'GENERAL SHOPPING BRASIL',
		cnpj: '08764621000153',
	},
	{
		name: 'GUARARAPES CONFECCOES',
		cnpj: '08402943000152',
	},
	{
		name: 'HAPVIDA',
		cnpj: '63554067000198',
	},
	{
		name: 'HELBOR EMPREENDIMENTOS',
		cnpj: '49263189000102',
	},
	{
		name: 'HBR REALTY',
		cnpj: '14785152000151',
	},
	{
		name: 'HIDROVIAS DO BRASIL',
		cnpj: '12648327000153',
	},
	{
		name: 'HERING',
		cnpj: '78876950000171',
	},
	{
		name: 'HYPERA PHARMA',
		cnpj: '02932074000191',
	},
	{
		name: 'HOTEIS OTHON',
		cnpj: '33200049000147',
	},
	{
		name: 'IDEIASNET',
		cnpj: '02365069000144',
	},
	{
		name: 'INFRACOMMERCE',
		cnpj: '38456921000136',
	},
	{
		name: 'IGUATEMI EMPRESA DE SHOPPING CENTERS',
		cnpj: '51218147000193',
	},
	{
		name: 'INTELBRAS',
		cnpj: '82901000000127',
	},
	{
		name: 'IRB – BRASIL RESSEGUROS',
		cnpj: '33376989000191',
	},
	{
		name: 'ITAUSA INVESTIMENTOS',
		cnpj: '61532644000115',
	},
	{
		name: 'ITAU UNIBANCO HOLDING',
		cnpj: '60872504000123',
	},
	{
		name: 'JALLES MACHADO',
		cnpj: '02635522000195',
	},
	{
		name: 'JBS',
		cnpj: '02916265000160',
	},
	{
		name: 'JHSF PARTICIPACOES',
		cnpj: '08294224000165',
	},
	{
		name: 'JSL',
		cnpj: '52548435000179',
	},
	{
		name: 'KEPLER WEBER',
		cnpj: '91983056000169',
	},
	{
		name: 'KLABIN',
		cnpj: '89637490000145',
	},
	{
		name: 'KORA SAÚDE',
		cnpj: '13270520000166',
	},
	{
		name: 'LOJAS AMERICANAS',
		cnpj: '33014556000196',
	},
	{
		name: 'LAVVI',
		cnpj: '26462693000128',
	},
	{
		name: 'CIA LOCAÇÃO DAS AMÉRICAS',
		cnpj: '10215988000160',
	},
	{
		name: 'MAHLE-METAL LEVE',
		cnpj: '60476884000187',
	},
	{
		name: 'LIGHT',
		cnpj: '03378521000175',
	},
	{
		name: 'LINX',
		cnpj: '06948969000175',
	},
	{
		name: 'RESTOQUE COMÉRCIO E CONFECÇÕES DE ROUPAS',
		cnpj: '49669856000143',
	},
	{
		name: 'LOG COMMERCIAL PROPERTIES',
		cnpj: '09041168000110',
	},
	{
		name: 'QUERO-QUERO',
		cnpj: '96418264021802',
	},
	{
		name: 'LOG-IN LOGISTICA INTERMODAL',
		cnpj: '42278291000124',
	},
	{
		name: 'LPS BRASIL – CONSULTORIA DE IMOVEIS',
		cnpj: '08078847000109',
	},
	{
		name: 'LOJAS RENNER',
		cnpj: '92754738000162',
	},
	{
		name: 'LOCAWEB',
		cnpj: '02351877000152',
	},
	{
		name: 'LUPATECH',
		cnpj: '89463822000112',
	},
	{
		name: 'LIVETECH DA BAHIA',
		cnpj: '05917486000140',
	},
	{
		name: 'MAGNESITA REFRATARIOS',
		cnpj: '08684547000165',
	},
	{
		name: 'M.DIAS BRANCO IND COM DE ALIMENTOS',
		cnpj: '07206816000115',
	},
	{
		name: 'HOSPITAL MATER DEI',
		cnpj: '16676520000159',
	},
	{
		name: 'MOURA DUBEUX',
		cnpj: '12049631000184',
	},
	{
		name: 'MELNICK EVEN',
		cnpj: '12181987000177',
	},
	{
		name: 'NTERNATIONAL MEAL COMPANY ALIMENTACAO',
		cnpj: '17314329000120',
	},
	{
		name: 'MAGAZINE LUIZA',
		cnpj: '47960950000121',
	},
	{
		name: 'MILLS ESTRUTURAS E SERVIÇOS DE ENGENHARIA',
		cnpj: '27093558000115',
	},
	{
		name: 'MULTILASER',
		cnpj: '59717553000102',
	},
	{
		name: 'MOBLY',
		cnpj: '31553627000101',
	},
	{
		name: 'MODAL MAIS',
		cnpj: '30723886000162',
	},
	{
		name: 'MOSAICO VENTURES',
		cnpj: '09083175000184',
	},
	{
		name: 'MITRE REALTY',
		cnpj: '07882930000165',
	},
	{
		name: 'MMX MINERACAO E METALICOS',
		cnpj: '02762115000149',
	},
	{
		name: 'MUNDIAL – PRODUTOS DE CONSUMO',
		cnpj: '88610191000154',
	},
	{
		name: 'MOVIDA',
		cnpj: '21314559000166',
	},
	{
		name: 'MULTIPLUS',
		cnpj: '11094546000175',
	},
	{
		name: 'MARFRIG GLOBAL FOODS',
		cnpj: '03853896000140',
	},
	{
		name: 'MRV ENGENHARIA',
		cnpj: '08343492000120',
	},
	{
		name: 'MITRE',
		cnpj: '07882930000165',
	},
	{
		name: 'MULTIPLAN',
		cnpj: '07816890000153',
	},
	{
		name: 'IOCHPE MAXION',
		cnpj: '61156113000175',
	},
	{
		name: 'NADIR FIGUEIREDO',
		cnpj: '61067161000197',
	},
	{
		name: 'NEOENERGIA',
		cnpj: '01083200000118',
	},
	{
		name: 'NEOGRID',
		cnpj: '10139870000108',
	},
	{
		name: 'GET NINJAS',
		cnpj: '14127813000151',
	},
	{
		name: 'NATURA COSMETICOS',
		cnpj: '71673990000177',
	},
	{
		name: 'ODONTOPREV',
		cnpj: '58119199000151',
	},
	{
		name: 'OURO FINO SAUDE ANIMAL',
		cnpj: '20258278000170',
	},
	{
		name: 'OI',
		cnpj: '76535764000143',
	},
	{
		name: 'ONCOCLÍNICAS',
		cnpj: '12104241000402',
	},
	{
		name: 'OCEAN PACT',
		cnpj: '09114805000130',
	},
	{
		name: 'ORIZON',
		cnpj: '11421994000136',
	},
	{
		name: 'OSX BRASIL',
		cnpj: '09112685000132',
	},
	{
		name: 'INSTITUTO HERMES PARDINI',
		cnpj: '19378769000176',
	},
	{
		name: 'CIA BRASILEIRA DE DISTRIBUICAO',
		cnpj: '47508411000156',
	},
	{
		name: 'PDG REALTY',
		cnpj: '02950811000189',
	},
	{
		name: 'PETROLEO BRASILEIRO PETROBRAS',
		cnpj: '33000167000101',
	},
	{
		name: 'PETZ',
		cnpj: '18328118000109',
	},
	{
		name: 'PROFARMA DISTRIB PROD FARMACEUTICOS',
		cnpj: '45453214000151',
	},
	{
		name: 'PAGUE MENOS',
		cnpj: '06626253000151',
	},
	{
		name: 'BANCO PINE',
		cnpj: '62144175000120',
	},
	{
		name: 'PLANO & PLANO',
		cnpj: '24230275000180',
	},
	{
		name: 'PARANAPANEMA',
		cnpj: '60398369000479',
	},
	{
		name: 'MARCOPOLO',
		cnpj: '88611835000129',
	},
	{
		name: 'POSITIVO TECNOLOGIA',
		cnpj: '81243735000148',
	},
	{
		name: 'FOCUS ENERGIA',
		cnpj: '26735020000102',
	},
	{
		name: 'PETRO RIO',
		cnpj: '10629105000168',
	},
	{
		name: 'PRINER',
		cnpj: '18593815000197',
	},
	{
		name: 'PORTO SEGURO',
		cnpj: '02149205000169',
	},
	{
		name: 'PORTOBELLO',
		cnpj: '83475913000191',
	},
	{
		name: 'QUALICORP',
		cnpj: '11992680000193',
	},
	{
		name: 'RAIA DROGASIL',
		cnpj: '61585865000151',
	},
	{
		name: 'RUMO',
		cnpj: '02387241000160',
	},
	{
		name: 'RAÍZEN',
		cnpj: '33453598000123',
	},
	{
		name: 'RANDON IMPLEMENTOS',
		cnpj: '89086144000116',
	},
	{
		name: 'RECRUSUL',
		cnpj: '91333666000117',
	},
	{
		name: 'PETRO RECÔNCAVO',
		cnpj: '03342704000130',
	},
	{
		name: 'REDE D’OR',
		cnpj: '06047087000139',
	},
	{
		name: 'REDE ENERGIA',
		cnpj: '61584140000149',
	},
	{
		name: 'LOCALIZA RENT A CAR',
		cnpj: '16670085000155',
	},
	{
		name: 'RENOVA ENERGIA',
		cnpj: '08534605000174',
	},
	{
		name: 'INDUSTRIAS ROMI',
		cnpj: '56720428000163',
	},
	{
		name: 'REFINARIA DE PETROLEOS MANGUINHOS',
		cnpj: '33412081000196',
	},
	{
		name: '3R PETROLEUM',
		cnpj: '12091809000155',
	},
	{
		name: 'ROSSI RESIDENCIAL',
		cnpj: '61065751000180',
	},
	{
		name: 'BANCO SANTANDER',
		cnpj: '90400888000142',
	},
	{
		name: 'CIA SANEAMENTO DO PARANA – SANEPAR',
		cnpj: '76484013000145',
	},
	{
		name: 'CIA SANEAMENTO BASICO SAO PAULO – SABESP',
		cnpj: '43776517000180',
	},
	{
		name: 'SAO CARLOS',
		cnpj: '29780061000109',
	},
	{
		name: 'SOMOS EDUCAÇÃO',
		cnpj: '02541982000154',
	},
	{
		name: 'SER EDUCACIONAL',
		cnpj: '04986320000113',
	},
	{
		name: 'SEQUOIA',
		cnpj: '01599101000193',
	},
	{
		name: 'SPRINGS GLOBAL',
		cnpj: '07718269000157',
	},
	{
		name: 'T4F ENTRETENIMENTO',
		cnpj: '02860694000162',
	},
	{
		name: 'SCHULZ',
		cnpj: '84693183000168',
	},
	{
		name: 'SIMPAR',
		cnpj: '07415333000120',
	},
	{
		name: 'SLC AGRICOLA',
		cnpj: '89096457000155',
	},
	{
		name: 'SARAIVA LIVREIROS EDITORES',
		cnpj: '60500139000126',
	},
	{
		name: 'SMARTFIT',
		cnpj: '07594978000178',
	},
	{
		name: 'SMILES FIDELIDADE',
		cnpj: '05730375000120',
	},
	{
		name: 'SAO MARTINHO',
		cnpj: '51466860000156',
	},
	{
		name: 'BOA SAFRA',
		cnpj: '10807374000177',
	},
	{
		name: 'GRUPO SOMA',
		cnpj: '10285590000108',
	},
	{
		name: 'SINQIA',
		cnpj: '04065791000199',
	},
	{
		name: 'SONAE SIERRA BRASIL',
		cnpj: '05878397000132',
	},
	{
		name: 'SANTOS BRASIL',
		cnpj: '02762121000104',
	},
	{
		name: 'SUL AMERICA',
		cnpj: '29978814000187',
	},
	{
		name: 'SUZANO PAPEL E CELULOSE',
		cnpj: '16404287000155',
	},
	{
		name: 'TRANSMISSORA ALIANÇA DE ENERGIA ELÉTRICA',
		cnpj: '07859971000130',
	},
	{
		name: 'TAURUS ARMAS',
		cnpj: '92781335000102',
	},
	{
		name: 'TECNOSOLO ENGENHARIA',
		cnpj: '33111246000190',
	},
	{
		name: 'TECNISA',
		cnpj: '08065557000112',
	},
	{
		name: 'TECHNOS',
		cnpj: '09295063000197',
	},
	{
		name: 'TEGRA',
		cnpj: '30213493000109',
	},
	{
		name: 'TEKA-TECELAGEM KUEHNRICH',
		cnpj: '82636986000155',
	},
	{
		name: 'CONSTRUTORA TENDA',
		cnpj: '71476527000135',
	},
	{
		name: 'TEGMA GESTAO LOGISTICA',
		cnpj: '02351144000118',
	},
	{
		name: 'TERRA SANTA AGRO',
		cnpj: '05799312000120',
	},
	{
		name: 'TRACK & FIELD',
		cnpj: '59418806000147',
	},
	{
		name: 'AES TIETE ENERGIA',
		cnpj: '04128563000110',
	},
	{
		name: 'TIM',
		cnpj: '02558115000121',
	},
	{
		name: 'TOTVS',
		cnpj: '53113791000122',
	},
	{
		name: 'TRIUNFO PART',
		cnpj: '03014553000191',
	},
	{
		name: 'TC',
		cnpj: '26345998000150',
	},
	{
		name: 'TRISUL',
		cnpj: '08811643000127',
	},
	{
		name: 'CIA TRANSMISSÃO ENERGIA ELÉTRICA PAULISTA – CTEEP',
		cnpj: '02998611000104',
	},
	{
		name: '3TENTOS',
		cnpj: '94813102000170',
	},
	{
		name: 'TUPY',
		cnpj: '84683374000149',
	},
	{
		name: 'WESTWING',
		cnpj: '14776142000150',
	},
	{
		name: 'UNICASA INDÚSTRIA DE MÓVEIS',
		cnpj: '90441460000148',
	},
	{
		name: 'ULTRAPAR PARTICIPACOES',
		cnpj: '33256439000139',
	},
	{
		name: 'UNIPAR CARBOCLORO S.A.',
		cnpj: '33958695000178',
	},
	{
		name: 'USINAS SIDERÚRGICAS DE MINAS GERAIS – USIMINAS',
		cnpj: '60894730000105',
	},
	{
		name: 'VALE',
		cnpj: '33592510000154',
	},
	{
		name: 'GRUPO VAMOS',
		cnpj: '23373000000132',
	},
	{
		name: 'VIBRA ENERGIA',
		cnpj: '34274233000102',
	},
	{
		name: 'VIVARA',
		cnpj: '33839910000111',
	},
	{
		name: 'TELEFÔNICA BRASIL',
		cnpj: '02558157000162',
	},
	{
		name: 'VITTIA',
		cnpj: '45365558000109',
	},
	{
		name: 'VALID SOLUÇÕES',
		cnpj: '33113309000147',
	},
	{
		name: 'VULCABRAS/AZALEIA',
		cnpj: '50926955000142',
	},
	{
		name: 'VIA VAREJO',
		cnpj: '33041260065290',
	},
	{
		name: 'VIVEO',
		cnpj: '12420164000157',
	},
	{
		name: 'YDUQS',
		cnpj: '08807432000110',
	},
	{
		name: 'WEG',
		cnpj: '84429695000111',
	},
	{
		name: 'WHIRLPOOL',
		cnpj: '59105999000186',
	},
	{
		name: 'WIZ SOLUÇÕES E CORRETAGEM DE SEGUROS',
		cnpj: '42278473000103',
	},
	{
		name: 'WILSON SONS',
		cnpj: '05721735000128',
	},
]


export default stockCompanyList
