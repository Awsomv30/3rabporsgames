const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('message', message => {
    if (message.content == "+play") {
        var x = ["3RB|PROs",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
];
        var x2 = ['DreamKing',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "+امثال") {
        var x = ["أذا ذل رويال فهو ...",
"الإتحاد ...",
"الناس سواسية كأسنان ...",
"ما أشبه الليله",
"البعد ...",
"الماء أهون موجود وأعز ...",
"الهزيمة تحل ...",//////bot by Taino#6004
"العقل ...",
"البطنة تزيل ...",
"اللبيب بالإشارة ...",
"اخطب لابنتك ولا تخطب ...",
"أعز من الولد ولد ...",
"القرد في عين أمه ...",
"الكتاب يقرأ من ...",
"آخر الحياة ...",
"أكرم نفسك عن كل",
"العز في نواصي",
];
        var x2 = ['ذليل',
        "قوة",
        "المشط",//////bot by Taino#6004
        "بالبارحة",
        "جفاء",
        "مفقود",
        "العزيمة",
        "زينة",
        "الفطنة",
        "يفهم",
        "لابنك",
        "الولد",
        "غزال",
        "عنوانه",
        "الموت",
        "دنيء",
        "الخيل",
        //////bot by Taino#6004
       
       
       
        ];
       
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {//////bot by Taino#6004
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
       
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })//////bot by Taino#6004
    }
})
/////////////////////////////
 
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith('+عواصم')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
const type = require('./3wasem/3wasem.json');
const item = type[Math.floor(Math.random() * type.length)]; //////bot by Taino#6004
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**اديك 15 ثاني�� لتوجد العاصمه الصحيحه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | Legend GaMerZ Bot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**اكتب عاصمه: ${item.type}**`)
 
    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {//////bot by Taino#6004
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`);
 
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author;
            points[won.id].points++;
          })//////bot by Taino#6004
          .catch(collected => {
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })//////bot by Taino#6004
}
});
 
//============================ الجيسون
 
[
    {
        "type": "العراق",
        "answers": ["بغداد"]
    },//////bot by Taino#6004
    {
        "type": "مصر",
        "answers": ["القاهرة"]
    },
    {
        "type": "سوريا",
        "answers": ["دمشق"]
    },
    {//////bot by Taino#6004
        "type": "السعودية",
        "answers": ["الرياض"]
    },
    {
        "type": "اليمن",
        "answers": ["صنعاء"]
    },
    {
        "type": "السودان",
        "answers": ["الخرطوم"]//////bot by Taino#6004
    },
    {
        "type": "الاردن",
        "answers": ["عمان"]
    },
    {
        "type": "ليبيا",
        "answers": ["طرابلس"]
    },//////bot by Taino#6004
    {
        "type": "البحرين",
        "answers": ["المنامة"]
    }
]//////bot by Taino#6004
/////////////////
const Discord = require('discord.js');
const logger = require('winston'); //NOURELDIEN ALPHACODES
const connect4 = require('./connect4/connect4.js');
//NOURELDIEN ALPHACODES
const runningGames = new Map(); //NOURELDIEN ALPHACODES
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

client.on('message', message => {
           if (message.content.startsWith("+hack")) {//////bot by Taino#6004
             if (message.author.bot) return
                  message.delete();
                    let args = message.content.split(' ').slice(1);
                          let virusname = args.join(' ');//////bot by Taino#6004
                        if (virusname < 1) {
                            return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                            }
                        message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
                    setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
                    }, 1000)
                   setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
                    }, 2000)
                  setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
                    }, 3000)
                       setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
                    }, 4000)
                     setTimeout(function() {//////bot by Taino#6004
                      m.delete()
                  }, 5000)//////bot by Taino#6004
                    setTimeout(function() {
                      message.channel.send('تم تهكيرك')
                  }, 6000)
                  });
                }
        });
//////////////////////////////////////////
var cats = [
 
      "https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
      ]
 client.on('message', message => {
              var args = message.content.split(" ").slice(1);//////bot by Taino#6004
          if(message.content.startsWith('+هل تعلم')) {
               var cat = new Discord.RichEmbed()
      .setImage(cats[Math.floor(Math.random() * cats.length)])//////bot by Taino#6004
      message.channel.sendEmbed(cat);
          }//////bot by Taino#6004
      });
//////////////////////////////////////////

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',//////bot by Taino#6004
   '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',//////bot by Taino#6004
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',//////bot by Taino#6004
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',//////bot by Taino#6004
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',//////bot by Taino#6004
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',//////bot by Taino#6004
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',//////bot by Taino#6004
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('+مريم')) {//////bot by Taino#6004
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")//////bot by Taino#6004
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)//////bot by Taino#6004
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
