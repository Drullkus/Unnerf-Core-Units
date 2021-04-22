Events.on(ContentInitEvent, () => {
	const units = [
		Vars.content.getByName(ContentType.unit, "alpha"),
		Vars.content.getByName(ContentType.unit, "beta"),
		Vars.content.getByName(ContentType.unit, "gamma")
	];

	units.forEach(unit => {
		unit.weapons.each(w => {
			w.bullet.buildingDamageMultiplier = 1;
		})
	})
});