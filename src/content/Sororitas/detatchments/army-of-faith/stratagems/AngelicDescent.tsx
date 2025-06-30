import { Stratagem } from '../../../../../components/Stratagem';

export default function AngelicDescent() {
  return (
    <Stratagem
      name='Angelic Descent'
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
