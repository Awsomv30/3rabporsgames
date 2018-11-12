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

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : 3RB|PROs`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : 3RB|PROs ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`3RB|PROs | ${client.guilds.size} ${client.users.size} servers/user`,"http://twitch.tv/3RB|PROs")
client.user.setStatus("dnd")
});

    client.on('message', message => {
        var prefix = "+";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"
const Sra7a = [//////bot by Taino#6004
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',//////bot by Taino#6004
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',//////bot by Taino#6004
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',//////bot by Taino#6004
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',//////bot by Taino#6004
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',//////bot by Taino#6004
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',//////bot by Taino#6004
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
        if (message.content.startsWith(prefix + 'صراحه')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("Alpha Taino#6004")
         .setColor('RANDOM')//////bot by Taino#6004
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       }); //////bot by Taino#6004
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
if (message.content.startsWith(prefix + 'عواصم')) {
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
logger.level = 'debug'; //NOURELDIEN ALPHACODES
 
 //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
 
const playTheGame = (msg) => {
    if(runningGames.has(msg.author.id)){
        console.log(runningGames);
    }else{
        runningGames.set(msg.author.id, new connect4());
    }
};
 
 
const emojiToCol = new Map();
emojiToCol.set('\u0031\u20E3',0);
emojiToCol.set('\u0032\u20E3',1);
emojiToCol.set('\u0033\u20E3',2); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0034\u20E3',3); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0035\u20E3',4); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0036\u20E3',5); //NOURELDIEN ALPHACODES
emojiToCol.set('\u0037\u20E3',6); //NOURELDIEN ALPHACODES
let theMsgWeWorkWith;
 
const createDisplayGrid = (grid) => {
    let theCurrentGrid = grid.getGridForDisplay();
    let msgTxt = "";
    for(let row of theCurrentGrid){  
        msgTxt += row.join('')
        .replace(/0/g,':white_large_square: ')
        .replace(/Y/g,':red_circle: ')
        .replace(/R/g,':large_blue_circle: ');
        msgTxt+='\n'; //NOURELDIEN ALPHACODES
    }
    return msgTxt;
}
 //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
const createMessageAndCollector = (message) => {
    message.channel.send(createDisplayGrid(runningGames.get(message.author.id)))
    .then(function(msg){
        theMsgWeWorkWith = msg;
        msg.react('\u0031\u20E3').then(() => { //NOURELDIEN ALPHACODES
            msg.react('\u0032\u20E3').then(() => {
                msg.react('\u0033\u20E3').then(() => {
                    msg.react('\u0034\u20E3').then(() => {
                        msg.react('\u0035\u20E3').then(() => {
                            msg.react('\u0036\u20E3').then(() => {
                                msg.react('\u0037\u20E3');
                            })
                        })
                    })
                })
            }) //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
        });
        let filter = function(reaction, user){
            return user.id != bot.user.id && user.id == message.author.id;
        };
        let collector = msg.createReactionCollector(filter, { time: 60000 });
        collector.on('collect', function(reaction){
            console.log(theMsgWeWorkWith);
            if(emojiToCol.has(reaction.emoji.name)){
                let g = runningGames.get(message.author.id);
                g.play('R', emojiToCol.get(reaction.emoji.name));
                g.IA_cleanSmartPlay('Y');
                if(g.isWon()||g.isDraw()){
                    theMsgWeWorkWith.delete()
                    .then(()=>{
                        collector.stop();
                        message.channel.send(createDisplayGrid(g));
                        if(g.isDraw())
                            message.channel.send(`Match nul`);
                        if(g.isWon())
                            message.channel.send(`:tada: | **Congratulations ${((g._winner == 'Y')?':red_circle:':':large_blue_circle:')} won the game !`);
                        runningGames.delete(message.author.id);
                    })
                    .catch(console.log("Cannot delete"));
                }
                else{
                    theMsgWeWorkWith.delete()
                    .then(()=>{ //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
                        collector.stop();
                        createMessageAndCollector(message);
                    })
                    .catch(console.log("Cannot delete"));
                }
                console.log(g);
            }
        });
        collector.on('end', function(collected, reason){
     
        });
    });
}; //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
 
// Initialize Discord Bot
const bot = new Discord.Client();
 
/* Bot stuff, creating ready event*/
bot.on('ready', (evt) => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
});
 
bot.on('message', (message) => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `prefix`
    let prefix = "=";
    if(message.author.id == bot.user.id)
        return;
    if (message.content.substring(0, 1) == prefix) {  
        let args = message.content.substring(prefix.length).split(' ');
        let cmd = args[0];
        args = args.splice(1);
        switch(cmd) { //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
            case 'c4':
                message.channel.send(`:fire: **${message.author}** VS **NourBot** :fire:`)
                playTheGame(message);
                createMessageAndCollector(message);
                ///////////////////////////////////////////
               /*
                theMsgWeWorkWith = message.channel.send('Play')
                .then(function(msg){
                    msg.react('\u0031\u20E3').then(() => {
                        msg.react('\u0032\u20E3').then(() => {
                            msg.react('\u0033\u20E3').then(() => {
                                msg.react('\u0034\u20E3').then(() => {
                                    msg.react('\u0035\u20E3').then(() => {
                                        msg.react('\u0036\u20E3').then(() => {
                                            msg.react('\u0037\u20E3');
                                        })
                                    })
                                })
                            })
                        })
                    });
                    var filter = function(reaction, user){
                        return user.id != bot.user.id;
                    };
                    const collector = msg.createReactionCollector(filter, { time: 60000 });
                    collector.on('collect', function(reaction){
                        if(emojiToCol.has(reaction.emoji.name)){
                            let g = runningGames.get(message.author.id);
                            g.play('R', emojiToCol.get(reaction.emoji.name));
                            g.IA_cleanSmartPlay('Y');
                            if(g.isWon())
                                message.channel.send("PArtie terminée");
                            console.log(g);
                        }
                    });
                    collector.on('end', function(collected, reason){
                 
                    });
                });*/
                ////////////////////////////////////////
            break; //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
            case 'c4play':
                console.log(runningGames.get(message.author.id));
            break;
         }
     }
}); //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES //NOURELDIEN ALPHACODES
 
//////////////////
var cats = [
 
"https://cdn.discordapp.com/attachments/477840502583066624/489925349480595471/c8458dcb83ef3f51eb67871656460acda8008de1_hq.jpg",
"https://cdn.discordapp.com/attachments/471048168734326784/489926293945843722/D986D983D8AA-D8B9D986-D8A7D984D8A8D986D8A7D8AA-4.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926344956837918/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-130.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926377219555328/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926396878127114/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926441497001984/75e9de50bbe56adfa2dd0d79765618f3_400x400.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926523143585793/maxresdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926558975262721/D986D983D8AAD8A9-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926561441513482/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926572699025408/83efa282386a3c97b55b554e12034f09.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926573823361037/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927028988968970/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927039474991117/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927054238679052/hqdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927075751395338/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927100300525568/screen-16.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927135952240666/D986D983D8AAD987.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927196056748032/1462535501-kololk.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927216474357771/52ec73eb7867b5d69fe2573c695ddec0ef59aaae_00.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927223055220736/10352280_326716524148020_473570926368633860_n.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927225953615872/84.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927310246674432/D8B5D988D8B1-D986D983D8AA-D985D8B6D8ADD983D8A9-D8ACD8AFD8A7-500x380.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927542812180493/D8B5D988D8B1-D986D983D8AA-2.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927575783735316/750a293b4222503c2c82ea351795d82d94d394bd_hq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927587653615626/joke.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927610260914178/D8B5D988D8B1-D986D983D8AA-32.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927618972352547/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927638794764288/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927661502857226/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927734458581002/665.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927737738526721/D986D983D8AA-D985D8B6D8ADD983D8A9-5.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927741555343405/5L756426.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927775168233493/27-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928045449314356/D986D983D8AA.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928124188852226/C_0g73iVYAARXkq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928134347587604/almastba.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928135379517440/e3b1c8571e56805fc07e776eb5fd46df-best-funny-images-arabic-jokes.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928158141743112/PIC-724-1452961611-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928201116581888/do.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928210126077955/21581874-v2_xlarge.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928236390940698/D986D983D8AA-D985D8B6D8ADD983D8A9-3.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928244293009408/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-128.png"
]
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
