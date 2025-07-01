import { Stratagem } from '../../../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../../../interfaces/game-concepts';

interface DivineGuidanceProps extends Simplified, PhaseOnly, TurnOnly {}

export default function DivineGuidance(props: DivineGuidanceProps) {
  const { simplified, phase, turn } = props;

  if (turn === 'Your Turn') return null;

  if (phase !== 'Shooting Phase' && phase !== 'Fight Phase') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Divine Guidance'
        subtitle='Non selected: +1 Armour Pen and killing models gains Miracle dice'
        cost={1}
        detatchment='Army of Faith'
        type='Battle Tactic'
        timing='any'
        when='Your Shooting Phase or the Fight phase.'
        target='One ADEPTA SORORITAS unit from your army that has not been selected to shoot or fight this phase.'
        effect='Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are destroyed as the result of any of those attacks, you gain 1 Miracle dice.'
      />
    );
  }

  return (
    <Stratagem
      name='Divine Guidance'
      subtitle='Non selected: +1 Armour Pen and killing models gains Miracle dice'
      cost={1}
      detatchment='Army of Faith'
      type='Battle Tactic'
      timing='any'
      when='Your Shooting Phase or the Fight phase.'
      target='One ADEPTA SORORITAS unit from your army that has not been selected to shoot or fight this phase.'
      effect='Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are destroyed as the result of any of those attacks, you gain 1 Miracle dice.'
    />
  );
}
