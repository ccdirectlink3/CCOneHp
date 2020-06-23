sc.Model.addObserver(sc.map, {
	modelChanged(model, event) {
		if(model === sc.map && event === sc.MAP_EVENT.MAP_ENTERED) {
			const player = ig.game.playerEntity;
			const combatParams = player.params;

			combatParams.baseParams.hp = 1;
			combatParams.currentHp = 1;
			sc.Model.notifyObserver(combatParams, sc.COMBAT_PARAM_MSG.HP_CHANGED);

			Object.defineProperty(player, 'fallDmgFactor', {
				set(_value) {
				},
				get() {
					return 1;
				}
			});
			Object.defineProperty(combatParams, 'damageFactor', {
				set(_value) {
				},
				get() {
					return 1;
				}
			});
		}
	}
});
