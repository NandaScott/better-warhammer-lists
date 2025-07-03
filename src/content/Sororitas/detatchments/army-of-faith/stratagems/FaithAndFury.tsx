import { Stratagem } from '../../../../../components/Stratagem';
import type {
  PhaseOnly,
  Simplified,
} from '../../../../../interfaces/game-concepts';

interface FaithAndFuryProps extends Simplified, PhaseOnly {}

export default function FaithAndFury(props: FaithAndFuryProps) {
  const { simplified, phase } = props;

  if (phase !== 'Fight') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Faith and Fury'
        subtitle='Non selected: Melee weapons gain [LANCE] and killing models gains Miracle dice'
        cost={1}
        detatchment='Army of Faith'
        type='Battle Tactic'
        timing='any'
        when='Fight phase.'
        target='One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.'
        effect="Until end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If one or more enemy models are destroyed as a result of your unit's attacks this phase, you gain 1 Miracle dice"
      />
    );
  }

  return (
    <Stratagem
      name='Faith and Fury'
      subtitle='Non selected: Melee weapons gain [LANCE] and killing models gains Miracle dice'
      cost={1}
      detatchment='Army of Faith'
      type='Battle Tactic'
      timing='any'
      when='Fight phase.'
      target='One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.'
      effect="Until end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If one or more enemy models are destroyed as a result of your unit's attacks this phase, you gain 1 Miracle dice"
    />
  );
}
