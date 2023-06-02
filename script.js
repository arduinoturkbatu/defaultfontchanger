// ==UserScript==
// @name         Default Font Changer
// @namespace    http://tampermonkey.net/
// @version      1
// @description  This will change system-ui to Inter to make it look bettter!
// @author       Arduino Turk Batu
// @match        */*
// @icon         https://raw.githubusercontent.com/arduinoturkbatu/defaultfontchanger/main/fontchangerlogo.png
// @grant        none
// ==/UserScript==

let style=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap');
`
let s;
document.head.append(s=document.createElement('style'))
s.innerHTML=style


for(let sheet of document.styleSheets){
	try{
		for(let rule of sheet.cssRules){
			try {
				if(rule.style.fontFamily.length>0){
                    var newRule = rule.style.fontFamily.replace(/system-ui/gi,"Inter");
                    var anotherReplaceRule = newRule.replace(/"Segoe UI"/gi,"Inter");
					rule.style.fontFamily=anotherReplaceRule;
				}
			} catch (error) {

			}
		}
	}catch(error){}
}
