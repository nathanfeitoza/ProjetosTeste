clear
read -p "Nome do projeto: " projeto
echo ${projeto}
sudo npm install -g express-generator
express -e --git ${projeto}
cd ${projeto}
sudo npm install
sudo npm install -g nodemon
npm start