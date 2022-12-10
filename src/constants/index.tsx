import { 
    IMenuItem, 
    MenuTitleType,
    IMember,
    AuthorityType,
} from "../types"

export const SAMPLE_MEMBERS: Array<IMember> = [
    {
        id: 1,
        loginId: "member01",
        name: 'member01-name',
        authority: AuthorityType.LEVEL1,
    },
    {
        id: 2,
        loginId: "member02",
        name: 'member02-name',
        authority: AuthorityType.LEVEL2,
    },
    {
        id: 3,
        loginId: "member03",
        name: 'member03-name',
        authority: AuthorityType.LEVEL3,
    }
]