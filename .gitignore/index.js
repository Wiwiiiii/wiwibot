const Discord = require('discord.js')
const bot = new Discord.Client()

//Connexion du bot
bot.on('ready', function () {
  console.log("Je suis connecté !")
})

// Ecouteur
bot.on('message', message => {
  if (message.content === "Wiwi" || message.content === "wiwi" || message.content === "!wiwi" || message.content === "!Wiwi" ) {
    message.reply('Le Dieu')
  }
})

//Roll
bot.on('message', message => {
	if (message.content === "!roll"){
	const de = (Math.floor(Math.random() * 100)+1);
	if (de<25){
		message.channel.send("T'es pas un naze quand même, regarde moi ça t'as fait "+de+"... c'est ridicule.")
	}
	else if (de > 25 && de<50){
		message.channel.send("Bon, ça pas encore ça, t'es à "+de+". T'as encore du chemin.")
	}
	else if (de >50 && de<75){
		message.channel.send("T'es au dessus de la moyenne, mais bon ton qi vaut quand même que "+de+", t'affoles pas hein ...")
	}
	else{
		message.channel.send("Woaaaaaow tu sens ce roll de fou furieux ? Regarde ton roll est de "+de+" !");
	}
	
	}
})

// BDD - Commandes WiwiBot
bot.on('message', message =>{
	if (message.content === "!commandes")
		message.channel.send ("Les commandes disponnibles sont : "+
			" \n!wiwi : vous donne un petit message secret de la part du créateur de WiwiBot."+
			" \n!roll : vous permet de faire un roll entre 0 et 100."+
			" \n!commandes : vous permet de voir toutes les commandes disponnibles et leurs fonctions."+
			" \n!aide : vous permet de recevoir de l'aide si vous êtes nouveau."+
			" \n!support : vous donne le contact du créateur du bot.")
})

// BDD - Aide serveur RP
bot.on('message', message =>{
	if (message.content === "!commandes")
		message.channel.send ("Ha, enfin une nouvelle personne, c'est que je m'ennuyais un peu moi à ne rien faire ... "+
			
			)
})

bot.login('NDE0NDIzNjg0NjYxMzc5MDg0.DY7mEQ.JyyKy826AQvmIyXuHcT0dI6itZU')
