import { Stratagem } from '../../../components/Stratagem';
import type { PhaseOnly, Simplified } from '../../../interfaces/game-concepts';

interface EpicChallengeProps extends Simplified, PhaseOnly {}

export default function EpicChallenge(props: EpicChallengeProps) {
  const { simplified, phase } = props;

  if (phase !== 'Fight') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Epic Challenge'
        subtitle='Give a Character in a fight [PRECISION]'
        cost={1}
        detatchment='Core'
        type='Epic Deed'
        timing='any'
        when='Fight phase, when a CHARACTER unit from your army that is within Engagement Range of one or more Attached units is selected to fight.'
        target='One CHARACTER model in your unit.'
        effect='Until the end of the phase, all melee attacks made by that model have the [PRECISION] ability.'
      />
    );
  }

  return (
    <Stratagem
      name='Epic Challenge'
      subtitle='Give a Character in a fight [PRECISION]'
      cost={1}
      detatchment='Core'
      type='Epic Deed'
      timing='any'
      when='Fight phase, when a CHARACTER unit from your army that is within Engagement Range of one or more Attached units is selected to fight.'
      target='One CHARACTER model in your unit.'
      effect='Until the end of the phase, all melee attacks made by that model have the [PRECISION] ability.'
    />
  );
}
