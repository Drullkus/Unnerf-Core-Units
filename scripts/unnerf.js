Events.on(ContentInitEvent, () => {
	Vars.content.blocks().each(b => b instanceof CoreBlock, b => {
		b.unitType.weapons.each(w => {
			w.bullet.buildingDamageMultiplier = 1;
		})
	})
});