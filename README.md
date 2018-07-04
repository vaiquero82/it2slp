# DEPLOY
installiere electron(npm install sollte reichen da es in den dependencies eingetragen ist) and electron-packager

`npm install electron-packager --save-dev`

dann kann man entweder mit 
`npm run electron`  die app starten

mit 

`npm run package-win`
`npm run package-mac`
`npm run package-linux`

jeweils fuer die verschiedene Systeme bauen. im Ordner "release-builds" liegt dann die APP.

# IT2SLP      changed for commit-jira-test                  
Project for it2

# Charts
https://github.com/gmazzamuto/ng2-google-charts

# Material Style
https://material.angular.io/


Navigation/Routing  siehe `app-routing.module.ts`

# Folders

<deprecated, muss angepasst werden>
# Folders
`it2slp/src/`                 App-Daten

`it2slp/src/app`              Root-Component

`it2slp/src/app`              Root-Component

`it2slp/src/app/line-chart`   Diagramm

`it2slp/src/app/mainview`     Beispiel implementierung für AWS Machine LEarning

`it2slp/src/app/top-bar`      buttonleiste 



Angular Quick Start
https://angular.io/guide/quickstart

Angular Heroes Tutorial
https://angular.io/tutorial

Flexbox - Layout
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

**Projekt initialisieren**

- Node.js installieren(evtl npm, sollte aber schon mit drin sein)
- im Git projektverzeichnis, also da wo das tool liegt, ein 

`$npm install`    ausführen, npm installiert nun alle benötigten module die im projekt genutzt werden

- mit `$npm start`  oder `$ng serve`   wird der server gestartet, über localhost:4200 wird einem das projekt gezeigt, wenn änderungen am cod evorgenommen werden, wird entsprechend neu gebaut und änderungen gleich on the fly angezeigt

-------
**Git Workflow**

git repo holen, es wirdalso das gib repo lokal angelegt

`$git clone https://github.com/vaiquero82/it2slp`

- aktuellen stand pullen(im root verzeichnis ausführen)

`$git pull`           //hohlt aktuellen stand aus dem repo

`$git commit - "Blalba"` .  //legt neuen State an

`$git push`     //aktueller state wird ins REPO gepsichert. erst ab jetzt für die anderen per $git pull ladbar





bitte schön regelmäßig committen, pushen und pullen xD
