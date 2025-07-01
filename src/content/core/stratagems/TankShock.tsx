import { Stratagem } from '../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../interfaces/game-concepts';

interface TankShockProps extends Simplified, PhaseOnly, TurnOnly {}

export default function TankShock(props: TankShockProps) {
  const { simplified, phase, turn } = props;

  if (turn === "Opponent's Turn" && phase !== 'Charge Phase') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Tank Shock'
        subtitle='Use a vehicle that charged to deal mortal wounds'
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
  return (
    <Stratagem
      name='Tank Shock'
      subtitle='Use a vehicle that charged to deal mortal wounds'
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
