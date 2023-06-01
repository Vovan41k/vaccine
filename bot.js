require('dotenv').config()
const dVaccine = require('./d-vaccine.json')
const countries = require('./countries.json')
const token = process.env.TOKEN
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });

const splitToRows = (items, count) => {
    const rows = []
    for (let i = 0; i < items.length; i += count) {
        const row = items.slice(i, i + count);
        rows.push(row)
    }
    return rows;
}

bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Выберите страну.', {
        reply_markup: {
            inline_keyboard: splitToRows(countries, 3)
                .map((countriesRow) => {
                    return countriesRow.map(country => {
                        return {
                            text: country.name,
                            callback_data: `c:${country.name}`
                        }
                    })
                })
        },
    })
})

bot.on('callback_query', (query) => {
    try {
        const [prefix, countryName] = query.data.split(':') // ['c','Азербайджан']
        const chatId = query.message.chat.id
        if (prefix === 'c') {
            const country = countries.find(countryItem => countryItem.name === countryName)

            if (country) {
                bot.sendMessage(chatId, 'Тип вакцины', {
                    reply_markup: {
                        keyboard: [
                            country.vaccines,
                        ]
                    }
                })
            } else {
                bot.sendMessage(chatId, `У меня нет информации по стране ${countryName}`)
            }
        }
    } catch (error) {
        console.log(error)
    }
})

bot.on('message', msg => {
    try {
        const chatId = msg.chat.id

        if (dVaccine[msg.text]) {
            bot.sendMessage(chatId, dVaccine[msg.text])
        }
    } catch (error) {
        console.log(error)
    }
})
