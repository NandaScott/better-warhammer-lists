import { Stratagem } from '../../../components/Stratagem';

export default function EpicChallenge() {
  return (
    <Stratagem
      name='Epic Challenge'
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
