import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions'
// import { GithubLabel } from '../interfaces'

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60, // 1 hour of staleTime

        // placeholderData: [
        //     {
        //         id: 739777675,
        //         node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
        //         url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
        //         name: "Component: Component API",
        //         color: "d4c5f9",
        //         default: false
        //     } satisfies GithubLabel,
        //     {
        //         id: 139653724,
        //         node_id: "MDU6TGFiZWwxMzk2NTM3MjQ=",
        //         url: "https://api.github.com/repos/facebook/react/labels/Component:%20Core%20Utilities",
        //         name: "Component: Core Utilities",
        //         color: "c5def5",
        //         default: false
        //     } satisfies GithubLabel,
        // ],
        // initialData: [
        //     {
        //         id: 739777675,
        //         node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
        //         url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
        //         name: "Component: Component API",
        //         color: "d4c5f9",
        //         default: false
        //     } satisfies GithubLabel,
        //     {
        //         id: 139653724,
        //         node_id: "MDU6TGFiZWwxMzk2NTM3MjQ=",
        //         url: "https://api.github.com/repos/facebook/react/labels/Component:%20Core%20Utilities",
        //         name: "Component: Core Utilities",
        //         color: "c5def5",
        //         default: false
        //     } satisfies GithubLabel,
        // ]
    })
    return { labelsQuery }
}