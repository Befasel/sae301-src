/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qhnhgcwkrzef2jc")

  collection.name = "modele"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qhnhgcwkrzef2jc")

  collection.name = "Modeles"

  return dao.saveCollection(collection)
})
