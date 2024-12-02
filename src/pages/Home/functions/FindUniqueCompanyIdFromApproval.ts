export function findUniqueCompanyIdFromApproval(data: Array<any> | null): number[] {
    if (!Array.isArray(data)) {
        return []; 
    }

    const uniqueCompanyIds = new Set<number>();
    
    data.forEach((item) => {
        if (Array.isArray(item?.nodes)) {
            item.nodes.forEach((node: any) => {
                if (node?.company_id !== undefined) {
                    uniqueCompanyIds.add(node.company_id);
                }
            });
        }
    });

    return Array.from(uniqueCompanyIds); 
}
