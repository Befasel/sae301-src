/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r7x6hnjx7ohqq1l")

  // remove
  collection.schema.removeField("3yimw171")

  // remove
  collection.schema.removeField("xmdyysvi")

  // remove
  collection.schema.removeField("qljxm21h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pewsqfqs",
    "name": "couleur_branche",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "76kndbueu9chgsp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urldiahu",
    "name": "couleur_montant",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "76kndbueu9chgsp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqoj3lu2",
    "name": "couleur_vert",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "76kndbueu9chgsp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r7x6hnjx7ohqq1l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3yimw171",
    "name": "couleur_branche",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmdyysvi",
    "name": "couleur_verres",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qljxm21h",
    "name": "couleur_monture",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("pewsqfqs")

  // remove
  collection.schema.removeField("urldiahu")

  // remove
  collection.schema.removeField("qqoj3lu2")

  return dao.saveCollection(collection)
})
