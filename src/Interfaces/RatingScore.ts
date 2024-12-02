export enum RiskRatingScore {
    VeryLowRisk = 'Very low risk',
    Rare = 'Rare',
    VeryLow = 'Very low',

    LowRisk = 'Low risk',
    Unlikely = 'Unlikely',
    Minor = 'Minor',

    MediumRisk = 'Medium risk',
    Moderate = 'Moderate',
    Medium = 'Medium',

    HighRisk = 'High risk',
    Likely = 'Likely',
    Major = 'Major',

    VeryHighRisk = 'Critical risk',
    AlmostCertain = 'Almost certain',
    Critical = 'Critical',

    Unknown = 'Unknown',
}

export function mapScoreToLikelihood(score: number) {
    switch (score) {
        case 0:
            return RiskRatingScore.Unknown
        case 1:
            return RiskRatingScore.Rare
        case 2:
            return RiskRatingScore.Unlikely
        case 3:
            return RiskRatingScore.Medium
        case 4:
            return RiskRatingScore.Likely
        case 5:
            return RiskRatingScore.AlmostCertain
        default:
            return RiskRatingScore.Unknown
    }
}

export function mapScoreToImpact(score: number) {
    switch (score) {
        case 0:
            return RiskRatingScore.Unknown
        case 1:
            return RiskRatingScore.VeryLow
        case 2:
            return RiskRatingScore.Minor
        case 3:
            return RiskRatingScore.Medium
        case 4:
            return RiskRatingScore.Major
        case 5:
            return RiskRatingScore.Critical
        default:
            return RiskRatingScore.Unknown
    }
}

export function mapScoreToResult(score: number) {
    switch (score) {
        case 0:
            return RiskRatingScore.Unknown
        case 1:
            return RiskRatingScore.VeryLowRisk
        case 2:
            return RiskRatingScore.LowRisk
        case 3:
            return RiskRatingScore.MediumRisk
        case 4:
            return RiskRatingScore.HighRisk
        case 5:
            return RiskRatingScore.VeryHighRisk
        default:
            return RiskRatingScore.Unknown
    }
}

export interface RatingScore {
    likelihoodScore: RiskRatingScore
    impactScore: RiskRatingScore
    finalScore: RiskRatingScore
}