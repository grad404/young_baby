const Telegraf = require(`telegraf`);
const bot = new Telegraf(`1733328821:AAHhQ6WB-dgj4azRZjvQFK_DbKH-waHfxr0`);

const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

bot.use(async (ctx, next) => {
    console.log(new Date());
    await next(ctx);
});

bot.catch((err, ctx) => {
    console.log(`ERROR`, err);
})

const Markup = require('telegraf/markup')




//МЕНЮ
bot.start(async (ctx) => {
    await ctx.reply('📰 Главное меню:', {
        reply_markup: { keyboard: [
                [{text: '💵 Приобрести доступ'}, {text: '⌛️ Мои подписки'}]
            ] ,
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
});


//ОТВЕТ НА МЕНЮ
bot.on('text', async ctx => {
    const text = ctx.message.text
    if ( text === "💵 Приобрести доступ" ) await     ctx.reply('ℹ️ Чтобы ознакомиться с каналом, выбери необходимый, нажав на соответствующую кнопку', {
        reply_markup: {
            inline_keyboard: [
                [{text: '🔥 ВСЕ ВКЛЮЧЕНО (СКИДКА 80%) 🔥', callback_data: 'level1'}],
                [{text: '🤫 ДЕТСКОЕ (СКИДКА 77%) 🤫', callback_data: 'level2'}],
                [{text: '💦 MIX (СКИДКА 54%) 💦', callback_data: 'level3'}],
                [{text: '👨‍👧 ПАПА И ДОЧЬ (СКИДКА 60%) 👨‍👧', callback_data: 'level4'}],
                [{text: '👩‍👦 МАМА И СЫН (СКИДКА 59%) 👩‍👦', callback_data: 'level5'}],
                [{text: '🌹 СТУДЕНТКИ (СКИДКА 67%) 🌹', callback_data: 'level6'}],
                [{text: '💿 700ГБ (СКИДКА 23%) 💿', callback_data: 'level7'}],
                [{text: '👧 МИНИ ПАК 👧', callback_data: 'level8'}],
            ]
        }
    })

    if ( text === "⌛️ Мои подписки" ) await     ctx.reply('⌛️ У Вас нет действующей подписки.\n' +
        '\n' +
        'Ознакомьтесь с каналами, нажав на соответствующую кнопку.', {
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Купить подписку', callback_data: 'back'}],
            ]
        }
    })
});



//ответить на "ВСЕ ВКЛЮЧЕНО(СКИДКА 80%)"
bot.action(/level1/, async (ctx) => {

    await ctx.reply(`Тариф: <b>🔥 ВСЕ ВКЛЮЧЕНО (СКИДКА 80%) 🔥</b>

Цена: <b>525 RUB</b>
Срок действия (дней): <b>бессрочно </b>

Описание тарифа: 
➡️ Все наши тарифы`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata1'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});


//ВСЕ ВКЛЮЧЕНО(СКИДКА 80%) = выберите способ оплаты
bot.action(/oplata1/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi1'}, {text: '💸 ЮMoney', callback_data: 'yoomoney1'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//ВСЕ ВКЛЮЧЕНО(СКИДКА 80%) = qiwi
bot.action(/qiwi1/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://oplata.qiwi.com/form?invoiceUid=1952d5ad-a9b0-4926-8a78-3699ab03d822"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});

//ВСЕ ВКЛЮЧЕНО(СКИДКА 80%) = yoomoney
bot.action(/yoomoney1/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://yoomoney.ru/bill/pay/urio0QM8NyE.210423"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});

//Я оплатил
bot.action(/good/, async (ctx) => {
        ctx.answerCbQuery('Вы не оплатили счет ❌',true)
});



//Кнопка "Назад"
bot.action(/back/, async (ctx) => {
    await     ctx.reply('ℹ️ Чтобы ознакомиться с каналом, выбери необходимый, нажав на соответствующую кнопку', {
        reply_markup: {
            inline_keyboard: [
                [{text: '🔥 ВСЕ ВКЛЮЧЕНО (СКИДКА 80%) 🔥', callback_data: 'level1'}],
                [{text: '🤫 ДЕТСКОЕ (СКИДКА 77%) 🤫', callback_data: 'level2'}],
                [{text: '💦 MIX (СКИДКА 54%) 💦', callback_data: 'level3'}],
                [{text: '👨‍👧 ПАПА И ДОЧЬ (СКИДКА 60%) 👨‍👧', callback_data: 'level4'}],
                [{text: '👩‍👦 МАМА И СЫН (СКИДКА 59%) 👩‍👦', callback_data: 'level5'}],
                [{text: '🌹 СТУДЕНТКИ (СКИДКА 67%) 🌹', callback_data: 'level6'}],
                [{text: '💿 700ГБ (СКИДКА 23%) 💿', callback_data: 'level7'}],
                [{text: '👧 МИНИ ПАК 👧', callback_data: 'level8'}],
            ]
        }
    })
});

//.............................................................................................................

//ответить на "🤫 ДЕТСКОЕ (СКИДКА 77%) 🤫"
bot.action(/level2/, async (ctx) => {

    await ctx.reply(`Тариф: <b>🤫 ДЕТСКОЕ (СКИДКА 77%) 🤫</b>
    
Цена: <b>465 RUB</b>
Срок действия (дней): <b>бессрочно </b>

Описание тарифа: 
➡️ Вся жесть тут`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata2'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});


//🤫 ДЕТСКОЕ (СКИДКА 77%) 🤫 = выберите способ оплаты
bot.action(/oplata2/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi2'}, {text: '💸 ЮMoney', callback_data: 'yoomoney2'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//🤫 ДЕТСКОЕ (СКИДКА 77%) 🤫 = qiwi
bot.action(/qiwi2/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://oplata.qiwi.com/form?invoiceUid=255f651d-6395-4aa9-bacc-ebfb2b6dbc7e"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});



//🤫 ДЕТСКОЕ (СКИДКА 77%) 🤫 = yoomoney
bot.action(/yoomoney2/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://yoomoney.ru/bill/pay/ktE62wN1h9I.210423"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});

//.....................................................................................................


//ответить на "💦 MIX (СКИДКА 54%) 💦"
bot.action(/level3/, async (ctx) => {

    await ctx.reply(`Тариф: <b>💦 MIX (СКИДКА 54%) 💦</b>

Цена: <b>359 RUB</b>
Срок действия (дней):<b> бессрочно </b>

Описание тарифа: 
➡️ Сюда входит тариф(папа и дочь, мамы и сын, школьницы)`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata3'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});



//💦 MIX (СКИДКА 54%) 💦 = выберите способ оплаты
bot.action(/oplata3/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi3'}, {text: '💸 ЮMoney', callback_data: 'yoomoney3'}],
            ]
        },
        parse_mode: "HTML"
    });
});



//💦 MIX (СКИДКА 54%) 💦 = qiwi
bot.action(/qiwi3/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://oplata.qiwi.com/form?invoiceUid=20eb61bc-d435-45cc-92e3-00629a88f205"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//💦 MIX (СКИДКА 54%) 💦 = yoomoney
bot.action(/yoomoney3/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://yoomoney.ru/bill/pay/A1RAUgOAbwI.210423"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//......................................................................................................................

//ответить на "👨‍👧 ПАПА И ДОЧЬ (СКИДКА 60%) 👨‍👧"
bot.action(/level4/, async (ctx) => {

    await ctx.reply(`Тариф: <b>👨‍👧 ПАПА И ДОЧЬ (СКИДКА 60%) 👨‍👧</b>
    
Цена: <b>279 RUB</b>
Срок действия (дней): <b>бессрочно</b>

Описание тарифа: 
➡️ Орно папы и дочки`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata4'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});


//👨‍👧 ПАПА И ДОЧЬ (СКИДКА 60%) 👨‍👧 = выберите способ оплаты
bot.action(/oplata4/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi4'}, {text: '💸 ЮMoney', callback_data: 'yoomoney4'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//👨‍👧 ПАПА И ДОЧЬ (СКИДКА 60%) 👨‍👧 = qiwi
bot.action(/qiwi4/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://oplata.qiwi.com/form?invoiceUid=c372b9a9-1249-4693-9bf5-16130e645bf4"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//👨‍👧 ПАПА И ДОЧЬ (СКИДКА 60%) 👨‍👧 = yoomoney
bot.action(/yoomoney4/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://yoomoney.ru/bill/pay/VFaCHAOOD7o.210423"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//......................................................................................................................


//ответить на "👩‍👦 МАМА И СЫН (СКИДКА 59%) 👩‍👦"
bot.action(/level5/, async (ctx) => {

    await ctx.reply(`Тариф: <b>👩‍👦 МАМА И СЫН (СКИДКА 59%) 👩‍👦</b>

Цена: <b>279 RUB</b>
Срок действия (дней): <b>бессрочно </b>

Описание тарифа: 
➡️ Орно мамы и сына`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata5'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});


//👩‍👦 МАМА И СЫН (СКИДКА 59%) 👩‍👦 = выберите способ оплаты
bot.action(/oplata5/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi4'}, {text: '💸 ЮMoney', callback_data: 'yoomoney4'}],
            ]
        },
        parse_mode: "HTML"
    });
});

//......................................................................................................................

//ответить на "🌹 СТУДЕНТКИ (СКИДКА 67%) 🌹"
bot.action(/level6/, async (ctx) => {

    await ctx.reply(`Тариф: <b>🌹 СТУДЕНТКИ (СКИДКА 67%) 🌹</b>

Цена: <b>229 RUB</b>
Срок действия (дней): <b>бессрочно </b>

Описание тарифа: 
➡️ 700 ГБ отборных видео соольницами(сливы, ебут в классе, и много всего интересного)`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata6'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});


//🌹 СТУДЕНТКИ (СКИДКА 67%) 🌹 = выберите способ оплаты
bot.action(/oplata6/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi6'}, {text: '💸 ЮMoney', callback_data: 'yoomoney6'}],
            ]
        },
        parse_mode: "HTML"
    });
});

//🌹 СТУДЕНТКИ (СКИДКА 67%) 🌹 = qiwi
bot.action(/qiwi6/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://oplata.qiwi.com/form?invoiceUid=5835dc26-9f55-424b-8f73-98ab0d18d32b"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//🌹 СТУДЕНТКИ (СКИДКА 67%) 🌹 = yoomoney
bot.action(/yoomoney6/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://yoomoney.ru/bill/pay/rGQS4wOZybs.210423"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});

//......................................................................................................................

//ответить на "💿 700ГБ (СКИДКА 23%) 💿"
bot.action(/level7/, async (ctx) => {

    await ctx.reply(`<b>Тариф: 💿 700ГБ (СКИДКА 23%) 💿</b>
    
Цена: <b>200 RUB</b>
Срок действия (дней): <b>бессрочно </b>

Описание тарифа: 
➡️ 700гб облако с ежедневными пополнениями`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata7'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});


//💿 700ГБ (СКИДКА 23%) 💿 = выберите способ оплаты
bot.action(/oplata7/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi7'}, {text: '💸 ЮMoney', callback_data: 'yoomoney7'}],
            ]
        },
        parse_mode: "HTML"
    });
});



//💿 700ГБ (СКИДКА 23%) 💿 = qiwi
bot.action(/qiwi7/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://oplata.qiwi.com/form?invoiceUid=bb230d29-262c-4624-9511-98e1509c163c"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//💿 700ГБ (СКИДКА 23%) 💿 = yoomoney
bot.action(/yoomoney7/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://yoomoney.ru/bill/pay/nRHReQOjDyw.210423"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});

//......................................................................................................................


//ответить на "👧 МИНИ 👧"
bot.action(/level8/, async (ctx) => {

    await ctx.reply(`Тариф: <b>👧 МИНИ ПАК 👧</b>
    
Цена: <b>99 RUB</b>
Срок действия (дней): <b>бессрочно </b>

Описание тарифа: 
➡️ 300 пробных видео`,{
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{text: '💳 Оплатить', callback_data: 'oplata8'}],
                [{text: '◀️ Назад', callback_data: 'back'}],
            ]
        }
    });
});


//👧 МИНИ 👧 = выберите способ оплаты
bot.action(/oplata8/, async (ctx) => {

    await ctx.reply(`Выберите способ оплаты 💳`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '🥝 Qiwi', callback_data: 'qiwi8'}, {text: '💸 ЮMoney', callback_data: 'yoomoney8'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//👧 МИНИ 👧 = qiwi
bot.action(/qiwi8/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://oplata.qiwi.com/form?invoiceUid=81319138-01d0-4148-8553-268617dbc5e0"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});


//👧 МИНИ 👧 = yoomoney
bot.action(/yoomoney8/, async (ctx) => {

    await ctx.reply(`✅ Счёт на оплату сформирован. Доступы к закрытым сообществам будут открыты, как только Вы оплатите его.`,{
        reply_markup: {
            inline_keyboard: [
                [{text: '✅ Перейти к оплате', url: "https://yoomoney.ru/bill/pay/Dgmz1gOowFI.210423"}],
                [{text: '🔑 Я оплатил', callback_data: 'good'}],
            ]
        },
        parse_mode: "HTML"
    });
});




bot.use(ctx => ctx.reply('Я ещё не знаю как ответить на эту команду 👾'))

bot.launch().then(res => {
    console.log(`БОТ РАБОТАЕТ`);
})
    .catch(err => console.log(err));
