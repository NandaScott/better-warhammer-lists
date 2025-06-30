import { Stratagem } from '../../../components/Stratagem';

export default function RapidIngress() {
  return (
    <Stratagem
      name='RapidIngress'
      cost={1}
      detatchment='Core'
      type='Strategic Ploy'
      timing='enemy'
      when="End of your opponent's Movement phase."
      target='One unit from your army that is in Reserves.'
      effect='Your unit can arrive on the battlefield as if it were the reinforcements step of your Movement phase, and if every model in that unit has the Deep Strike ability, you can set that unit up as described in the Deep Strike ability (even though it is not your Movement phase).'
      restrictions='You cannot use this Stratagem to enable a unit to arrive on the battlefield during a battle round it would not normally be able to do so in.'
    />
  );
}
