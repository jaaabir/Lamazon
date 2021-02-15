import requests as req
from bs4 import BeautifulSoup 


url = "https://www.amazon.in/s?k={}&ref=nb_sb_noss_2"

def check_none( value, sample ):

    if value is not None:
        return value.text
    else:
        return sample

def get_items( value ):
    session = req.Session()
    session.headers['User-Agent'] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36" 

    res = session.get(url.format(value))
    soup = BeautifulSoup(res.content, features="html.parser")

    data_from_amazon = {}
    data_from_amazon['items'] = []
    # data['price'] = []
    # data['img'] = []
    # data['rating'] = []

    for ind,i in enumerate(soup.find_all('div', {'class': 's-latency-cf-section'})):

        name = i.find('span',{'class': 'a-size-medium'})
        name = check_none( name, value )
        
        symbol = i.find('span',{'class': 'a-price-symbol'})
        symbol = check_none( symbol, 'rs' )
        
        price = i.find('span',{'class': 'a-price-whole'})
        price = check_none( price, '20,000' )

        rating = i.find('i',{'class': 'aok-align-bottom'})
        rating = check_none( rating, '4.3 out of 5 stars' )
        
        img = i.find('img',{'class': 's-image'}).attrs['src']
        
        # data['name'].append(name)
        # data['price'].append(price + symbol)
        # data['img'].append(img)
        # data['rating'].append(rating)

        data_from_amazon['items'].append({
            'id' : ind,
            'name' : name,
            'price' : price + symbol,
            'img' : img,
            'rating' : rating
        })

    return data_from_amazon

