const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool ({
    database: 'react-gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000,
});



// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    pool.query(
        `UPDATE "photos" SET "likes" = "likes"+1 WHERE "id" = $1;`,
        [req.params.id]).then((result)=> {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error in /like UPDATE`, error);
            res.sendStatus(500);
        })
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    pool.query( `SELECT * FROM "photos" ORDER BY "year" DESC;`).then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log(`Error during get`, error);
        res.sendStatus(error);
    });
}); // END GET Route

module.exports = router;