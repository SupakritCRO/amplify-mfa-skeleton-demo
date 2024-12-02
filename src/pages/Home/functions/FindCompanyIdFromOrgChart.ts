import { CompanySchema } from "@/client/rmi";

export function findCompanyIdFromOrgChart(data: CompanySchema[] | undefined) {
    if (!Array.isArray(data)) {
        return []
    }
    const uniqueCompanyIds = new Set<number>();
    data.forEach((item) => {
        uniqueCompanyIds.add(item.id);
    })
    return Array.from(uniqueCompanyIds)
}
