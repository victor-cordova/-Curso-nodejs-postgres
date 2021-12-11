const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users"; //Esté será el nombre de la base de datos.

const UserSchema = { //Define la estructura de la DB.
    id: { //Se está creando un atributo, el atributo id
        // allowNull: false, //Lo comenté porque es redundante colocarlo siendo tipo pk
        primaryKey: true,
        autorIncrement: true,
        type: DataTypes.INTEGER //Se indica el tipo de valor.
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at", //La norma para poner nombres en DB usando _ para separar.
        //Por ello no puede createdAt, si no created_at.
        defaultValue: Sequelize.NOW //El valor por defecto es el momento que se colocó una
        //variable con sequelize
    }
};

class User extends Model { //Se está haciendo uso de POO, al momento de hacer extends 
    //implica que la clase User es un extendido de Model. Lo que pasa es que User tiene
    //las variables y métodos de Model y más, por eso lo de extends.
    static associate() { //Es un método disponible a usar sin la necesidad de inicializar el
        //objeto.

    };

    static config(sequelize) { //Otro método estático que recibe una conexión usualmente
        //se le coloca como sequelize.
        return { //retorna la configuración
            sequelize,
            tableName: USER_TABLE,
            modelName: "User", //Tiene el mismo nombre de la clase, o sea User.
            timestamps: false //Crea valores de relleno cuando se crean nuevas entidades.
        };
    };
};

module.exports = { USER_TABLE, UserSchema, User }; 