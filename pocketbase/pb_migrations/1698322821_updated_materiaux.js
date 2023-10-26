/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("76kndbueu9chgsp")

  collection.name = "Couleur"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("76kndbueu9chgsp")

  collection.name = "materiaux"

  return dao.saveCollection(collection)
})
