/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6m8vnf0hxr6bbxu",
    "created": "2023-10-26 12:29:57.198Z",
    "updated": "2023-10-26 12:29:57.198Z",
    "name": "LunnettesParUser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1c3qwbpv",
        "name": "utilisateur",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ojgo0pid",
        "name": "creation",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "r7x6hnjx7ohqq1l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, users.id as utilisateur, users.lunette_creer as creation\nFROM users\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6m8vnf0hxr6bbxu");

  return dao.deleteCollection(collection);
})
