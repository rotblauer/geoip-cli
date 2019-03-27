This product includes GeoLite2 data created by MaxMind, available from
<a href="https://www.maxmind.com">https://www.maxmind.com</a>.

### Use

```
$ node index.js GeoLite2-City_20190326/GeoLite2-City.mmdb $(curl icanhazip.com)
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    14  100    14    0     0     33      0 --:--:-- --:--:-- --:--:--    33
GeoLite2-City_20190326/GeoLite2-City.mmdb 209.58.147.43
{ city: 
   { geoname_id: 4684888,
     names: 
      { de: 'Dallas',
        en: 'Dallas',
        es: 'Dallas',
        fr: 'Dallas',
        ja: 'ダラス',
        'pt-BR': 'Dallas',
        ru: 'Даллас' } },
  continent: 
   { code: 'NA',
     geoname_id: 6255149,
     names: 
      { de: 'Nordamerika',
        en: 'North America',
        es: 'Norteamérica',
        fr: 'Amérique du Nord',
        ja: '北アメリカ',
        'pt-BR': 'América do Norte',
        ru: 'Северная Америка',
        'zh-CN': '北美洲' } },
  country: 
   { geoname_id: 6252001,
     iso_code: 'US',
     names: 
      { de: 'USA',
        en: 'United States',
        es: 'Estados Unidos',
        fr: 'États-Unis',
        ja: 'アメリカ合衆国',
        'pt-BR': 'Estados Unidos',
        ru: 'США',
        'zh-CN': '美国' } },
  location: 
   { accuracy_radius: 500,
     latitude: 32.7908,
     longitude: -96.8336,
     metro_code: 623,
     time_zone: 'America/Chicago' },
  postal: { code: '75207' },
  registered_country: 
   { geoname_id: 6252001,
     iso_code: 'US',
     names: 
      { de: 'USA',
        en: 'United States',
        es: 'Estados Unidos',
        fr: 'États-Unis',
        ja: 'アメリカ合衆国',
        'pt-BR': 'Estados Unidos',
        ru: 'США',
        'zh-CN': '美国' } },
  subdivisions: [ { geoname_id: 4736286, iso_code: 'TX', names: [Object] } ] }

```
