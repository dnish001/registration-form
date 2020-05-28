//DATABASE CREATED MANUALLY !
export const config = {
  country: [
    {id: 1, country_name: 'India'},
    {id: 2, country_name: 'USA'}
  ],

  state: [
    {id: 1, country_id: 1, state_name: 'Andhra Pradesh', country_name: 'India'},
    {id: 2, country_id: 1, state_name: 'Gujrat', country_name: 'India'},
    {id: 3, country_id: 1, state_name: 'Haryana', country_name: 'India'},
    {id: 4, country_id: 1, state_name: 'Uttar Pradesh', country_name: 'India'},
    {id: 5, country_id: 2, state_name: 'Alabama', country_name: 'USA'},
    {id: 6, country_id: 2, state_name: 'Alaska', country_name: 'USA'},
    {id: 7, country_id: 2, state_name: 'American Samoa', country_name: 'USA'},
    {id: 8, country_id: 2, state_name: 'Arizona', country_name: 'USA'}
  ],

  city: [
    {id:1, state_id: 1, city_name: 'Visakhapatnam', state_name: 'Andhra Pradesh'},
    {id:2, state_id: 1, city_name: 'Vijayawada', state_name: 'Andhra Pradesh'},
    {id:3, state_id: 1, city_name: 'Guntur', state_name: 'Andhra Pradesh'},
    {id:4, state_id: 1, city_name: 'Tirupati', state_name: 'Andhra Pradesh'},
    {id:5, state_id: 2, city_name: 'Ahmedabad', state_name: 'Gujrat'},
    {id:6, state_id: 2, city_name: 'Somnath', state_name: 'Gujrat'},
    {id:7, state_id: 2, city_name: 'Dwarka', state_name: 'Gujrat'},
    {id:8, state_id: 2, city_name: 'Surat', state_name: 'Gujrat'},
    {id:9, state_id: 3, city_name: 'Faridabad', state_name: 'Haryana'},
    {id:10, state_id: 3, city_name: 'Gurugram', state_name: 'Haryana'},
    {id:11, state_id: 3, city_name: 'Panipat', state_name: 'Haryana'},
    {id:12, state_id: 3, city_name: 'Ambala', state_name: 'Haryana'},
    {id:13, state_id: 4, city_name: 'Kanpur', state_name: 'Uttar Pradesh'},
    {id:14, state_id: 4, city_name: 'Lucknow', state_name: 'Uttar Pradesh'},
    {id:15, state_id: 4, city_name: 'Gorakhpur', state_name: 'Uttar Pradesh'},
    {id:16, state_id: 4, city_name: 'Varanasi', state_name: 'Uttar Pradesh'},
    {id:17, state_id: 5, city_name: 'Birmingham', state_name: 'Alabama'},
    {id:18, state_id: 5, city_name: 'Brewton', state_name: 'Alabama'},
    {id:19, state_id: 6, city_name: 'Anchorage', state_name: 'Alaska'},
    {id:20, state_id: 6, city_name: 'Barrow', state_name: 'Alaska'},
    {id:21, state_id: 6, city_name: 'Homer', state_name: 'Alaska'},
    {id:22, state_id: 8, city_name: 'Phoenix', state_name: 'Arizona'},
    {id:23, state_id: 8, city_name: 'Tucson', state_name: 'Arizona'}
  ]
}
