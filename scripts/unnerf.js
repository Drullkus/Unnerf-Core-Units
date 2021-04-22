Events.on(ContentInitEvent, () => {
	const units = [
		UnitTypes.alpha,
		UnitTypes.beta,
		UnitTypes.gamma
	];

	units.forEach(unit => {
		unit.weapons.each(w => {
			w.bullet.buildingDamageMultiplier = 1;
		})
	})
});
