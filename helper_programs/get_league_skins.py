import urllib.request
import json
import csv

champions = []
skins = []
with urllib.request.urlopen('https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/champion.json') as response:
    # Get Champion List
    data = json.load(response)["data"]
    champions = data.keys()

for champion in champions:
    print(champion)
    link = 'https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/champion/' + champion + '.json'
    with urllib.request.urlopen(link) as response:
        data = json.load(response)["data"]
        api_skins = data[champion]["skins"]
        for skin in api_skins[1:]:
            skins.append({
                "game": "league",
                "picture": f"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{champion}_{skin['num']}.jpg",
                "price": 0,
                "item_name": skin["name"],
                "info": None
            });
    
print(skins)
with open('league_skins.csv', 'w', newline='') as csvfile:
    fieldnames = ['game','item_name','picture','price','info']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(skins)
