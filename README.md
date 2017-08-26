# NgIso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

- This build assumes you have another folder called ng-iso-deploy on the same level that you have ng-iso.
	- ng-iso-deploy contains:a git repo, .gitignore, and .gitattributes. It is the deployment folder that you pull from to update the server.
	- The various build scripts add server.js and the entire frontend dist folder to the ng-iso-deploy folder.

- It also is written for a windows machine, simple commands like copying (robocopy) and delete (del).

## Useful Commands
`ng serve` - Run in frontend development mode on port 4200.
`npm run serverLocal` - Run server on local machine (serves frontend and backend on port 8000).
`npm run deploy` - Push server & frontend assets to github.
`yarn upgrade-interactive` - Upgrade only what you want to.