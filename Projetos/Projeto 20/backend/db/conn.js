const mongoose = require("mongoose");

async function main(){
    try {
        
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://alexandre:VGN1JpuRQPTdxq1E@cluster0.dvrk3ts.mongodb.net/?retryWrites=true&w=majority");

        console.log("Conectado com sucesso!");
    } catch (error) {
        console.log("Erro: "+ error);
    }
}

module.exports = main;