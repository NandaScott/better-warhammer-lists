import { Stratagem } from '../../../components/Stratagem';

export default function InsaneBravery() {
  return (
    <Stratagem
      name='Insane Bravery'
      cost={1}
      detatchment='Core'
      type='Epic Deed'
      timing='you'
      when='Battle-shock step of your Command phase, just before you take a Battle-shock test for a unit from your army.'
      target='That unit from your army.'
      effect='Your unit automatically passes that Battle-shock test.'
      restrictions='You cannot use this Stratagem more than once per battle.'
    />
  );
}
