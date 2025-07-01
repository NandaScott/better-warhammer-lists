import { Stratagem } from '../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../interfaces/game-concepts';

interface SmokescreenProps extends Simplified, PhaseOnly, TurnOnly {}

export default function Smokescreen(props: SmokescreenProps) {
  const { simplified, phase, turn } = props;

  if (turn === 'Your Turn' && phase !== 'Shooting Phase') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Smokescreen'
        subtitle='After targeting: Benefit of Cover + Stealth'
        cost={1}
        detatchment='Core'
        type='Wargear'
        timing='enemy'
        when="Your opponent's Shooting phase, just after an enemy unit has selected its targets."
        target="One SMOKE unit from your army that was selected as the target of one or more of the attacking unit's attacks."
        effect='Until the end of the phase, all models in your unit have the Benefit of Cover and the Stealth ability.'
      />
    );
  }

  return (
    <Stratagem
      name='Smokescreen'
      subtitle='After targeting: Benefit of Cover + Stealth'
      cost={1}
      detatchment='Core'
      type='Wargear'
      timing='enemy'
      when="Your opponent's Shooting phase, just after an enemy unit has selected its targets."
      target="One SMOKE unit from your army that was selected as the target of one or more of the attacking unit's attacks."
      effect='Until the end of the phase, all models in your unit have the Benefit of Cover and the Stealth ability.'
    />
  );
}
