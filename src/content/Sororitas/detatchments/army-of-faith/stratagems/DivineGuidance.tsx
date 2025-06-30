import { Stratagem } from '../../../../../components/Stratagem';

export default function DivineGuidance() {
  return (
    <Stratagem
      name='Divine Guidance'
      cost={1}
      detatchment='Army of Faith'
      type='Battle Tactic'
      timing='any'
      when='Your Shooting Phase or the Fight phase.'
      target='One ADEPTA SORORITAS unit from your army that has not been selected to shoot or fight this phase.'
      effect='Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are destroyed as the result of any of those attacks, you gain 1 Miracle dice.'
    />
  );
}
