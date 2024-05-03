export enum Type {
  Fire,
  Grass,
  Water,
  Ground,
  Normal,
}
export enum Advantage {
  Effective = 1.5,
  Neutral = 1,
  Ineffective = 0.5,
}

export let typeAdvantage = {
  Fire: {
    Grass: Advantage.Effective,
    Water: Advantage.Neutral,
    Ground: Advantage.Ineffective,
    Normal: Advantage.Neutral,
    Fire: Advantage.Neutral,
  },
  Grass: {
    Grass: Advantage.Neutral,
    Water: Advantage.Ineffective,
    Ground: Advantage.Effective,
    Normal: Advantage.Neutral,
    Fire: Advantage.Neutral,
  },
  Water: {
    Grass: Advantage.Ineffective,
    Water: Advantage.Neutral,
    Ground: Advantage.Neutral,
    Normal: Advantage.Neutral,
    Fire: Advantage.Effective,
  },
  Ground: {
    Grass: Advantage.Neutral,
    Water: Advantage.Effective,
    Ground: Advantage.Neutral,
    Normal: Advantage.Neutral,
    Fire: Advantage.Ineffective,
  },
  Normal: {
    Grass: Advantage.Neutral,
    Water: Advantage.Neutral,
    Ground: Advantage.Neutral,
    Normal: Advantage.Neutral,
    Fire: Advantage.Neutral,
  },
};
