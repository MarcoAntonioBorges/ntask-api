module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { task: "Consertar o PC" },
                { task: "Fazer Compras" },
                { task: "Receber o Auxilio do Bonoro" }
            ]);
        }
    };
};