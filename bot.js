require('dotenv').config()
const debug = require('./helpers')
const token = process.env.TOKEN
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Выберите страну.', {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: 'Азербайджан',
                    callback_data: 'Aze',
                },
                {
                    text: 'Австралия',
                    callback_data: 'Aus',
                },
            ]],

        },
    })
})
bot.on('callback_query', (query) => {
    const [prefix] = query.data.split()
    const chatId = query.message.chat.id
    if (prefix === 'Aus') {
        bot.sendMessage(chatId, 'Тип вакцины', {
            reply_markup: {
                keyboard: [
                    ['Корь, паротит, краснуха (КПК)', 'Дифтерия-столбняк'],
                    ['Грипп', 'Бешенство']
                ]
            }
        })

    } else if (prefix === 'Aze') {
        try {
            bot.on('message', msg => {
                bot.sendMessage(query.msg.chat.id, 'Тип вакцины', {
                    reply_markup: {
                        keyboard: [
                            ['Корь, паротит, краснуха(КПК)', 'Дифтерия-столбняк'],
                            ['Грипп', 'Гепатит А'],
                            ['Брюшной тиф', 'Гепатит В'],
                            ['Бешенство', 'Полиомиелит'],
                        ]
                    }
                })
            })

            if (msg.text === "Корь, паротит, краснуха(КПК)") {
                bot.sendMessage(chatId, 'Для всех путешественников, родившихся после 1956 года, рекомендуется сделать 2 дозы вакцины, если до этого данная прививка не делалась.')
            } else if (msg.text === 'Дифтерия-столбняк') {
                bot.sendMessage(chatId, 'Прививка делается раз в 10 лет. Проверьте перед поездкой свою карточку прививок.')
            }
        } catch (error) {
            console.log(error)
        }
    }
})












