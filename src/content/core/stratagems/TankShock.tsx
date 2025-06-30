import { Stratagem } from '../../../components/Stratagem';

export default function TankShock() {
  return (
    <Stratagem
      name='TankShock'
      cost={1}
      detatchment='Core'
      type='Strategic Ploy'
      timing='you'
      when='Your Charge phase, just after a VEHICLE unit from your army ends a Charge move.'
      target='That VEHICLE unit.'
      effect='Select one enemy unit within Engagement Range of your unit, and select one Vehicle model in your unit that is within Engagement Range of that enemy unit. Roll a number of D6 equal to the Toughness characterstic of the selected VEHICLE model. For each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).'
    />
  );
}
