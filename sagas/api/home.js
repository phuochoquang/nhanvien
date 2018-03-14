import SQLite from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({ name: 'nhanvien.db', createFromLocation: "~nhanvien.db" });
function* getTopProductFromApi() {
    query = 'SELECT * FROM name LIMIT 0 , 10';
    let product = [];
    db.transaction((tx) => {
        tx.executeSql(query, [], (tx, results) => {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                product[i] = row;
            }
        });
    }, null, null);    
    return product;
}

function* getTopMoreProductFromApi(page){
    query = 'SELECT * FROM name LIMIT ' + page +' , 10';
    product = [];
    db.transaction((tx) => {
        tx.executeSql(query, [], (tx, results) => {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                product[i] = row;
            }
        });
    }, null, null);
    return product;
}

export const HomeApi = {
    getTopProductFromApi,
    getTopMoreProductFromApi
}

