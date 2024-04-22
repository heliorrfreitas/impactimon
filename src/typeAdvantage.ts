export enum Type {
    Fire,
    Grass,
    Water,
    Ground,
    Normal
}
export let typeAdvantage = {
    Fire: {
        Grass: 1.5,
        Water: 1,
        Ground: .5,
        Normal: 1,
        Fire: 1,
    },
    Grass: {
        Grass: 1,
        Water: .5,
        Ground: 1.5,
        Normal: 1,
        Fire: 1,
    },
    Water: {
        Grass: .5,
        Water: 1,
        Ground: 1,
        Normal: 1,
        Fire: 1.5,
    },
    Ground: {
        Grass: 1,
        Water: 1.5,
        Ground: 1,
        Normal: 1,
        Fire: .5,
    },
    Normal: {
        Grass: 1,
        Water: 1,
        Ground: 1,
        Normal: 1,
        Fire: 1,
    },
}