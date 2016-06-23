/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';

router.post('/', (req, res) => {
  const g = new Game(req.body);
  g.save(() => {
    res.send(g);
  });
});

router.put('/:id/flip', (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    const o = {};
    const n = req.body.num * 1;

    if (n) {
      o.heads = game.heads + 1;
    } else {
      o.tails = game.tails + 1;
    }

    game.update(o, () => {
      Game.findById(req.params.id, (err1, game1) => {
        res.send(game1);
      });
    });
  });
});
