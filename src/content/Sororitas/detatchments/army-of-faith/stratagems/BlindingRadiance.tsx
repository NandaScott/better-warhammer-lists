import { Stratagem } from '../../../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../../../interfaces/game-concepts';

interface BlindingRadianceProps extends Simplified, PhaseOnly, TurnOnly {}

export default function BlindingRadiance(props: BlindingRadianceProps) {
  const { simplified, phase, turn } = props;

  if (turn === 'Your Turn') return null;

  if (phase !== 'Shooting Phase' && phase !== 'Fight Phase') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Blinding Radiance'
        subtitle='After selected targets: Subtract 1 from the Hit roll.'
        cost={1}
        detatchment='Army of Faith'
        type='Strategic Ploy'
        timing='any'
        when="Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets."
        target={`One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attack unit\'s attacks, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3" of such a unit.`}
        effect='Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, each time an attack targets that unit, subtract 1 from the Hit roll.'
      />
    );
  }

  return (
    <Stratagem
      name='Blinding Radiance'
      subtitle='After selected targets: Subtract 1 from the Hit roll.'
      cost={1}
      detatchment='Army of Faith'
      type='Strategic Ploy'
      timing='any'
      when="Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets."
      target={`One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attack unit\'s attacks, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3" of such a unit.`}
      effect='Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3" of your unit, each time an attack targets that unit, subtract 1 from the Hit roll.'
    />
  );
}
