export const list = {
  name: 'Miracle Army',
  faction: 'Adepta Sororitas',
  detatchment: 'Army of Faith',
  pointsUsed: 2000,
  pointsTotal: 2000,
  units: [
    {
      name: 'Dominion Squad',
      modelNumbers: 10,
      points: 125,
      attachedUnits: [
        {
          name: 'Canoness',
          enhancements: [{ name: 'Blade of Saint Ellynor', points: 15 }],
          modelNumbers: 1,
          points: 50,
        },
      ],
      wargearOptions: [
        {
          weapon: 'power weapon',
          count: 1,
        },
        {
          weapon: 'meltagun',
          count: 4,
        },
        {
          weapon: 'boltgun',
          count: 6,
        },
        {
          weapon: 'bolt pistol',
          count: 10,
        },
        {
          weapon: 'close combat weapon',
          count: 10,
        },
      ],
    },
  ],
};
