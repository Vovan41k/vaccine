const dVaccine = {
     "Корь, паротит, краснуха (КПК)": 'Для всех путешественников, родившихся после 1956 года, рекомендуется сделать 2 дозы вакцины, если до этого данная прививка не делалась.',
     'Дифтерия-столбняк': 'Прививка делается раз в 10 лет. Проверьте перед поездкой свою карточку прививок.',
     'Грипп': 'Сезонная прививка рекомендуется всем путешественникам в период с ноября по апрель. В особой зоне риска находятся дети и путешественники старше 65 лет.',
     'Гепатит А': 'Наличие данной прививки рекомендовано всем путешественникам.',
     'Брюшной тиф': 'Рекомендуется пройти вакцинацию тем путешественникам, которые могут употреблять пищу или питье за пределами крупных ресторанов и отлей.',
     'Гепатит В': 'Наличие данной прививки рекомендовано всем путешественникам.',
     'Бешенство': 'Данная прививка рекомендована тем путешественникам, которые планируют проведение своего отдыха в сельской местности, в местах скопления животных, что повышает риск укусов, а также планирующих посещение мест, где высок риск столкновения с летучими мышами.',
     'Полиомиелит': 'Все дети должны быть привиты в соответствии с возрастом. Любой взрослый, не завершивший стандартную серию прививок, должен сделать это до выезда. Однократная ревакцинация требуется для взрослых людей, которые получили законченный комплекс вакцинации и ревакцинации в детстве и больше вакцинацию против полиомиелита не получали.',
}

const countries = [
    {
        name: 'Австралия', 
        vaccines: ['Корь, паротит, краснуха (КПК)', 'Дифтерия-столбняк','Грипп', 'Бешенство']
    },
    {
        name:'Азербайджан',
        vaccines: ['Корь, паротит, краснуха (КПК)', 'Дифтерия-столбняк',
            'Грипп', 'Гепатит А',
            'Брюшной тиф', 'Гепатит В',
            'Бешенство', 'Полиомиелит',]
    }
]
// console.log(countries)

const country = countries[0]
const countryName = Object.keys(country)[0]
console.log(country[countryName])