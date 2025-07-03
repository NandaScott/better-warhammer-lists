import { Stratagem } from '../../../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
  TurnOnly,
} from '../../../../../interfaces/game-concepts';

interface AngelicDescentProps extends Simplified, PhaseOnly, TurnOnly {}

export default function AngelicDescent(props: AngelicDescentProps) {
  const { simplified, phase, turn } = props;

  if (turn === 'Your Turn' && phase !== 'Fight') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Angelic Descent'
        subtitle='Non Engaged: Put a Jump Pack unit back in Reserves'
        cost={1}
        detatchment='Army of Faith'
        type='Strategic Ploy'
        timing='enemy'
        when="End of your opponent's Fight phase."
        target='One ADEPTA SORORITAS JUMP PACK unit from your army.'
        effect='Remove your unit from the battlefield and place it into Strategic Reserves.'
        restrictions='You cannot select a unit that is within Engagement Range of one or more enemy units.'
      />
    );
  }

  return (
    <Stratagem
      name='Angelic Descent'
      subtitle='Non Engaged: Put a Jump Pack unit back in Reserves'
      cost={1}
      detatchment='Army of Faith'
      type='Strategic Ploy'
      timing='enemy'
      when="End of your opponent's Fight phase."
      target='One ADEPTA SORORITAS JUMP PACK unit from your army.'
      effect='Remove your unit from the battlefield and place it into Strategic Reserves.'
      restrictions='You cannot select a unit that is within Engagement Range of one or more enemy units.'
    />
  );
}
