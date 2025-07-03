import { Stratagem } from '../../../components/Stratagem';
import type { Simplified, PhaseOnly } from '../../../interfaces/game-concepts';

interface CounterOffensiveProps extends Simplified, PhaseOnly {}

export default function CounterOffensive(props: CounterOffensiveProps) {
  const { simplified, phase } = props;

  if (phase !== 'Fight') return null;

  if (simplified) {
    return (
      <Stratagem
        name='Counter-Offensive'
        subtitle='Immediately fight back'
        cost={2}
        detatchment='Core'
        type='Strategic Ploy'
        timing='any'
        when='Fight phase, just after an enemy unit has fought.'
        target='One unit from your army that is within Engagement Range of one or more enemy units and that has not already been selected to fight this phase.'
        effect='Your unit fights next.'
      />
    );
  }

  return (
    <Stratagem
      name='Counter-Offensive'
      subtitle='Immediately fight back'
      cost={2}
      detatchment='Core'
      type='Strategic Ploy'
      timing='any'
      when='Fight phase, just after an enemy unit has fought.'
      target='One unit from your army that is within Engagement Range of one or more enemy units and that has not already been selected to fight this phase.'
      effect='Your unit fights next.'
    />
  );
}
