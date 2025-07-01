interface SororitasArmyRule {
  simplified?: boolean;
}

function ArmyRuleOracle() {
  return (
    <div className='flex flex-col gap-2'>
      <p className='font-bold text-xl'>Gaining Miracle Dice</p>
      <p>
        If your Army Faction is <strong>ADEPTA SORORITAS</strong>, you gain 1
        Miracle dice:
      </p>
      <ul className='list-disc list-inside'>
        <li>At the start of each battle round.</li>
        <li>
          Each time an <strong>ADEPTA SORORITAS</strong> unit from your army is
          destroyed.
        </li>
      </ul>
      <p>
        Each time you gain a Miracle dice, roll one D6 and add that dice to your
        Miracle dice pool.
      </p>
      <p className='font-bold text-xl'>Gaining Miracle Dice</p>
      <p>
        You may choose to substitute one of the following types of dice rolls
        with any one Miracle dice from your pool. This counts as an unmodified
        die roll. You may not substitute more than 1 die per roll.
      </p>
      <ul className='list-disc list-inside'>
        <li>Advance roll</li>
        <li>Battle-shock test</li>
        <li>Charge roll</li>
        <li>Damage roll</li>
        <li>Hit roll</li>
        <li>Saving throw</li>
        <li>Wound roll</li>
      </ul>
      <aside>
        <p>
          <strong>Example:</strong> Instead of rolling 2D6 to take a
          Battle-shock test for a unit, you could use one dice from your Miracle
          dice pool. If the value of that dice was 4, the unit's Battle-shock
          test would be determined by rolling one D6 and adding 4 to it (i.e. it
          would be D6+4).
        </p>
      </aside>
    </div>
  );
}

export default function SororitasArmyRule(props: SororitasArmyRule) {
  const { simplified } = props;

  if (simplified) {
    return <ArmyRuleOracle />;
  }

  return (
    <div className='flex flex-col gap-2'>
      <p>
        If your Army Faction is <strong>ADEPTA SORORITAS</strong>, each unit
        from your army with this ability can perform on Act of Faith per phase.
        This is done using Miracle dice.
      </p>
      <p className='font-bold text-xl'>Gaining Miracle Dice</p>
      <p>
        If your Army Faction is <strong>ADEPTA SORORITAS</strong>, you gain 1
        Miracle dice:
      </p>
      <ul className='list-disc list-inside'>
        <li>At the start of each battle round.</li>
        <li>
          Each time an <strong>ADEPTA SORORITAS</strong> unit from your army is
          destroyed.
        </li>
      </ul>
      <p>
        Each time you gain a Miracle dice, roll one D6. The number you roll is
        the value of that Miracle dice. This value cannot be changed or
        re-rolled, unless a rule specifically states otherwise. Keep your
        Miracle dice to one side - this is your Miracle dice pool.
      </p>
      <p className='font-bold text-xl'>Gaining Miracle Dice</p>
      <p>
        Before making a dice roll for a model or unit from your army with the
        Acts of Faith ability, if you have one or more dice in your Miracle dice
        pool, that unit can perform an Act of Faith. If it does, select one of
        the dice from your Miracle dice pool to susbstitute that dice roll (if a
        roll involved more than one dice, e.g. a Charge roll or Battle-shock
        test, only a single dice can be substituted). The dice that is being
        substituted is not rolled; instea, the value of the selected Miracle
        dice is used as if it had been rolled (this counts as an unmodified dice
        roll of that value for all rules purposes). Each Miracle dice can only
        be selected for substitution once. Once all Miracle dice substitutions
        have been made, remove the chosen Miracle dice from your Miracle dice
        pool, and roll all remaining, unsubstituted dice that are apart of the
        dice roll. You can use Miracle dice when a unit performs an Act of Faith
        for any of the following types of dice roll:
      </p>
      <ul className='list-disc list-inside'>
        <li>Advance roll</li>
        <li>Battle-shock test</li>
        <li>Charge roll</li>
        <li>Damage roll</li>
        <li>Hit roll</li>
        <li>Saving throw</li>
        <li>Wound roll</li>
      </ul>
      <aside>
        <p>
          <strong>Example:</strong> Instead of rolling 2D6 to take a
          Battle-shock test for a unit, you could use one dice from your Miracle
          dice pool. If the value of that dice was 4, the unit's Battle-shock
          test would be determined by rolling one D6 and adding 4 to it (i.e. it
          would be D6+4).
        </p>
      </aside>
    </div>
  );
}
