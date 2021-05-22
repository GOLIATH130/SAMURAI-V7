exports.wait = () => {
	return`*「 AWANTA 」 WE NO SOY FLASH*`
}

exports.succes = () => {
	return`*「 EXITO 」*`
}

exports.lvlon = () => {
	return`*「 PERMITIDO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 NO PERMITE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SU NIVEL SIGUE VACÍO*`
}

exports.lvlnoon = () => {
	return`*LOS NIVELES DE GRUB NO SE HAN ACTIVADO*`
}

exports.noregis = () => {
	return`*「 NO REGISTRO 」*\n\n*Use para registrarse ${prefix}daftar nombre|edad* \n*Ejemplo ${prefix}daftar SMBOT|17*`
}

exports.rediregis = () => {
	return`*「 YA REGISTRADO」*\n\n*Registrado 👌*`
}

exports.stikga = () => {
	return`*Bueno, no lo intentes de nuevo en unos momentos*`
}

exports.linkga = () => {
	return`*ENLACE INVALIDO*`
}

exports.groupo = () => {
	return`*「 GROUP ON 」*`
}

exports.ownerb = () => {
	return`*「 DUEÑO BOT ON 」*`
}

exports.ownerg = () => {
	return`*「 DUEÑO DEL GRUPO ON 」*`
}

exports.admin = () => {
	return`*「 ADMINS DEL GRUPO UN 」*`
}

exports.badmin = () => {
	return`*「 BOT DEBE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW INACTIVO*`
}

exports.bug = () => {
	return`*Los problemas han sido reportados al propietario, informes falsos o juegos de juego no serán respondidos a.*`
}

exports.wrongf = () => {
	return`*Formato/texto incorrecto en blanco*`
}

exports.clears = () => {
	return`*Clear con Éxito*`
}

exports.pc = () => {
	return`*「 REGÍSTRATE 」*\n\nPara averiguar si usted ha registrado silahkah mensaje de verificación que envié \n\nNOTE:\n*Si aún no tienes el mensaje. significa que no ha guardado el número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATOS DE PAÍS BOT USUARIO 」*\n\nYa está registrado con los datos \n\n➢ Nombre : ${namaUser}\n➢  Numero : wa.me/${sender.split("@")[0]}\n➢ Edad : ${umurUser}\n➢ Hora : ${time}\n\n*Serial*\n➢ ${serialUser}`
}

exports.cmdnf = (prefix, command) => {
	return`Comando invalido *${prefix}${command}* Porfavor use  *${prefix}smbot para ver el menu!*`
}

exports.owneresce = (pushname) => {
	return`*Lo siento, pero ${pushname}No eres dueño del scrip 🌝*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*arrepentido ${pushname} Su nivel no es suficiente*\n\n*➢ Nivel Mu : ${getLevelingLevel(sender)}*\n*➢ Tipo de comando : ${command}*\n*➢ Requisitos de nivel  : ${aha}*`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*arrepentido ${pushname} Su nivel no es suficiente*\n\n*➢ Nivel Mu : ${getLevelingLevel(sender)}*\n*➢ Tipo de comando : ${command}*\n*➢ Requisitos de nivel  : ${ahb}*`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*arrepentido ${pushname} Su nivel no es suficiente*\n\n*➢ Nivel Mu : ${getLevelingLevel(sender)}*\n*➢ Tipo de comando : ${command}*\n*➢ Requisitos de nivel  : ${ahc}*`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*arrepentido ${pushname} Su nivel no es suficiente*\n\n*➢ Nivel Mu : ${getLevelingLevel(sender)}*\n*➢ Tipo de comando : ${command}*\n*➢ Requisitos de nivel  : ${ahd}*`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*arrepentido ${pushname} Su nivel no es suficiente*\n\n*➢ Nivel Mu : ${getLevelingLevel(sender)}*\n*➢ Tipo de comando : ${command}*\n*➢ Requisitos de nivel  : ${ahe}*`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*arrepentido ${pushname} Su nivel no es suficiente*\n\n*➢ Nivel Mu : ${getLevelingLevel(sender)}*\n*➢ Tipo de comando : ${command}*\n*➢ Requisitos de nivel : ${ahf}*`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SEGURO 」*

┌❏ *Nombre*
└➢ ${pushname}

┌❏ *Número*
└➢ ${sender.split("@")[0]}

┌❏ *Xp*
└➢ ${getLevelingXp(sender)}

┌❏ *Grupo*
└➢ ${role}

┌❏ *Nivel*
└➢ ${getLevel} ➢ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Arrepentido ${pushname} Su límite hoy ha aumentado*\n*contacto * : wa.me/573184581139`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DE CUENTA 」*
Su limite : ${limitCounts}

Nota : Para conseguir el límite. Puede pasar el nivel a través del grupo o buylimit.
`}

exports.satukos = () => {
	return`*Añadir parámetros 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*「 SMBOT 」*\n  ├─ ❏ *Nombre* : ${pushname}\n  ├─ ❏ *Número* : ${sender.split("@")[0]}\n  └─ ❏ *edad* : ${uangkau}
`}
