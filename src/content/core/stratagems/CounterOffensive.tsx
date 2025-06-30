import { Stratagem } from '../../../components/Stratagem';

export default function CounterOffensive() {
  return (
    <Stratagem
      name='Counter-Offensive'
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
