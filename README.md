# Gauge+Taiko with Javascript

## Settings
1- Installing Gauge on Windows
Download gauge-1.1.1-windows.x86_64.exe from https://github.com/getgauge/gauge/releases adress.
When the download is finished, install the gauge.

2- Installing NODEJS 
Download NodeJS from https://nodejs.org/en/download/ adress.
When the download is finished, install NodeJS.

3- Installing VS Code
Download VS Code from https://code.visualstudio.com/download adress.
When the download is finished, install the VS Code.


4- Installing Gauge extension for VS Code
Install the following Gauge extension for VS Code.
Installation Link : https://marketplace.visualstudio.com/items?itemName=getgauge.gauge
On the extension page that opens in the IDEs, click the install button

5- Pull the project to your local. and open project with VS Code.

- Go to the directory where you will create the project.
- Create a /repos folder under your directory.
- Connect github and go to  https://github.com/multinetinventiv/inventiv-test 
- Select develop branch.
- Click clone button and copy link.
- Open a new terminal in VS Code.
- Go to the directory where you created your project.
- Run git clone <URL> in that directory. The URL must be the URL you copied from github.
- Make sure you have successfully pulled the project to your local.
- If you are at master branch or develop branch, definitely change your branch.

You can do this as follows.

When you click on the branch in the lower left corner in Vs Code, the branches will open above. From there you can select and change the branch.

6-Run the following command in VS Code terminal.
  
$ gauge install js

$ npm install

$ npm install -g taiko

IMPORTANT NOTE:
After all steps have been completed, the gauge will not run when the project is run and will give an error.
Gauge will not be able to open the browser.

The things to be done for this problem are as follows;

1- Connect to Symantec from your computer.

2- Go to Change settings > Exceptions > Configure settings

3- Click add button. And add the chrome.exe extension in the directory where you created the project.
Example :C:\Quality\hepsiburada-petshop\gauge\web\hepsiburada\node_modules\taiko\.local-chromium\win64-808757\chrome-win\chrome.exe

4- Add the following extension.
C:\Program Files (x86)\Google\Chrome\Application\chrome.exe

5- Save additions and close Symantec.

6- As a second step, compatibility adjustment is required. What needs to be done for this is the following;

- Go to the directory where you created the project. (Ex: C:\projeler\repos\inventiv-test\gauge\self-service\node_modules\taiko\.local-chromium\win64-724157\chrome-win\)
- Right click chrome.exe file and select properties.
- Compatibility > Change settings for all users > Check compatibility mode checkbox
- Click the Apply button.
