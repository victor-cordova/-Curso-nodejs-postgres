//En esta carpeta se colocarán los otros modelos.
const { User, UserSchema } = require("./user.model"); //Setup inicial = User
//Toda la configuración de la DB = UserSchema

function setupModels(sequelize) { //Recibe una conexión, por ello se le coloca el sequelize
    //Dentro de setupModels se hará la configuración de los modelos.
    User.init(UserSchema, User.config(sequelize)); //Se inicializa el setup inicial
    //con la configuración indicada por UserSchema
    //El método estático recibe la conexión, en el archivo que se exportó, por ende, aquí
    //también.
}

module.exports = setupModels;