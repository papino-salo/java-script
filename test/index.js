DATABASE_NAME = 'catalog';
DATABASE_VERSION = 1;
STORE_NAME = 'product';
 
var database;
var indexedDB = window.indexedDB || window.webkitIndexedDB
    || window.mozIndexedBD || window.msIndexedDB;
 
var request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);


function insertInitialData(catalogStore) {
    catalogStore.put({
        'name': 'A product',
        'description': 'Description of a product.',
        'price': 10,
    });
 
     catalogStore.put({
        'name': 'Another product',
        'description': 'Description of another product.',
        'price': 20,
        'subproduct': {
            'name': 'Subproduct of a product'
        }
    });
}

request.onupgradeneeded = function() {
    console.log('Database upgrade/creation.');
 
    database = request.result;
 
    var catalogStore = database.createObjectStore(
        STORE_NAME,
        {
            keyPath: 'id',
            autoIncrement: 'true'
        }
    );
 
    catalogStore.createIndex('by_id', 'id');
    catalogStore.createIndex('by_name', 'name');

    insertInitialData(catalogStore);
 
    console.log('The database has been created/updated.');
}

request.onsuccess = function() {
    console.log('Successful request for IndexedDB.');
 
    database = request.result;
 
    var transaction = database.transaction(STORE_NAME, 'readwrite');
    var catalogStore = transaction.objectStore(STORE_NAME);
 
    var moreData = [
        {
            'name': 'A third product',
            'description': 'Description of a third product.'
        },
        {
            'name': 'Yet another product',
            'description': 'One last product.'
        }
    ];
 
    moreData.forEach(function(data) {
        catalogStore.put(data);
    });
 
    transaction.oncomplete = function() {
        console.log('Transaction completed successfully.');
    }
 
    transaction.onerror = function(error) {
        console.log('An error occurred during the transaction: ' + error);
    }
}