import { Type } from "./typeAdvantage"
enum SpecialMove{
    buff,
    debuffAttack,
    debuffAccuracy,
    heal
}

interface Move {
    Name: String,
    AttackScore: Number,
    Special: SpecialMove,
    Accuracy: Number,
    Type: Type
}

export let moves:Array<Move> = []