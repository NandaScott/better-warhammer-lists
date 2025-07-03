import { Stratagem } from '../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../interfaces/game-concepts';

interface GrenadeProps extends Simplified, PhaseOnly, TurnOnly {}

export default function Grenade(props: GrenadeProps) {
  const { simplified, phase, turn } = props;

  if (turn === "Opponent's Turn" && phase !== 'Shooting') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Grenade'
        subtitle='Deal mortal wounds directly'
        cost={1}
        detatchment='Core'
        type='Wargear'
        timing='you'
        when='Your shooting phase.'
        target='One GRENADES unit from your army (excluding units that Advanced, Fell Back, or have shot this turn) that is not within Engagement Range of one or more enemy units.'
        effect='Select one GRENADES model in your unit and one enemy unit that is not within Engagement Range of one or more units from your army and is within 8" of and visible to your GRENADES model. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.'
      />
    );
  }

  return (
    <Stratagem
      name='Grenade'
      subtitle='Deal mortal wounds directly'
      cost={1}
      detatchment='Core'
      type='Wargear'
      timing='you'
      when='Your shooting phase.'
      target='One GRENADES unit from your army (excluding units that Advanced, Fell Back, or have shot this turn) that is not within Engagement Range of one or more enemy units.'
      effect='Select one GRENADES model in your unit and one enemy unit that is not within Engagement Range of one or more units from your army and is within 8" of and visible to your GRENADES model. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.'
    />
  );
}
