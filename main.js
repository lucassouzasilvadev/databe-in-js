const database = {
    tables: {},
    createTable(statment){
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatment = statment.match(regExp);
        const tableName = parsedStatment[1];
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        let columns = parsedStatment[2];
        columns = columns.split(', ');

        for (let column of columns){
            column = column.trim().split(" ");
            const name = column[0];
            const type = column[1];
            this.tables[tableName].columns[name] = type;
            console.log(name, type);
        }
    },
    execute(statement){
        if(statement.startsWith("create table")){
            return this.createTable(statement);
        } 
    }
};

database.execute("create table book (id number, name string, age number, city string, state string, country string)");
console.log(JSON.stringify(database, undefined, " "));


//json não mostra funções

