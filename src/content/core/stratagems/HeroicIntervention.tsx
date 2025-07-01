import { Stratagem } from '../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../interfaces/game-concepts';

interface HeroicInterventionProps extends Simplified, PhaseOnly, TurnOnly {}

export default function HeroicIntervention(props: HeroicInterventionProps) {
  const { simplified, phase, turn } = props;

  if (turn === 'Your Turn' && phase !== 'Charge Phase') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Heroic Intervention'
        subtitle='Counter charge an enemy unit'
        cost={1}
        detatchment='Core'
        type='Strategic Ploy'
        timing='enemy'
        when="Your opponent's Charge phase, just after an enemy unit ends a Charge move."
        target='One unit from your army that is within 6" of that enemy unit and would be eligible to declare a charge against that enemy unit as if it were your Charge phase.'
        effect='Your unit now declares a charge that targets only that enemy unit, and you resolve the charge as if it were your Charge phase.'
        restrictions='You can only select a VEHICLE unit from your army if it is a WALKER. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.'
      />
    );
  }

  return (
    <Stratagem
      name='Heroic Intervention'
      subtitle='Counter charge an enemy unit'
      cost={1}
      detatchment='Core'
      type='Strategic Ploy'
      timing='enemy'
      when="Your opponent's Charge phase, just after an enemy unit ends a Charge move."
      target='One unit from your army that is within 6" of that enemy unit and would be eligible to declare a charge against that enemy unit as if it were your Charge phase.'
      effect='Your unit now declares a charge that targets only that enemy unit, and you resolve the charge as if it were your Charge phase.'
      restrictions='You can only select a VEHICLE unit from your army if it is a WALKER. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.'
    />
  );
}
