export type TCurrency =
  | 'AUD' // Dólar australiano
  | 'AED' // Dirham dos Emirados Árabes Unidos
  | 'ALL' // Lek albanês
  | 'AMD' // Dram armênio
  | 'ANG' // Florim das Antilhas Holandesas
  | 'AOA' // Kwanza angolano
  | 'ARS' // Peso argentino
  | 'AWG' // Florim arubano
  | 'AZN' // Manat azeri
  | 'BAM' // Marco bósnio-herzegovino
  | 'BBD' // Dólar barbadense
  | 'BDT' // Taka bengali
  | 'BGN' // Lev búlgaro
  | 'BHD' // Dinar bareinita
  | 'BMD' // Dólar bermudense
  | 'BND' // Dólar bruneíno
  | 'BOB' // Boliviano
  | 'BRL' // Real brasileiro
  | 'BSD' // Dólar bahamense
  | 'BTN' // Ngultrum butanês
  | 'BWP' // Pula de Botsuana
  | 'BZD' // Dólar belizenho
  | 'CAD' // Dólar canadense
  | 'CHF' // Franco suíço
  | 'CLP' // Peso chileno
  | 'CNY' // Iuane chinês
  | 'COP' // Peso colombiano
  | 'CRC' // Colón costarriquenho
  | 'CVE' // Escudo cabo-verdiano
  | 'CZK' // Coroa tcheca
  | 'DJF' // Franco djiboutiense
  | 'DKK' // Coroa dinamarquesa
  | 'DOP' // Peso dominicano
  | 'DZD' // Dinar argelino
  | 'EUR' // Euro
  | 'EGP' // Libra egípcia
  | 'ETB' // Birr etíope
  | 'FJD' // Dólar fijiano
  | 'FKP' // Libra das Malvinas
  | 'GBP' // Libra esterlina
  | 'GEL' // Lari georgiano
  | 'GGP' // Libra de Guernsey
  | 'GHS' // Cedi ganês
  | 'GIP' // Libra de Gibraltar
  | 'GMD' // Dalasi gambiano
  | 'GNF' // Franco guineense
  | 'GTQ' // Quetzal guatemalteco
  | 'GYD' // Dólar guianense
  | 'HKD' // Dólar de Hong Kong
  | 'HNL' // Lempira hondurenha
  | 'HRK' // Kuna croata
  | 'HTG' // Gourde haitiano
  | 'HUF' // Forint húngaro
  | 'INR' // Rúpia indiana
  | 'IDR' // Rupia indonésia
  | 'ILS' // Novo shekel israelense
  | 'IMP' // Libra de Man
  | 'ISK' // Coroa islandesa
  | 'JEP' // Libra de Jersey
  | 'JMD' // Dólar jamaicano
  | 'JOD' // Dinar jordaniano
  | 'JPY' // Iene japonês
  | 'KES' // Xelim queniano
  | 'KGS' // Som quirguiz
  | 'KHR' // Riel cambojano
  | 'KMF' // Franco comoriano
  | 'KRW' // Won sul-coreano
  | 'KWD' // Dinar kuwaitiano
  | 'KYD' // Dólar das Ilhas Cayman
  | 'KZT' // Tenge cazaque
  | 'LAK' // Kip laosiano
  | 'LBP' // Libra libanesa
  | 'LKR' // Rupia do Sri Lanka
  | 'LRD' // Dólar liberiano
  | 'LSL' // Loti lesotiano
  | 'MXN' // Peso mexicano
  | 'MAD' // Dirham marroquino
  | 'MDL' // Leu moldávio
  | 'MGA' // Ariary malgaxe
  | 'MKD' // Dinar macedônio
  | 'MNT' // Tugrik mongol
  | 'MOP' // Pataca macaense
  | 'MRU' // Ouguiya mauritana
  | 'MUR' // Rupia mauriciana
  | 'MVR' // Rupia maldiva
  | 'MWK' // Kwacha malauiano
  | 'MYR' // Ringgit malaio
  | 'MZN' // Metical moçambicano
  | 'NAD' // Dólar namibiano
  | 'NGN' // Naira nigeriana
  | 'NIO' // Córdoba nicaraguense
  | 'NOK' // Coroa norueguesa
  | 'NPR' // Rupia nepalesa
  | 'NZD' // Dólar neozelandês
  | 'OMR' // Rial omanense
  | 'PAB' // Balboa panamenho
  | 'PEN' // Sol peruano
  | 'PGK' // Kina papuásia
  | 'PHP' // Peso filipino
  | 'PKR' // Rupia paquistanesa
  | 'PLN' // Zloty polonês
  | 'PYG' // Guarani paraguaio
  | 'QAR' // Rial catariano
  | 'RON' // Leu romeno
  | 'RSD' // Dinar sérvio
  | 'RUB' // Rublo russo
  | 'RWF' // Franco ruandês
  | 'SAR' // Rial saudita
  | 'SBD' // Dólar das Ilhas Salomão
  | 'SCR' // Rupia seichelense
  | 'SEK' // Coroa sueca
  | 'SGD' // Dólar de Singapura
  | 'SHP' // Libra de Santa Helena
  | 'SLL' // Leone de Serra Leoa
  | 'SRD' // Dólar surinamês
  | 'SVC' // Colom salvadorenho
  | 'SZL' // Lilangeni suazi
  | 'THB' // Baht tailandês
  | 'TJS' // Somoni tadjique
  | 'TMT' // Manat turcomeno
  | 'TND' // Dinar tunisiano
  | 'TOP' // Pa'anga tonganesa
  | 'TRY' // Lira turca
  | 'TTD' // Dólar de Trinidad e Tobago
  | 'TWD' // Novo dólar taiwanês
  | 'TZS' // Xelim tanzaniano
  | 'USD' // Dólar americano
  | 'UAH' // Hryvnia ucraniano
  | 'UGX' // Xelim ugandês
  | 'UYU' // Peso uruguaio
  | 'UZS' // Som uzbeque
  | 'VND' // Dong vietnamita
  | 'VUV' // Vatu de Vanuatu
  | 'WST' // Tala samoana
  | 'XCD' // Dólar do Caribe Oriental
  | 'XOF' // Franco CFA Ocidental
  | 'XPF' // Franco CFP
  | 'ZAR' // Rand sul-africano
  | 'ZMW' // Kwacha zambiano

export type TLanguage =
  | 'pt-BR' // Brasil
  | 'en-US' // Estados Unidos
  | 'pt-PT' // Portugal
  | 'ja-JP' // Japão
  | 'es-MX' // México
  | 'ru-RU' // Rússia
  | 'en-GB' // Reino Unido
  | 'en-AU' // AUD - Austrália
  | 'ar-AE' // AED - Emirados Árabes
  | 'sq-AL' // ALL - Albânia
  | 'hy-AM' // AMD - Armênia
  | 'nl-NL' // ANG - Antilhas Holandesas
  | 'pt-AO' // AOA - Angola
  | 'es-AR' // ARS - Argentina
  | 'nl-AW' // AWG - Aruba
  | 'az-AZ' // AZN - Azerbaijão
  | 'bs-BA' // BAM - Bósnia e Herzegovina
  | 'en-BB' // BBD - Barbados
  | 'bn-BD' // BDT - Bangladesh
  | 'bg-BG' // BGN - Bulgária
  | 'ar-BH' // BHD - Bahrein
  | 'en-BM' // BMD - Bermudas
  | 'ms-BN' // BND - Brunei
  | 'es-BO' // BOB - Bolívia
  | 'en-BS' // BSD - Bahamas
  | 'dz-BT' // BTN - Butão
  | 'en-BW' // BWP - Botsuana
  | 'en-BZ' // BZD - Belize
  | 'fr-CA' // CAD - Canadá (francês)
  | 'en-CA' // CAD - Canadá (inglês)
  | 'fr-CH' // CHF - Suíça (francês)
  | 'de-CH' // CHF - Suíça (alemão)
  | 'it-CH' // CHF - Suíça (italiano)
  | 'es-CL' // CLP - Chile
  | 'zh-CN' // CNY - China
  | 'es-CO' // COP - Colômbia
  | 'es-CR' // CRC - Costa Rica
  | 'pt-CV' // CVE - Cabo Verde
  | 'cs-CZ' // CZK - República Tcheca
  | 'fr-DJ' // DJF - Djibuti
  | 'da-DK' // DKK - Dinamarca
  | 'es-DO' // DOP - República Dominicana
  | 'ar-DZ' // DZD - Argélia
  | 'ar-EG' // EGP - Egito
  | 'am-ET' // ETB - Etiópia
  | 'en-FJ' // FJD - Fiji
  | 'en-FK' // FKP - Ilhas Malvinas
  | 'ka-GE' // GEL - Geórgia
  | 'ak-GH' // GHS - Gana
  | 'es-GT' // GTQ - Guatemala
  | 'es-HN' // HNL - Honduras
  | 'hr-HR' // HRK - Croácia
  | 'ht-HT' // HTG - Haiti (crioulo haitiano)
  | 'en-HT' // HTG - Haiti (inglês)
  | 'hu-HU' // HUF - Hungria
  | 'hi-IN' // INR - Índia
  | 'id-ID' // IDR - Indonésia
  | 'he-IL' // ILS - Israel
  | 'is-IS' // ISK - Islândia
  | 'it-IT' // EUR - Itália, etc.
  | 'pl-PL' // PLN - Polônia
  | 'de-DE' // EUR - Alemanha
  | 'fr-FR' // EUR - França
  | 'es-ES' // EUR - Espanha
  | 'ko-KR' // KRW - Coreia do Sul
  | 'th-TH' // THB - Tailândia
  | 'tr-TR' // TRY - Turquia
  | 'uk-UA' // UAH - Ucrânia
  | 'vi-VN' // VND - Vietnã
  | 'af-ZA' // ZAR - África do Sul
  | 'zu-ZA' // ZAR - África do Sul (zulu)

export type TExchange = {
  // eslint-disable-next-line prettier/prettier
  lang: TLanguage
  currency: TCurrency
  removePrefix: (value: string) => string
  replaceSymbol?: (value: string) => string
}
