/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("76kndbueu9chgsp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urjain5z",
    "name": "monture",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "r7x6hnjx7ohqq1l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9knpkdym",
    "name": "verres",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "r7x6hnjx7ohqq1l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("76kndbueu9chgsp")

  // remove
  collection.schema.removeField("urjain5z")

  // remove
  collection.schema.removeField("9knpkdym")

  return dao.saveCollection(collection)
})
